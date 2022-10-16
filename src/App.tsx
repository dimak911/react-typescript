import { Routes, Route } from "react-router-dom";
import { UsersPage } from "./pages/UsersPage";
import { TodosPage } from "./pages/TodosPage";
import { LayoutPage } from "./pages/LayoutPage";
import { HomePage } from "./pages/HomePage";
import { UserItemPage } from "./pages/UserItemPage";
import { TodoItemPage } from "./pages/TodoItemPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutPage />}>
        <Route index element={<HomePage />}></Route>
        <Route path="/users" element={<UsersPage />}></Route>
        <Route path="/users/:id" element={<UserItemPage />}></Route>
        <Route path="/todos" element={<TodosPage />}></Route>
        <Route path="/todos/:id" element={<TodoItemPage />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
