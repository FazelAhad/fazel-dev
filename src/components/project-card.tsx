"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";
import Image from "next/image";
import { useState } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenModal: (project: Project) => void;
}

export function ProjectCard({ project, index, onOpenModal }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow cursor-pointer group">
        {project.image && (
          <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs rounded bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Button
            variant="default"
            size="sm"
            onClick={() => onOpenModal(project)}
            className="flex-1"
          >
            View Details
          </Button>
          {project.githubUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.liveUrl && (
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

