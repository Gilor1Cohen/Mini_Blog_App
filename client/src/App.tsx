import PostCreate from "./components/Pages/PostCreate/PostCreate";
import PostList from "./components/Pages/PostList/PostList";
import "./App.css";

function App() {
  return (
    <section id="appSection">
      <PostCreate />
      <PostList />
    </section>
  );
}

export default App;
