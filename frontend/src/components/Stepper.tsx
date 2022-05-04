import { useState, useEffect, ReactNode } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";

const steps = ["Upload", "Add detail", "Mint"];

export default function HorizontalStepper({
  children,
  onNextStep,
  isInputValid,
}: any) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (isInputValid(activeStep) !== true) return;
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    onNextStep(activeStep);
  }, [activeStep, onNextStep]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "75vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{ margin: "30px 0" }}
      >
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: ReactNode;
          } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <p>Transaction is being confirmed on NEAR</p>
        </>
      ) : (
        <>
          {children}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button color="inherit" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
