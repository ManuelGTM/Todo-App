import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MyButton = ({ name }) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      sx={{
        background: "#fab387",
        color: "#1e1e2e",
        "&:hover": { background: "#f5c2e7" },
      }}
      onClick={() => navigate("task/new")}
    >
      {name}
    </Button>
  );
};

export default MyButton;
