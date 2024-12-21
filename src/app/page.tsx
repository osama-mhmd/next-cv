import SendMail from "@/components/send-mail";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <section className="h-screen">
      <div className="h-full container all-center flex-col text-center">
        <h1>Osama Mohammed</h1>
        <p className="text-muted-foreground max-w-prose">
          Junior Front-end Developer. I{"'"}m not a {'"'}super front-end
          developer with passion for creating cool animations, and small details
          {'"'}.{" "}
          <span className="text-orange-500">
            I{"'"}m just curious, the desire to know more is the thing that
            makes me better and better.
          </span>
        </p>
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2">
          <ul className="list-none flex gap-2 p-4">
            <li>
              <a href="https://github.com/osama-mhmd">
                <Icon icon="bi:github" width={30} />
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/os-mhmd">
                <Icon icon="fa:linkedin-square" width={30} />
              </a>
            </li>
            <li>
              <SendMail />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
