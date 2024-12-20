"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import MotionIcon from "./ui/motion-icon";
import { useState } from "react";

export default function SendMail() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Dialog>
      <DialogTrigger>
        <MotionIcon
          style={{
            originX: -0.1,
            originY: -0.1,
          }}
          animate={
            isHovered
              ? {
                  rotate: [0, -360],
                  transition: { duration: 0.6, ease: "easeInOut" },
                }
              : {}
          }
          onMouseEnter={() => setIsHovered(true)}
          onAnimationComplete={() => setIsHovered(false)}
          className="cursor-pointer"
          width={30}
          icon="ph:telegram-logo-bold"
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>Send Mail</DialogHeader>
        <form className="flex flex-col gap-2">
          <input required type="text" placeholder="Enter your email" />
          <textarea required placeholder="Enter your message" />
          <button>Send</button>
          <a
            href="mailto:mail.osmhmd@gmail.com"
            className="btn secondary all-center gap-2 text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2em"
              viewBox="0 0 24 24"
            >
              <rect width="24" height="24" fill="none" />
              <g fill="#fff">
                <path d="M22 7.535V17a3 3 0 0 1-2.824 2.995L19 20H5a3 3 0 0 1-2.995-2.824L2 17V7.535l9.445 6.297l.116.066a1 1 0 0 0 .878 0l.116-.066z" />
                <path d="M19 4c1.08 0 2.027.57 2.555 1.427L12 11.797l-9.555-6.37a3 3 0 0 1 2.354-1.42L5 4z" />
              </g>
            </svg>{" "}
            Send via GMail
          </a>
        </form>
      </DialogContent>
    </Dialog>
  );
}
