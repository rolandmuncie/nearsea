import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "../index.css";

export default function MediaCard({ id, title, text }: any) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 300, boxShadow: "0.5rem 0.5rem rgb(3, 12, 28), -0.5rem -0.5rem #ccc", margin: "0 10px" }}>
      <CardActionArea onClick={() => navigate(`/${id}`)}>
        <div className={`${id}-svg`}></div>
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
