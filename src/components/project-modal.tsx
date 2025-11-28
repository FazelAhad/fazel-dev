"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/projects";
import Image from "next/image";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-card border rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        >
          {project.image && (
            <div className="relative w-full h-64">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
          )}
          <div className="p-6">
            <div className="flex items-start justify-between mb-4">
              <h2 className="text-3xl font-bold">{project.title}</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <p className="text-muted-foreground mb-6">{project.longDescription}</p>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Technologies:</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              {project.githubUrl && (
                <Button asChild variant="default">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button asChild variant="outline">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

