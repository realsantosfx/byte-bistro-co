import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BuilderWelcome from "@/components/software-builder/BuilderWelcome";
import ProblemQuestionnaire from "@/components/software-builder/ProblemQuestionnaire";
import FeatureBuilder from "@/components/software-builder/FeatureBuilder";
import BuilderSummary from "@/components/software-builder/BuilderSummary";
import BuilderProgress from "@/components/software-builder/BuilderProgress";

export interface ProjectData {
  // Problem Definition
  projectName: string;
  problemStatement: string;
  targetAudience: string;
  currentSolution: string;
  successMetrics: string;
  
  // Features
  selectedFeatures: string[];
  
  // Comments
  additionalNotes: string;
}

const initialData: ProjectData = {
  projectName: "",
  problemStatement: "",
  targetAudience: "",
  currentSolution: "",
  successMetrics: "",
  selectedFeatures: [],
  additionalNotes: "",
};

const SoftwareBuilder = () => {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<ProjectData>(initialData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const totalSteps = 4;
  const stepLabels = ["Willkommen", "Problem", "Features", "Zusammenfassung"];

  const updateData = (updates: Partial<ProjectData>) => {
    setData((prev) => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const goToStep = (targetStep: number) => {
    if (targetStep >= 0 && targetStep < totalSteps) {
      setStep(targetStep);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {step > 0 && (
        <BuilderProgress 
          currentStep={step} 
          totalSteps={totalSteps - 1} 
          stepLabels={stepLabels.slice(1)}
          onStepClick={goToStep}
        />
      )}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {step === 0 && (
            <BuilderWelcome onStart={() => setStep(1)} />
          )}
          {step === 1 && (
            <ProblemQuestionnaire 
              data={data} 
              updateData={updateData} 
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          {step === 2 && (
            <FeatureBuilder 
              data={data} 
              updateData={updateData} 
              onNext={nextStep}
              onBack={prevStep}
            />
          )}
          {step === 3 && (
            <BuilderSummary 
              data={data}
              updateData={updateData}
              onBack={prevStep}
              onRestart={() => {
                setData(initialData);
                setStep(0);
              }}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SoftwareBuilder;
