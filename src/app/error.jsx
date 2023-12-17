"use client";
import React, { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold to-red-500">
        {error.message || "Something Went Wrong"}
      </h1>
      <button className="btn btn-primary bg-blue-500" onClick={() => reset()}>
        Reset
      </button>
    </div>
  );
};

export default Error;
