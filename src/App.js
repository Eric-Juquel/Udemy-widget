import React, { useState, Fragment } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is React ?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React ?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React ?",
    content: "You use React by creating components",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Grenn",
    value: "green",
  },
  {
    label: "A Shade of Blue",
    value: "blue",
  },
];

const App = () => {
  

  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <Translate />
    </div>
  );
};

export default App;
