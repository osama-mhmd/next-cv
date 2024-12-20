"use client";

import { Icon } from "@iconify/react";
// import { motion } from "motion/react";
import MotionIcon from "@/components/ui/motion-icon";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

// const MotionIcon = motion(Icon);

export default function Projects() {
  const [] = useState();

  useEffect(() => {}, []);

  return (
    <section className="h-screen">
      <div className="h-full pt-48 container flex flex-col justify-between items-center">
        <h1 className="flex items-center gap-4">
          Projects{" "}
          <motion.span
            initial={{
              y: 200,
              x: -200,
              opacity: 0,
            }}
            animate={{
              y: 0,
              x: 0,
              opacity: 1,
            }}
          >
            <Icon icon="ic:round-rocket-launch" width={50} />
          </motion.span>
        </h1>
      </div>
    </section>
  );
}
