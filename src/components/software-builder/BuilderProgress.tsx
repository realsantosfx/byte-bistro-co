import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface BuilderProgressProps {
  currentStep: number;
  totalSteps: number;
  stepLabels: string[];
  onStepClick: (step: number) => void;
}

const BuilderProgress = ({ currentStep, totalSteps, stepLabels, onStepClick }: BuilderProgressProps) => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-lg font-semibold text-foreground hover:opacity-70 transition-opacity"
          >
            SantosLab
          </Link>

          {/* Progress Steps */}
          <div className="hidden md:flex items-center gap-2">
            {stepLabels.map((label, index) => {
              const stepNum = index + 1;
              const isCompleted = currentStep > stepNum;
              const isCurrent = currentStep === stepNum;
              
              return (
                <button
                  key={label}
                  onClick={() => onStepClick(stepNum)}
                  disabled={stepNum > currentStep}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-all",
                    isCompleted && "text-primary cursor-pointer hover:bg-primary/5",
                    isCurrent && "bg-primary/10 text-primary font-medium",
                    !isCompleted && !isCurrent && "text-muted-foreground cursor-not-allowed"
                  )}
                >
                  <span className={cn(
                    "w-5 h-5 rounded-full flex items-center justify-center text-xs",
                    isCompleted && "bg-primary text-primary-foreground",
                    isCurrent && "bg-primary text-primary-foreground",
                    !isCompleted && !isCurrent && "bg-muted text-muted-foreground"
                  )}>
                    {isCompleted ? <Check className="w-3 h-3" /> : stepNum}
                  </span>
                  {label}
                </button>
              );
            })}
          </div>

          {/* Mobile Progress */}
          <div className="md:hidden flex items-center gap-3">
            <span className="text-sm text-muted-foreground">
              Schritt {currentStep} von {totalSteps}
            </span>
            <div className="w-16 h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-primary rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BuilderProgress;
