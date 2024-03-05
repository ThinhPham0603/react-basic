import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Context8 from "./example/Context8";
import TodoList1 from "./example/TodoList1";
import TodoList from "./example/TodoList";
//import Content from "./hook/useEffect/Content3";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Context8</Link></li>
          <li><Link to="/TodoList">TodoList</Link></li>
          <li><Link to="/TodoList1">TodoList1</Link></li>
        </ul>
        <Routes>
          <Route path="/" element={<Context8 />} />
          <Route path="/TodoList1" element={<TodoList1 />} />
          /<Route path="/TodoList" element={<TodoList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
