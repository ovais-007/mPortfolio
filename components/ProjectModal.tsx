"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import TripleDash from "./icons/triple-dash";

interface ReadmeData {
  title: string;
  content: string;
}

interface ProjectData {
  title: string;
  subtitle: string;
  no: string;
  liveLink: string | null;
  githubLink: string | null;
  hasReadme: boolean;
  readme?: ReadmeData;
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string;
  setShowAboutMe: (value: boolean) => void;
}

const projectData: Record<string, ProjectData> = {
  "project-01": {
    title: "Draw-App",
    subtitle: "Full-Stack Collaborative Drawing Platform",
    no: "project-01",
    liveLink: null,
    githubLink: "https://github.com/ovais-007/draw-app",
    hasReadme: true,
    readme: {
      title: "Draw-App - Collaborative Drawing Platform",
      content:
        "Built a real-time collaborative drawing app with live canvas sync via WebSockets for sub-second multi-user interaction. Designed a scalable microservices architecture with Next.js, TypeScript, Prisma, and TailwindCSS for cross-platform use. Tech Stack: Next.js, TypeScript, Node.js, Prisma, WebSocket, TailwindCSS, PostgreSQL.",
    },
  },
  "project-02": {
    title: "PDF-Genius",
    subtitle: "AI-Powered PDF Query Tool",
    no: "project-02",
    liveLink: null,
    githubLink: "https://github.com/ovais-007/pdf-genius",
    hasReadme: true,
    readme: {
      title: "PDF-Genius - AI Document Analysis",
      content:
        "Developed an AI-powered tool to query and extract insights from PDF documents using Google Gemini API. Integrated document parsing with pdf-parse and semantic search using Pinecone vector database for RAG. Tech Stack: Next.js, TypeScript, React, Google Gemini, Pinecone, NextAuth, Tailwind CSS.",
    },
  },
  "project-03": {
    title: "AI Pitch Deck Analyzer",
    subtitle: "PDF Analysis & Sentiment Engine",
    no: "project-03",
    liveLink: null,
    githubLink: "https://github.com/ovais-007/ai-pitch-deck-analyzer",
    hasReadme: true,
    readme: {
      title: "AI Pitch Deck Analyzer - Investment Insights",
      content:
        "Built PDF parsing pipeline with automated text extraction and sentiment analysis for investor-ready insights. Implemented React.js frontend with file upload, PDF parsing, and automated scoring algorithms. Tech Stack: Python, TensorFlow, React.js, scikit-learn.",
    },
  },
  "project-04": {
    title: "Custom Gmail MCP",
    subtitle: "Email Automation Tool",
    no: "project-04",
    liveLink: null,
    githubLink: "https://github.com/ovais-007/custom-gmail-mcp",
    hasReadme: true,
    readme: {
      title: "Custom Gmail MCP - Email Automation",
      content:
        "Developed Model Context Protocol server for Gmail automation using Google APIs and OAuth2 authentication. Built email processing pipeline with search, send, read, and attachment handling capabilities. Tech Stack: Node.js, Google Gmail API, OAuth2, TypeScript.",
    },
  },
};

const sidebarItems = [
  { section: "FAVORITES", items: ["Work", "About Me", "Resume"] },
  {
    section: "PROJECTS",
    items: ["Project 01", "Project 02", "Project 03", "Project 04"],
  },
  { section: "", items: ["Trash"] },
];

