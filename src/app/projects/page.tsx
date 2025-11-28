"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects, Project } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          A collection of projects I've worked on, from academic assignments to
          real-world applications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpenModal={setSelectedProject}
            />
          ))}
        </div>
      </motion.div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

