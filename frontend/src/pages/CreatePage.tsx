import { useState } from "react";
import HorizontalStepper from "../components/Stepper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../index.css";
import { handleMint } from "./../near/index";
import { isValidLink } from "../helpers";

const CreatePage = ({ currentUser, wallet }: any) => {
  const [file, setFile] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const isInputValid = (activeStep: number): boolean => {
    if (activeStep === 0) {
      if (!file) {
        setError("Please fill in all inputs to proceed.");
        return false;
      }
      if (!isValidLink(file)) {
        setError("Please use a valid link.");
        return false;
      }
    } else if (activeStep === 1 && (!name || !description)) {
      setError("Please fill in all inputs to proceed.");
      return false;
    }
    setError("");
    return true;
  };

  const UploadStep = (file: string) => {
    return (
      <>
        <Typography variant="h4" component="h4">
          Upload a contract
        </Typography>
        <Typography variant="subtitle1" component="p" sx={{ margin: "30px 0" }}>
          For now we accept links to publicly hosted files. In future you will
          be able to upload media, pdf and e-book files directly from your
          computer.
        </Typography>
        <Box
          sx={{
            width: "50%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <TextField
            id="standard-basic"
            label="Link to your file"
            variant="standard"
            value={file}
            onChange={(e) => setFile(e.target.value)}
          />
        </Box>
      </>
    );
  };

  const DetailStep = (name: string, description: string) => {
    return (
      <>
        <Typography variant="h4" component="h4">
          Add contract metadata
        </Typography>
        <Typography variant="subtitle1" component="p" sx={{ margin: "30px 0" }}>
          Something about why this step is necessary etc.
        </Typography>
        <Box
          sx={{
            width: "50%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <TextField
            id="standard-basic"
            label="Contract Name"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="standard-multiline-static"
            label="Description"
            multiline
            rows={2}
            variant="standard"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>
      </>
    );
  };

  const MintStep = () => {
    handleMint(wallet, name, description, file);

    return (
      <>
        <Typography variant="h4" component="h4">
          Mint your contract on NEAR
        </Typography>
        <Typography variant="subtitle1" component="p" sx={{ margin: "30px 0" }}>
          Something about why this step is necessary etc. Include transaction
          cost and button to submit, i.e. go to NEAR to approve transaction.
        </Typography>
      </>
    );
  };

  const steps = ["upload", "detail", "mint"];
  const [activeStep, setActiveStep] = useState<string>(steps[0]);

  const onNextStep = (nextStep: number) => {
    setActiveStep(steps[nextStep]);
  };

  if (!currentUser)
    return (
      <div className="page-container">
        <Typography variant="subtitle2" component="p">
          Log in to mint a contract.
        </Typography>
      </div>
    );

  return (
    <div className="page-container">
      <HorizontalStepper onNextStep={onNextStep} isInputValid={isInputValid}>
        {activeStep === "upload" && UploadStep(file)}
        {activeStep === "detail" && DetailStep(name, description)}
        {activeStep === "mint" && MintStep()}
        {error && (
          <Typography variant="subtitle2" component="p" color="red">
            {error}
          </Typography>
        )}
      </HorizontalStepper>
    </div>
  );
};

export default CreatePage;
