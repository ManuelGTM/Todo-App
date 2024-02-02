import {
  AppBar,
  Button,
  Box,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
// import { MyButton } from "./MyButton";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <Box>
      <AppBar
        sx={{ position: "static", color: "transparent", background: "#9d7cd8" }}
      >
        <Container>
          <Toolbar>
            <Typography sx={{ flexGrow: 1 }}>
              <Link to="/">Pern Stack</Link>
            </Typography>
            <Button
              variant="contained"
              sx={{
                background: "#fab387",
                color: "#1e1e2e",
                "&:hover": { background: "#a5e3a1" },
              }}
              onClick={() => navigate("task/new")}
            >
              New TASK
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
