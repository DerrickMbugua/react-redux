import PostsList from "./features/posts/PostsList";
import Counter from "./features/counter/Counter";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <div className="App">
      <AddPostForm />
      <PostsList />
    </div>
  );
}

export default App;
