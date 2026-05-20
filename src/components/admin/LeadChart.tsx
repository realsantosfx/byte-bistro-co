import { useMemo } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { format, parseISO, startOfDay, eachDayOfInterval, subDays } from "date-fns";
import { de } from "date-fns/locale";

interface Lead {
  id: string;
  priority: string;
  created_at: string;
}

interface LeadChartProps {
  leads: Lead[];
}

export const LeadChart = ({ leads }: LeadChartProps) => {
  const chartData = useMemo(() => {
    if (leads.length === 0) return [];

    const today = new Date();
    const thirtyDaysAgo = subDays(today, 30);
    
    const days = eachDayOfInterval({ start: thirtyDaysAgo, end: today });
    
    return days.map(day => {
      const dayStart = startOfDay(day);
      const dayLeads = leads.filter(lead => {
        const leadDate = startOfDay(parseISO(lead.created_at));
        return leadDate.getTime() === dayStart.getTime();
      });

      return {
        date: format(day, "dd.MM", { locale: de }),
        fullDate: format(day, "dd. MMMM yyyy", { locale: de }),
        total: dayLeads.length,
        hot: dayLeads.filter(l => l.priority === "hot").length,
        warm: dayLeads.filter(l => l.priority === "warm").length,
        cold: dayLeads.filter(l => l.priority === "cold").length,
      };
    });
  }, [leads]);

  if (leads.length === 0) {
    return (
      <div className="bg-card border border-border rounded-xl p-6 text-center">
        <p className="text-muted-foreground">Keine Daten für das Diagramm verfügbar.</p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Lead-Entwicklung (letzte 30 Tage)</h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorHot" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f97316" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#f97316" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorWarm" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#eab308" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#eab308" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorCold" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 12 }}
              className="text-muted-foreground"
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 12 }}
              className="text-muted-foreground"
              tickLine={false}
              allowDecimals={false}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
              labelFormatter={(_, payload) => payload?.[0]?.payload?.fullDate || ""}
            />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="hot" 
              name="Hot" 
              stackId="1"
              stroke="#f97316" 
              fill="url(#colorHot)" 
            />
            <Area 
              type="monotone" 
              dataKey="warm" 
              name="Warm" 
              stackId="1"
              stroke="#eab308" 
              fill="url(#colorWarm)" 
            />
            <Area 
              type="monotone" 
              dataKey="cold" 
              name="Cold" 
              stackId="1"
              stroke="#3b82f6" 
              fill="url(#colorCold)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};