import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "resend";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { CRA_CHECKLIST_PDF_BASE64 } from "./cra-checkliste-b64.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  message: string;
  projectType?: string;
  budget?: string;
  companySize?: string;
  timeline?: string;
  sendCraChecklist?: boolean;
}

const projectTypeLabels: Record<string, string> = {
  webapp: "Web-Applikation",
  landingpage: "Landingpage",
  ecommerce: "E-Commerce",
  mvp: "MVP / Prototyp",
  redesign: "Redesign",
  other: "Sonstiges",
};

const budgetLabels: Record<string, string> = {
  "5k-10k": "5.000 – 10.000 €",
  "10k-25k": "10.000 – 25.000 €",
  "25k-50k": "25.000 – 50.000 €",
  "50k+": "50.000+ €",
  unsure: "Noch unklar",
};

const companySizeLabels: Record<string, string> = {
  solo: "Solo / Freelancer",
  startup: "Startup (2-10)",
  sme: "KMU (11-50)",
  midmarket: "Mittelstand (51-250)",
  enterprise: "Enterprise (250+)",
};

const timelineLabels: Record<string, string> = {
  asap: "So schnell wie möglich",
  "1-2months": "1-2 Monate",
  "3-6months": "3-6 Monate",
  flexible: "Flexibel",
};

const handler = async (req: Request): Promise<Response> => {
  console.log("Received contact form submission");

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: ContactRequest = await req.json();
    const { name, email, message, projectType, budget, companySize, timeline, sendCraChecklist } = body;
    console.log(`Processing contact from: ${name} (${email})`);

    if (!name || !email || !message) {
      console.error("Missing required fields");
      throw new Error("Alle Felder müssen ausgefüllt werden");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error("Invalid email format");
      throw new Error("Ungültige E-Mail-Adresse");
    }

    let leadScore = 0;
    let priority = "cold";

    // If this is a lead funnel submission, save to database
    if (projectType && budget && companySize && timeline) {
      console.log("Lead funnel submission detected, saving to database...");
      
      const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
      const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
      const supabase = createClient(supabaseUrl, supabaseServiceKey);

      const messageMatch = message.match(/📝 Nachricht:\n([\s\S]*?)$/);
      const originalMessage = messageMatch ? messageMatch[1].trim() : null;

      const { data: leadData, error: insertError } = await supabase
        .from("leads")
        .insert({
          name,
          email,
          project_type: projectType,
          budget,
          company_size: companySize,
          timeline,
          message: originalMessage,
        })
        .select("lead_score, priority")
        .single();

      if (insertError) {
        console.error("Error saving lead to database:", insertError);
      } else {
        leadScore = leadData?.lead_score || 0;
        priority = leadData?.priority || "cold";
        console.log(`Lead saved successfully. Score: ${leadScore}, Priority: ${priority}`);
      }
    }

    // Send notification email
    const isHotLead = priority === "hot";
    const subjectPrefix = isHotLead ? "🔥 HOT LEAD: " : "";
    
    const emailResponse = await resend.emails.send({
      from: "Santoslab Kontakt <onboarding@resend.dev>",
      to: ["hello@santoslab.de"],
      subject: `${subjectPrefix}Neue Kontaktanfrage von ${name}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto;">
          ${isHotLead ? `
            <div style="background: linear-gradient(135deg, #ff6b35, #f7931e); color: white; padding: 16px 24px; border-radius: 12px 12px 0 0; margin-bottom: 0;">
              <h2 style="margin: 0; font-size: 20px;">🔥 Hot Lead erkannt!</h2>
              <p style="margin: 8px 0 0 0; opacity: 0.9;">Score: ${leadScore}/100 • Priorität: ${priority.toUpperCase()}</p>
            </div>
          ` : ''}
          
          <div style="background-color: #f5f5f7; padding: 24px; ${isHotLead ? 'border-radius: 0 0 12px 12px;' : 'border-radius: 12px;'} margin-bottom: 24px;">
            <p style="margin: 0 0 12px 0; color: #666;">
              <strong style="color: #1a1a1a;">Name:</strong><br/>
              ${name}
            </p>
            <p style="margin: 0 0 12px 0; color: #666;">
              <strong style="color: #1a1a1a;">E-Mail:</strong><br/>
              <a href="mailto:${email}" style="color: #0066cc;">${email}</a>
            </p>
            ${projectType ? `
              <p style="margin: 0 0 12px 0; color: #666;">
                <strong style="color: #1a1a1a;">Projekttyp:</strong><br/>
                ${projectTypeLabels[projectType] || projectType}
              </p>
            ` : ''}
            ${budget ? `
              <p style="margin: 0 0 12px 0; color: #666;">
                <strong style="color: #1a1a1a;">Budget:</strong><br/>
                ${budgetLabels[budget] || budget}
              </p>
            ` : ''}
            ${companySize ? `
              <p style="margin: 0 0 12px 0; color: #666;">
                <strong style="color: #1a1a1a;">Unternehmensgröße:</strong><br/>
                ${companySizeLabels[companySize] || companySize}
              </p>
            ` : ''}
            ${timeline ? `
              <p style="margin: 0 0 12px 0; color: #666;">
                <strong style="color: #1a1a1a;">Zeitrahmen:</strong><br/>
                ${timelineLabels[timeline] || timeline}
              </p>
            ` : ''}
            <p style="margin: 0; color: #666;">
              <strong style="color: #1a1a1a;">Nachricht:</strong><br/>
              ${message.replace(/\n/g, '<br/>')}
            </p>
          </div>
          
          ${isHotLead ? `
            <div style="background-color: #fff3cd; border: 1px solid #ffc107; padding: 16px; border-radius: 8px; margin-bottom: 24px;">
              <p style="margin: 0; color: #856404; font-weight: 500;">
                ⚡ Empfehlung: Diesen Lead innerhalb der nächsten 2 Stunden kontaktieren!
              </p>
            </div>
          ` : ''}
          
          <p style="color: #999; font-size: 12px;">
            Diese E-Mail wurde über das Kontaktformular auf santoslab.de gesendet.
          </p>
        </div>
      `,
      reply_to: email,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, message: "Nachricht erfolgreich gesendet" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Fehler beim Senden der Nachricht" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
