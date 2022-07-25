import { useState } from "react";
import "./Share.scss";
export const Share = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };
  const handleDesc = (e: any) => {
    setDesc(e.target.value);
  };
  const handleSubmit = () => {
    if (title.length === 0 || desc.length === 0) {
      return;
    }
  };
  return (
    <div className="Share y">
      <svg
        className="Wave"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#202020"
          fill-opacity="1"
          d="M0,64L48,74.7C96,85,192,107,288,138.7C384,171,480,213,576,208C672,203,768,149,864,117.3C960,85,1056,75,1152,96C1248,117,1344,171,1392,197.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      <div className="Share__form">
        <div className="y">
          <label htmlFor="">Title</label>
          <input type="text" onChange={handleTitle} value={title} />
        </div>
        <div className="y">
          <label htmlFor="">Description</label>
          <input className="Form__desc" type="text" onChange={handleDesc} value={desc} />
        </div>
        <button onClick={handleSubmit} className="Share__btn">Submit</button>
        
      </div>
      
    </div>
  );
};
