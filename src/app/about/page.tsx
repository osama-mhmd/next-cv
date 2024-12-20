import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me | Osama Mohammed",
};

export default function About() {
  return (
    <section className="h-screen">
      <div className="h-full container flex flex-col justify-between items-center">
        <h1>ABout</h1>
      </div>
    </section>
  );
}
