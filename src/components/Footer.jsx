import React from "react";

const Footer = () => {
  return (
    <div className="text-center">
      <p className="text-sm font-mukta">
        <a
          href="https://www.arulmozhikumar.online"
          target="_blank"
          rel="noopener noreferrer"
        >
          Arulmozhikumar
        </a>{" "}
        © {new Date().getFullYear()}{" "}
      </p>
    </div>
  );
};

export default Footer;
