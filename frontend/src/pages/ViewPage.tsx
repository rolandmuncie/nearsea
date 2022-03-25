import ContractsTable from "../components/ContractsTable";
import Typography from "@mui/material/Typography";
import "../index.css";

const ViewPage = ({ currentUser }: any) => {
  if (!currentUser)
    return (
      <div className="page-container">
        <Typography variant="subtitle2" component="p">
          Log in to see your contracts.
        </Typography>
      </div>
    );
  return (
    <div className="page-container">
      <Typography variant="h2" component="h2" sx={{ margin: "40px 0" }}>
        Your smart contracts on NEARSea
      </Typography>
      <Typography
        variant="subtitle2"
        component="p"
        sx={{ marginBottom: "30px" }}
      >
        {`Welcome back, ${currentUser.accountId}.`}
      </Typography>
      <ContractsTable />
    </div>
  );
};

export default ViewPage;
