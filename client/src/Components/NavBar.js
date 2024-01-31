import { BrowserRouter, Route, Routes } from "react-router-dom";
import TaskList from "./TaskList.js";

export default function NavBar() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskList />} />
      </Routes>
    </BrowserRouter>
  );
}
