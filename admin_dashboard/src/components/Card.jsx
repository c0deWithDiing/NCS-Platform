// Card.jsx - simple presentational wrapper
import React from "react";

const Card = ({ title, children, className = "" }) => {
  return (
    <div className={'card bg-gray-800 border border-gray-700 rounded-lg p-4 ${className}'}>
      {title && <div className="card-title font-semibold mb-2">{title}</div>}
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;