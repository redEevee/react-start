// src/Button.js
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"; 

useEffect(() => {
  console.log("Button component mounted");
}, []); 
useState(() => {
  console.log("Button component state initialized");
}, []); 

function Button({ text }) {
  return (
    <div>
      <button>{text}</button>
    </div>
  );
}
Button.propTypes = {
    text:PropTypes.string.isRequired
};

export default Button;
