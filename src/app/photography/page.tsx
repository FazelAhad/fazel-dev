"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Placeholder images for the photography gallery
const photos = [
  "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800",
  "https://images.unsplash.com/photo-1511497584788-876760111969?w=800",
  "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
];

export default function Photography() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
          My Photography Journey
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          Exploring the world through my lens, one frame at a time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
            >
              <Image
                src={photo}
                alt={`Photography ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

