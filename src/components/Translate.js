import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from './Convert'



const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "malgache",
    value: "mg",
  },
];

const Translate = () => {
  const [langage, setLangage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        options={options}
        selected={langage}
        onSelectedChange={setLangage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert langage={langage} text={text}/>
    </div>
  );
};

export default Translate;
