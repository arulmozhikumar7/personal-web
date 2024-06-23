import React from "react";

const Tooltip = ({ content, children }) => {
  return (
    <div className="relative inline-block">
      <div className="group">
        {children}
        <div className="absolute z-50 hidden px-3 py-1 text-sm text-white transform -translate-x-1/2 bg-gray-800 rounded-md shadow-lg group-hover:block bottom-full left-1/2">
          {content}
          <svg
            className="absolute left-0 w-full h-2 text-gray-800 top-full"
            x="0px"
            y="0px"
            viewBox="0 0 255 255"
            xmlSpace="preserve"
          >
            <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const ToolIcon = ({ imageUrl, name, url }) => {
  return (
    <Tooltip content={name}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img
          src={imageUrl}
          className="w-8 h-8 transition duration-300 ease-in-out transform rounded-md hover:scale-105 hover:-translate-y-1"
          alt={name}
        />
      </a>
    </Tooltip>
  );
};

export default ToolIcon;
