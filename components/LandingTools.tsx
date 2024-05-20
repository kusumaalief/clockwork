"use client";

import * as LucideReactIcon from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import ProjectImage from "./../public/assets/projects.png";
import DashboardImage from "./../public/assets/dashboards.png";
import AiImage from "./../public/assets/ai.png";
import FormImage from "./../public/assets/forms.png";
import SprintImage from "./../public/assets/sprints.png";
import DocsImage from "./../public/assets/docs.png";
import TimeTrackingImage from "./../public/assets/timetracking.png";
import ChatImage from "./../public/assets/chat.png";
import WhiteboardImage from "./../public/assets/whiteboard.png";

import BlobBG from "./BlobBg";

const ToolsList = [
  {
    icon: LucideReactIcon.FileCheck2,
    title: "Projects",
    image: ProjectImage,
  },
  {
    icon: LucideReactIcon.LayoutDashboard,
    title: "Dashboard",
    image: DashboardImage,
  },
  {
    icon: LucideReactIcon.WandSparkles,
    title: "AI",
    image: AiImage,
  },
  {
    icon: LucideReactIcon.ClipboardList,
    title: "Forms",
    image: FormImage,
  },
  {
    icon: LucideReactIcon.GanttChart,
    title: "Sprints",
    image: SprintImage,
  },
  {
    icon: LucideReactIcon.Folders,
    title: "Docs",
    image: DocsImage,
  },
  {
    icon: LucideReactIcon.FileClock,
    title: "Time Tracking",
    image: TimeTrackingImage,
  },
  {
    icon: LucideReactIcon.MessageSquareQuote,
    title: "Chats",
    image: ChatImage,
  },
  {
    icon: LucideReactIcon.Presentation,
    title: "Whiteboards",
    image: WhiteboardImage,
  },
];

const toolsIcon = (isActive: boolean, icon: any) => {
  React.createElement;
  return (
    <span
      className={`${
        isActive ? "bg-gradient-primary text-white" : "text-zinc-400"
      } p-4 rounded-2xl flex items-center justify-center h-20 w-20`}
    >
      {React.createElement(icon, { style: { width: "4rem", height: "4rem" } })}
    </span>
  );
};

function LandingTools() {
  const [activeTool, setActiveTool] = useState("Projects");
  return (
    <div className="items-center flex flex-col">
      <div className="flex space-x-6 ">
        {ToolsList.map((tool) => (
          <div
            onClick={() => setActiveTool(tool.title)}
            className="flex hover:-translate-y-1 duration-100 ease-in-out cursor-pointer flex-col items-center space-y-2"
          >
            {toolsIcon(tool.title === activeTool, tool.icon)}
            <span className="font-semibold">{tool.title}</span>
          </div>
        ))}
      </div>
      <div className="bg-transparent relative">
        <BlobBG />

        <div className="relative">
          <Image
            src={ToolsList.filter((tool) => tool.title === activeTool)[0].image}
            className="h-auto w-auto scale-90 drop-shadow-2xl"
            alt="project"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingTools;
