import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskList from "./Components/TaskList.js";
import TaskForm from "./Components/TaskForm.js";
import Menu from "./Components/NavBar.js";
import { Container, Toolbar } from "@mui/material";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Toolbar>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/task/new" element={<TaskForm />} />
            {/* Edit Rout */}
          </Routes>
        </Toolbar>
      </Container>
    </BrowserRouter>
  );
}
