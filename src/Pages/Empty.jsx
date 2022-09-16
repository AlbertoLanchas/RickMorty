import React from "react";
import "../styles/Empty.css";
import { useNavigate } from "react-router-dom";

const Empty = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="empty-screen">
        <p>404 Error!</p>
        <br />
        <p>Find a way to go back!</p>
        <div className="portal" onClick={() => navigate(-1)}></div>
      </div>
    </>
  );
};

export default Empty;
