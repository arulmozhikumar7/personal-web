import React from "react";

const Social = () => {
  const socialLinks = [
    {
      imageUrl: "./github-mark.png",
      url: "https://github.com/arulmozhikumar7",
    },
    {
      imageUrl: "./linkedin.png",
      url: "https://www.linkedin.com/in/arulmozhikumar/",
    },
    {
      imageUrl: "./insta.png",
      url: "https://instagram.com/arularul_7",
    },
    {
      imageUrl: "./mail.png",
      url: "mailto:arulmozhikumar7@gmail.com",
    },
  ];
  return (
    <div className="flex justify-center py-10 mt-6 space-x-4">
      {socialLinks.map((socialLink) => (
        <div
          key={socialLink.url}
          className=" shadow-lg border border-black bg-slate-200 h-11 w-12 flex items-center justify-center hover:shadow-[0px_0px_50px_0px_#01FC536F] transition duration-300 ease-in-out transform rounded-md hover:scale-105 hover:-translate-y-1"
        >
          <a href={socialLink.url} target="_blank" rel="noopener noreferrer">
            <img src={socialLink.imageUrl} className="w-8 h-8" alt="" />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Social;
