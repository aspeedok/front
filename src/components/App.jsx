import { Routes, Route } from "react-router-dom";
import PostTitle from "./PostTitle";
import Post from "./Post";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostTitle />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
