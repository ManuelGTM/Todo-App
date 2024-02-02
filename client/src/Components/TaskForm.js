import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TaskForm() {
  //
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/tasks", {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    navigate("/");
  };

  const handleChange = (e) =>
    setTask({ ...task, [e.target.name]: e.target.value });

  const style = {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#cba6f7",
      },
    },
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={3}>
        <Card
          sx={{ mt: 5 }}
          style={{
            backgroundColor: "#585b70",
            padding: "2rem",
            borderRadius: "10px",
          }}
        >
          <Typography variant="5" textAlign="center" color="#fff" fontSize={24}>
            Create Task
          </Typography>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <TextField
                name="title"
                onChange={handleChange}
                variant="filled"
                label="Title"
                sx={{ display: "block", margin: ".5rem 0", style }}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />
              <TextField
                name="description"
                onChange={handleChange}
                variant="filled"
                label="Write your description"
                sx={{
                  display: "block",
                  margin: ".5rem 0",
                  style: {
                    "& .MuiOutlinedInput-root": {
                      "&.Mui-focused fieldset": {
                        background: "#cba6f7",
                      },
                    },
                  },
                }}
                multiline
                rows={4}
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{ style: { color: "white" } }}
              />

              <Button
                variant="contained"
                type="submit"
                sx={{
                  background: "#fab387",
                  "&:hover": { background: "#89b4fa" },
                  color: "#1e1e2e",
                  marginX: 7.8,
                  mt: 2,
                  paddingX: 4,
                }}
              >
                Save
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
