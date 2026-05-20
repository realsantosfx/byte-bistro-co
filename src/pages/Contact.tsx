import { useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LeadFunnel from "@/components/funnel/LeadFunnel";
import { useFunnelSubmit } from "@/components/funnel/useFunnelSubmit";

const Contact = () => {
  const navigate = useNavigate();
  const { submitFunnel } = useFunnelSubmit();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <LeadFunnel onComplete={submitFunnel} onClose={() => navigate("/")} />
      <Footer />
    </div>
  );
};

export default Contact;
