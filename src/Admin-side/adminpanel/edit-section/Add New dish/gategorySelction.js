import React from "react";

const GategorySelection = () => {
  return (
    <div className="GagtegorSel-cont">
      <p className="GategorySel-title">Item gategory</p>
      <select className="GategorySel-options">
        <option>Main course</option>
        <option>add more +</option>
      </select>
      <textarea className="GategorySel-textarea" />
    </div>
  );
};

export default GategorySelection;
