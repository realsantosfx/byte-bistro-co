import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { ProjectData } from "@/pages/SoftwareBuilder";

interface ProblemQuestionnaireProps {
  data: ProjectData;
  updateData: (updates: Partial<ProjectData>) => void;
  onNext: () => void;
  onBack: () => void;
}

interface Question {
  id: keyof ProjectData;
  title: string;
  subtitle: string;
  placeholder: string;
  type: "input" | "textarea";
}

const questions: Question[] = [
  {
    id: "projectName",
    title: "Wie heißt Ihr Projekt?",
    subtitle: "Ein Arbeitstitel genügt. Sie können ihn später ändern.",
    placeholder: "z.B. Kundenportal, Buchungssystem, Mitarbeiter-App",
    type: "input",
  },
  {
    id: "problemStatement",
    title: "Welches Problem möchten Sie lösen?",
    subtitle: "Beschreiben Sie die zentrale Herausforderung, die Ihre Software adressieren soll.",
    placeholder: "z.B. Unsere Kunden müssen derzeit per E-Mail Termine anfragen, was zu langen Wartezeiten führt...",
    type: "textarea",
  },
  {
    id: "targetAudience",
    title: "Wer wird die Software nutzen?",
    subtitle: "Beschreiben Sie Ihre Zielgruppe so konkret wie möglich.",
    placeholder: "z.B. Kleine und mittelständische Unternehmen im Handwerk, die ihre Auftragsverwaltung digitalisieren möchten",
    type: "textarea",
  },
  {
    id: "currentSolution",
    title: "Wie wird das Problem heute gelöst?",
    subtitle: "Welche Tools, Prozesse oder Workarounds existieren aktuell?",
    placeholder: "z.B. Excel-Tabellen, E-Mail, manuelle Prozesse, bestehende Software die nicht passt...",
    type: "textarea",
  },
  {
    id: "successMetrics",
    title: "Woran messen Sie den Erfolg?",
    subtitle: "Was muss passieren, damit Sie sagen: Das war die richtige Entscheidung?",
    placeholder: "z.B. 50% weniger Anfragen per Telefon, schnellere Bearbeitung, höhere Kundenzufriedenheit...",
    type: "textarea",
  },
];

const ProblemQuestionnaire = ({ data, updateData, onNext, onBack }: ProblemQuestionnaireProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const question = questions[currentQuestion];
  const value = data[question.id] as string;
  const isLastQuestion = currentQuestion === questions.length - 1;
  const isFirstQuestion = currentQuestion === 0;
  
  const canProceed = value.trim().length > 0;
  
  const handleNext = () => {
    if (isLastQuestion) {
      onNext();
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };
  
  const handleBack = () => {
    if (isFirstQuestion) {
      onBack();
    } else {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey && canProceed) {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="w-full max-w-2xl">
          {/* Progress Dots */}
          <div className="flex items-center justify-center gap-2 mb-12">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentQuestion 
                    ? "bg-primary w-6" 
                    : index < currentQuestion 
                      ? "bg-primary" 
                      : "bg-muted"
                }`}
              />
            ))}
          </div>

          {/* Question */}
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-3">
              {question.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {question.subtitle}
            </p>

            {question.type === "input" ? (
              <input
                type="text"
                value={value}
                onChange={(e) => updateData({ [question.id]: e.target.value })}
                onKeyDown={handleKeyDown}
                placeholder={question.placeholder}
                autoFocus
                className="w-full text-2xl md:text-3xl bg-transparent border-b-2 border-border focus:border-primary outline-none pb-4 text-foreground placeholder:text-muted-foreground/50 transition-colors"
              />
            ) : (
              <textarea
                value={value}
                onChange={(e) => updateData({ [question.id]: e.target.value })}
                onKeyDown={handleKeyDown}
                placeholder={question.placeholder}
                autoFocus
                rows={4}
                className="w-full text-lg md:text-xl bg-transparent border-2 border-border focus:border-primary outline-none p-4 rounded-xl text-foreground placeholder:text-muted-foreground/50 transition-colors resize-none"
              />
            )}

            {/* Hint */}
            <p className="text-sm text-muted-foreground mt-4">
              {question.type === "textarea" 
                ? "Shift + Enter für neue Zeile, Enter zum Fortfahren"
                : "Enter zum Fortfahren"
              }
            </p>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12">
            <Button
              variant="ghost"
              onClick={handleBack}
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Zurück
            </Button>
            
            <Button
              variant="apple"
              onClick={handleNext}
              disabled={!canProceed}
              className="gap-2"
            >
              {isLastQuestion ? "Zu den Features" : "Weiter"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProblemQuestionnaire;
