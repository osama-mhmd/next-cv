"use client";

import { Icon } from "@iconify/react";
import MotionIcon from "./ui/motion-icon";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [clicked, setClicked] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="w-fit left-1/2 -translate-x-1/2 fixed top-4">
      <ul className="list-none flex gap-1 rounded-[2rem] p-2 bg-gray-900 *:transition *:p-2 *:rounded-full *:bg-gray-800">
        <li>
          <NavLink href="/">
            <Icon icon="typcn:home" width={26} />
          </NavLink>
        </li>
        <li>
          <NavLink href="/about">
            <Icon width={26} icon="jam:info-f" />
          </NavLink>
        </li>
        <li>
          <NavLink href="/blogs" include={true}>
            <Icon icon="mingcute:book-5-fill" width={26} />
          </NavLink>
        </li>
        <li>
          <NavLink href="/projects">
            <MotionIcon
              style={{
                originX: -0.5,
                originY: -0.5,
              }}
              animate={
                clicked
                  ? {
                      rotate: [0, -360],
                      transition: { duration: 0.6, ease: "easeInOut" },
                    }
                  : {}
              }
              onClick={() => {
                if (pathname !== "/projects") setClicked(true);
              }}
              onAnimationComplete={() => setClicked(false)}
              width={26}
              icon="ic:round-rocket-launch"
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  include?: boolean;
}

function NavLink({ href, children, include = false }: NavLinkProps) {
  const pathname = usePathname();

  const isActive = include ? pathname.includes(href) : pathname === href;

  return (
    <Link href={href} className={isActive ? "active" : ""}>
      {children}
    </Link>
  );
}
