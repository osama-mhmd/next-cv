"use client";

import { useState } from "react";
import Example from "../example";
import { motion, AnimatePresence } from "motion/react";

export default function Ball() {
  const [visible, setVisible] = useState(true);

  return (
    <Example>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            style={{
              fontSize: "2rem",
            }}
          >
            ⚾
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "Hide" : "Show"}
      </button>
    </Example>
  );
}
