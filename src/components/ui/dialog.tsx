"use client";

import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Icon } from "@iconify/react";

interface Context {
  visible?: boolean;
  setVisiblility?: (arg0: boolean) => void;
}
interface HaveChild {
  children: React.ReactNode;
}

const Context = createContext<Context>({});

export function DialogTrigger({ children }: HaveChild) {
  const { setVisiblility } = useVisiblility();

  return <div onClick={() => setVisiblility(true)}>{children}</div>;
}

export function DialogContent({ children }: HaveChild) {
  const { visible, setVisiblility } = useVisiblility();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="overlay"
          onClick={() => setVisiblility(false)}
        >
          <motion.div
            initial={{
              opacity: 0,
              translateY: -250,
            }}
            animate={{
              opacity: 1,
              translateY: -100,
            }}
            exit={{
              opacity: 0,
              translateY: -80,
            }}
            onClick={(e) => e.stopPropagation()}
            className="w-full min-w-96 max-w-lg bg-gray-800 p-4 rounded-md"
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export function DialogClose({ children }: HaveChild) {
  const { setVisiblility } = useVisiblility();

  return <div onClick={() => setVisiblility(false)}>{children}</div>;
}

export function DialogHeader({ children }: HaveChild) {
  const { setVisiblility } = useVisiblility();

  return (
    <div className="flex items-center justify-between mb-3">
      <h4>{children}</h4>
      <Icon
        icon="line-md:close"
        className="cursor-pointer p-2 rounded-full bg-gray-900"
        onClick={() => setVisiblility(false)}
        width={30}
      />
    </div>
  );
}

export function Dialog({ children }: HaveChild) {
  const [visible, setVisiblility] = useState(false);

  return (
    <Context.Provider value={{ visible, setVisiblility }}>
      {children}
    </Context.Provider>
  );
}

const useVisiblility = () => {
  const { visible, setVisiblility } = useContext(Context);

  return { visible: visible!, setVisiblility: setVisiblility! };
};
