import React from "react";

export default function HireCard() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-96 h-auto mx-4 my-4">
        <figure>
          <img
            className="h-96 w-full object-cover"
            src="src\assets\olli-potapenko2.jpg"
            alt=""
          />
        </figure>
        <div className="card-body flex flex-col justify-center items-center">
          <h2 className="card-title flex justify-center items-center">
            Name
          </h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Hire</button>
          </div>
        </div>
      </div>
    </div>
  );
}
