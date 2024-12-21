import { ReactNode } from "react";

export default function Example({ children }: { children?: ReactNode }) {
  return <div className="all-center example">{children}</div>;
}
