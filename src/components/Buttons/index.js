import React from 'react';

const Buttons = (props) => {
 return (
    
    <button className="btn btn-secondary btn-lg" onClick={props.onClick}> {props.buttonText}  </button>
    
    
)}
export default Buttons;