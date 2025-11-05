import "./App.css";
import Gallery from "./components/Gallery";
import TodoList from "./components/ToDoList";
import List from "./components/List";
import TeaSet from "./components/TeaSet";
import RootComponent from "./components/RootComponent";
import { rootGreet } from "./modules/RootModule";

export default function App() {
  rootGreet();
  return (
    <>
      <TodoList />
      <Gallery />
      <List />
      <TeaSet />
      <RootComponent />
    </>
  );
}
