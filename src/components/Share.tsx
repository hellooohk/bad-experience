import { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./Share.scss";
export const Share = () => {
const [title,setTitle] = useState("");
const [desc,setDesc] = useState("");
const handleTitle = (e:any) => {
    setTitle(e.target.value)
}
const handleDesc = (e:any) => {
    setDesc(e.target.value);
}
const handleSubmit = () => {
    if(title.length === 0 || desc.length === 0){
        return;
    }
}
  return (
    <div className="Share y">
      <TextField
        className="Share__input"
        id="standard-basic"
        label="Title"
        variant="standard"
        value={title}
        onChange={handleTitle}
      />
      <TextField
        className="Share__input"
        id="standard-multiline-static"
        label="Description"
        multiline
        rows={4}
        variant="standard"
        value={desc}
        onChange={handleDesc}
      />
      <Button onClick={handleSubmit} className="Share__button" variant="contained">Submit</Button>
    
  
  
     
    </div>
  );
};
