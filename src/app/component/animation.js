"use client";

import { motion } from "framer-motion";

export default function AnimateIn({ children }) {
  return (
    <motion.div
      animate={{
        x: [0, 130, 260, 390, 420, 550, 680, 810, 940, 1150],
        rotateY: [0, 0, 0, 0, 360, 360, 360, 360, 360, 360],
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
    >
      {children}
    </motion.div>
  );
}
