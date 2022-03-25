import MediaCard from "../components/MediaCard";
import Typography from "@mui/material/Typography";
import "../index.css";
import wave from "../wave.svg";

const cards = {
  create: {
    id: "create",
    title: "Create a smart contract",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  view: {
    id: "view",
    title: "View your contracts",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  discover: {
    id: "discover",
    title: "Discover the marketplace",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
};

const HomePage = () => {
  return (
    <>
      <div className="page-container" style={{ position: "relative" }}>
        <Typography
          variant="h2"
          component="h2"
          sx={{ margin: "50px 100px 80px" }}
        >
          NEARsea is a smart contract exchange platform
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          sx={{ marginBottom: "130px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <img
          src={wave}
          alt="wave"
          height="50%"
          width="100%"
          style={{
            height: "auto",
            width: "100vw",
            position: "absolute",
            bottom: 50,
          }}
        />
      </div>
      <div
        className="page-container"
        style={{ backgroundImage: "linear-gradient(180deg, rgb(136, 230, 251, 0.1), white)" }}
      >
        <Typography variant="h2" component="h2" sx={{ margin: "40px 0" }}>
          Use NEARSea
        </Typography>
        <Typography variant="subtitle2" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
        <div className="mediacard-container">
          <MediaCard {...cards.create} />
          <MediaCard {...cards.view} />
          <MediaCard {...cards.discover} />
        </div>
      </div>
    </>
  );
};

export default HomePage;
