import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import circle from "../circle.svg";
import triangle from "../triangle.svg";
import hexagon from "../hexagon.svg";
import "../index.css";

const icons: any = {
  "create": circle,
  "view": triangle,
  "discover": hexagon,
}

export default function MediaCard({ id, title, text }: any) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 300, boxShadow: "none", backgroundColor: "transparent", margin: "0 10px" }}>
      <CardActionArea onClick={() => navigate(`/${id}`)}>
      <img
          src={icons[id]}
          alt={`${id} icon`}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h3">
            {title}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
