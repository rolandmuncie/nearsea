import ContractsTable from "../components/ContractsTable";
import Typography from "@mui/material/Typography";
import "../index.css";
import { retrieveOwnedItems } from "../near/index";
import React, { useEffect, useState } from "react";

const ViewPage = ({ currentUser, wallet }: any) => {
  const [result, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async (wallet: any) => {
      const results = await retrieveOwnedItems(wallet);
      setResults(results);
    };

    fetchData(wallet);
  }, [wallet]);

  if (!currentUser)
    return (
      <div className="page-container">
        <Typography variant="subtitle2" component="p">
          Log in to see your contracts.
        </Typography>
      </div>
    );

  if (!result || JSON.stringify(result).length <= 2) {
    // Return something until the data is loaded (usually a loader)
    return (
      <div className="page-container">
        <Typography variant="subtitle2" component="p">
          Loading Contracts
        </Typography>
      </div>
    );
  } else {
    // Return whatever you would like to return after response succeeded
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
        <ContractsTable items={result} />
      </div>
    );
  }
};

export default ViewPage;
