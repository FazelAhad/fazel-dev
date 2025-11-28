"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skills = [
  "React",
  "Next.js",
  "JavaScript ES6",
  "Python",
  "Odoo",
  "Firebase",
  "FastAPI",
  "Docker",
  "Git",
  "Linux",
];

export default function About() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          About Me
        </h1>

        {/* Biography Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Biography</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                I'm Fazel Ahad, a 21-year-old developer from Afghanistan
                passionate about building modern web applications and Odoo
                solutions. I specialize in frontend development with React and
                Next.js, and I'm also an Odoo developer working on enterprise
                solutions.
              </p>
              <p>
                Currently, I'm expanding my skills in photography and working
                on various projects including OCR applications, face detection
                systems, and automation tools. I'm particularly interested in
                building a formal letter automation web app to help Afghan
                citizens generate government-approved letters efficiently.
              </p>
              <p>
                I'm continuously learning and improving, especially in English
                and Turkish languages, and I dedicate specific hours daily to
                study and practice.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>My Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>My Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Language Learning
                </h3>
                <p>
                  I'm actively working on improving my English and Turkish
                  language skills. I maintain a structured study schedule with
                  dedicated hours each day to practice and learn.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Daily Study Routine
                </h3>
                <p>
                  I follow a disciplined approach to learning, setting aside
                  specific hours daily for focused study sessions. This helps me
                  stay consistent and make steady progress in both technical
                  skills and language proficiency.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-foreground">
                  Continuous Growth
                </h3>
                <p>
                  My journey is about continuous improvement - whether it's
                  mastering new technologies, building better applications, or
                  expanding my communication skills. Every day is an opportunity
                  to learn something new.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
}

