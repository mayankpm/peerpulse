import React from "react";
import {useNavigate} from "react-router-dom"

export default function Choose(){

  const navigate = useNavigate();
  const navigateToFLdata = () => {
    navigate('/FLdata');
  };
  const nav = useNavigate();
  const navigateToED = () => {
    navigate('/ED');
  };
    return(
        <>
<div className="flex justify-center items-center h-screen">
  <div className="w-1/4 h-84 glass mx-36 mt-52">
    <figure><img className="h-120 max-h-100" src="src\assets\olli-potapenko2.jpg" alt="" /></figure>
    <div className="card-body flex flex-col justify-center items-center">
      <h2 className="card-title flex justify-center items-center">Become a Freelancer</h2>
      <div className="card-actions justify-end">
        <button className="btn btn-primary mt-auto" onClick={navigateToFLdata}>Join now!</button>
      </div>
    </div>
  </div>
  
  <div className="w-1/4 h-84 glass mx-36 mt-52">
    <figure><img className="h-170" src="src\assets\andrew-neel2.jpg" alt=""  /></figure>
    <div className="card-body flex justify-center items-center">
      <h2 className="card-title">Hire a Freelancer</h2>
      <div className="card-actions justify-end">
        <button className="btn btn-primary" onClick={navigateToED}>Try now!</button>
      </div>
    </div>
  </div>
</div>

        </>
    )   
}