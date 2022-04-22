import React from "react";
import Input from "./components/postMethod/form";
import Contact from "./components/postMethod/contact";
import Header from "./components/header/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Contact />} />
        <Route path="/add" element={<Input />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
