import { useState } from "react";
import HorizontalStepper from "../components/Stepper";
import "../index.css"

const CreatePage = () => {
  const UploadStep = () => {
    return <div>upload step</div>;
  };

  const VerifyStep = () => {
    return <div>verify step</div>;
  };

  const FinishStep = () => {
    return <div>finish step</div>;
  };

  const steps = [UploadStep, VerifyStep, FinishStep];
  const [activeStep, setActiveStep] = useState<JSX.Element>(steps[0]);

  const onNextStep = (nextStep: number) => {
    setActiveStep(steps[nextStep]);
  };

  return (
    <div className="page-container">
      <HorizontalStepper onNextStep={onNextStep} children={activeStep} />
    </div>
  );
};

export default CreatePage;
