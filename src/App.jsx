import { useState } from "react";
import "./App.css";
import Header from "./layout/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import NewBlogPage from "./pages/new-blog";
import DetailsPage from "./pages/details";
import NotFound from "./pages/not-found";
function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:id" element={<DetailsPage />} />
          <Route path="/new-blog" element={<NewBlogPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
