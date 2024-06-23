import React from "react";
import ToolIcon from "./ToolIcon";
const Tools = () => {
  const tools = [
    {
      imageUrl: "./vscode.png",
      name: "VS Code",
      url: "#",
    },
    {
      imageUrl: "./chatgpt.png",
      name: "ChatGPT",
      url: "#",
    },
    {
      imageUrl: "./git.png",
      name: "Git",
      url: "#",
    },
    {
      imageUrl: "./brave.png",
      name: "Brave Browser",
      url: "#",
    },
    {
      imageUrl: "./github-mark.png",
      name: "Github",
      url: "#",
    },
  ];

  const frontend = [
    {
      imageUrl: "./react.png",
      name: "React",
      url: "#",
    },
    {
      imageUrl: "./html.png",
      name: "HTML",
      url: "#",
    },
    {
      imageUrl: "./css.png",
      name: "CSS",
      url: "#",
    },
    {
      imageUrl: "./tailwindcss.png",
      name: "Tailwind",
      url: "#",
    },
    {
      imageUrl: "./javascript.png",
      name: "Javascript",
      url: "#",
    },
    {
      imageUrl: "./framermotion.png",
      name: "Framer Motion",
      url: "#",
    },
    {
      imageUrl: "./reactquery.png",
      name: "React Query",
      url: "#",
    },
  ];

  const backend = [
    {
      imageUrl: "./nodejs.png",
      name: "Node",
      url: "#",
    },
    {
      imageUrl: "./expressjs.png",
      name: "Express",
      url: "#",
    },
    {
      imageUrl: "./django.png",
      name: "Django",
      url: "#",
    },
    {
      imageUrl: "./c-sharp.png",
      name: "C#",
      url: "#",
    },
  ];

  const database = [
    {
      imageUrl: "./mongodb.png",
      name: "MongoDB",
      url: "#",
    },
    {
      imageUrl: "./postgresql.png",
      name: "PostgreSQL",
      url: "#",
    },
    {
      imageUrl: "./mysql.png",
      name: "MySQL",
      url: "#",
    },
  ];

  const BaaS = [
    {
      imageUrl: "./firebase.png",
      name: "Firebase",
      url: "#",
    },
    {
      imageUrl: "./supabase.png",
      name: "Supabase",
      url: "#",
    },
  ];

  return (
    <div className="max-w-5xl px-4 mx-auto mb-20">
      <div className="flex justify-center text-2xl font-bold tracking-tight">
        <p className="font-mukta md:text-2xl md:mt-16">
          Tools and Technologies I use
        </p>
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        <ToolIcon imageUrl={"./windows.png"} name={"Windows"} url={"#"} />
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        {renderToolCategory(BaaS)}
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        {renderToolCategory(database)}
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        {renderToolCategory(backend)}
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        {renderToolCategory(tools)}
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        {renderToolCategory(frontend)}
      </div>
    </div>
  );
};

const renderToolCategory = (tools) => {
  return tools.map((tool) => (
    <ToolIcon key={tool.name} imageUrl={tool.imageUrl} name={tool.name} />
  ));
};

export default Tools;