export default function ProjectModal({
  isOpen,
  onClose,
  projectId,
  setShowAboutMe,
}: ProjectModalProps) {
  const [position, setPosition] = useState({ x: 200, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState(projectId);
  const [readmeOpen, setReadmeOpen] = useState(false);
  const [readmePosition, setReadmePosition] = useState({ x: 300, y: 150 });
  const [isReadmeDragging, setIsReadmeDragging] = useState(false);
  const [readmeDragOffset, setReadmeDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    setSelectedProject(projectId);
  }, [projectId]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
    setIsDragging(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  const handleReadmeMouseDown = (e: React.MouseEvent) => {
    setReadmeDragOffset({
      x: e.clientX - readmePosition.x,
      y: e.clientY - readmePosition.y,
    });
    setIsReadmeDragging(true);
  };

  const handleReadmeMouseMove = (e: MouseEvent) => {
    if (isReadmeDragging) {
      setReadmePosition({
        x: e.clientX - readmeDragOffset.x,
        y: e.clientY - readmeDragOffset.y,
      });
    }
  };

  const handleReadmeMouseUp = () => {
    setIsReadmeDragging(false);
  };

  useEffect(() => {
    if (isReadmeDragging) {
      document.addEventListener("mousemove", handleReadmeMouseMove);
      document.addEventListener("mouseup", handleReadmeMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleReadmeMouseMove);
        document.removeEventListener("mouseup", handleReadmeMouseUp);
      };
    }
  }, [isReadmeDragging, readmeDragOffset]);

  if (!isOpen || !projectData[projectId as keyof typeof projectData])
    return null;

  const project =
    projectData[selectedProject as keyof typeof projectData] ||
    projectData[projectId as keyof typeof projectData];

  return (
    <>
      <div
        className="fixed rounded-xl overflow-hidden animate-modal-open z-50"
        style={{
          left: position.x,
          top: position.y,
          width: "700px",
          height: "450px",
          boxShadow: "0 12px 36px rgba(0,0,0,0.15)",
          transform: isDragging ? "scale(1.02)" : "scale(1)",
          transition: isDragging ? "none" : "transform 0.2s ease",
        }}
      >
        <div className="flex h-full">
          {/* Left Sidebar */}
          <div className="w-41 bg-[#F7F7F9]/98 p-5">
            {/* Traffic lights */}
            <div className="flex items-center gap-2 mb-6">
              <button
                onClick={onClose}
                className="w-3 h-3 rounded-full bg-[#FF5F57] hover:opacity-80 transition-opacity cursor-pointer"
              />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
            </div>

            {/* Sidebar Items */}
            {sidebarItems.map((section, index) => (
              <div key={index} className="mb-6">
                {section.section && (
                  <h3 className="text-[#8B8B8B] text-xs font-medium uppercase tracking-wide mb-2">
                    {section.section}
                  </h3>
                )}
                <div className="space-y-1">
                  {section.items.map((item, itemIndex) => {
                    const isProjectItem = item.startsWith("Project");
                    const projectNumber = isProjectItem
                      ? item.split(" ")[1]
                      : null;
                    const projectKey = projectNumber
                      ? `project-${projectNumber.padStart(2, "0")}`
                      : null;
                    const isActive = projectKey === selectedProject;

                    const handleItemClick = () => {
                      if (item === "Resume") {
                        // Open resume link
                        window.open(
                          "https://drive.google.com/file/d/1MW3-6aZrFarw-A4xhR-OepXMP0flgWaE/view?usp=drive_link",
                          "_blank",
                        );
                        return;
                      }
                      if (item === "About Me") {
                        onClose();
                        setShowAboutMe(true);
                      }

                      if (
                        projectKey &&
                        projectData[projectKey as keyof typeof projectData]
                      ) {
                        setSelectedProject(projectKey);
                      }
                    };

                    return (
                      <div
                        key={itemIndex}
                        className={`px-3 py-1.5 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                          isActive
                            ? "bg-[#007AFF] text-white"
                            : "text-[#1D1D1F] hover:bg-[#E6E7EB]"
                        }`}
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={handleItemClick}
                      >
                        <div className="flex items-center gap-2">
                          <TripleDash />
                          <span>{item}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Content Area */}
          <div className="flex-1 bg-white">
            {/* Title Section - Draggable Area */}
            <div className="p-4 pb-2 cursor-move" onMouseDown={handleMouseDown}>
              <h2 className="text-gray-700 font-medium text-sm leading-tight">
                {project.title} {`(${project.no})`}
              </h2>
              <p className="text-[#6B7280] text-xs">{project.subtitle}</p>
            </div>

            {/* Content Area */}
            <div className="px-4 pb-4" onMouseDown={(e) => e.stopPropagation()}>
              {/* Horizontal Line */}
              <div className="w-full h-px bg-[#E6E7EB] mb-8"></div>

              {/* Dynamic Icons Layout */}
              <div className="relative h-full">
                {/* GitHub Folder Icon - Always show if githubLink exists */}
                {project.githubLink && (
                  <div className="absolute top-4 left-8">
                    <div
                      className="flex flex-col items-center cursor-pointer hover:bg-[#F5F5F7] rounded-lg p-3 transition-colors"
                      onClick={() =>
                        project.githubLink &&
                        window.open(project.githubLink, "_blank")
                      }
                    >
                      <div className="w-16 h-16 mb-2">
                        <Image
                          src="/images/folderIcon.png"
                          alt="GitHub Repository"
                          width={64}
                          height={64}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-xs text-center text-[#1D1D1F] font-medium">
                        GitHub Repository
                      </span>
                    </div>
                  </div>
                )}

                {/* Safari Icon - Only show if liveLink exists */}
                {project.liveLink && (
                  <div className="absolute top-16 right-12">
                    <div
                      className="flex flex-col items-center cursor-pointer hover:bg-[#F5F5F7] rounded-lg p-3 transition-colors"
                      onClick={() =>
                        project.liveLink &&
                        window.open(project.liveLink, "_blank")
                      }
                    >
                      <div className="w-16 h-16 mb-2">
                        <Image
                          src="/images/safariApp.png"
                          alt="Live Website"
                          width={64}
                          height={64}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-xs text-center text-[#1D1D1F] font-medium">
                        {project.title.toLowerCase()}.com
                      </span>
                    </div>
                  </div>
                )}

                {/* README File Icon - Only show if hasReadme is true */}
                {project.hasReadme && project.readme && (
                  <div className="absolute top-24 left-48">
                    <div
                      className="flex flex-col items-center cursor-pointer hover:bg-[#F5F5F7] rounded-lg p-3 transition-colors"
                      onClick={() => setReadmeOpen(true)}
                    >
                      <div className="w-16 h-16 mb-2">
                        <Image
                          src="/images/fileIcon.png"
                          alt="README File"
                          width={64}
                          height={64}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-xs text-center text-[#1D1D1F] font-medium">
                        README.md
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* README Popup Window - Rendered outside project modal container */}
      {readmeOpen && project.hasReadme && project.readme && (
        <div
          className="fixed bg-white rounded-xl shadow-2xl z-[60] overflow-hidden"
          style={{
            left: readmePosition.x,
            top: readmePosition.y,
            width: "400px",
            height: "300px",
            transform: isReadmeDragging ? "scale(1.02)" : "scale(1)",
            transition: isReadmeDragging ? "none" : "transform 0.2s ease",
          }}
        >
          {/* README Title Bar */}
          <div
            className="bg-[#F7F7F9] h-10 flex items-center justify-between px-4 cursor-move border-b border-[#E6E7EB]"
            onMouseDown={handleReadmeMouseDown}
          >
            <div className="flex items-center gap-2">
              <button
                onClick={() => setReadmeOpen(false)}
                className="w-3 h-3 rounded-full bg-[#FF5F57] hover:opacity-80 transition-opacity"
                onMouseDown={(e) => e.stopPropagation()}
              />
              <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
            </div>
            <div className="text-xs font-medium text-[#6B7280]">
              {project.readme.title}
            </div>
            <div className="w-[54px]"></div>
          </div>

          {/* README Content */}
          <div className="p-6 h-[calc(100%-2.5rem)] overflow-y-auto">
            <div className="prose prose-sm max-w-none">
              <p className="text-sm text-[#374151] leading-relaxed">
                {project.readme.content}
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes modal-open {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-modal-open {
          animation: modal-open 200ms ease-out forwards;
        }
      `}</style>
    </>
  );
}
