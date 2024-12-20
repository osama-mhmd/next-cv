export default function Home() {
  return (
    <section className="h-screen">
      <div className="h-full container flex flex-col justify-between items-center">
        <div></div>
        <h1 className="w-fit relative info-card curve-underline text-white">
          Osama Mohammed
        </h1>
        <div>
          <ul className="list-none flex gap-2 p-4">
            <li>
              <a href="https://github.com/osama-mhmd">
                {/* <Icon name="github" size={30} /> */}
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/os-mhmd">
                {/* <Icon name="linkedin" size={30} /> */}
              </a>
            </li>
            <li>{/* <SendMail client:load /> */}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
