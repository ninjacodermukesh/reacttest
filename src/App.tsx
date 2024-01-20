import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NewsListView, UserListView } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewsListView />} />
          <Route path="/users" element={<UserListView />} />
          <Route path="/news" element={<NewsListView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
