import {
  Button,
  Card,
  DarkThemeToggle,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { BriefcaseBusiness, Paperclip, CalendarDays } from "lucide-react";
// import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

export default function App() {
  const tags = [
    "HTML",
    "CSS",
    "PHP",
    "Laravel",
    "JavaScript",
    "jQuery",
    "React",
    "Bootstrap",
    "Tailwind CSS",
    "MySQL",
    "MariaDB",
    "Git",
    "Windows",
    "macOS",
    "Linux",
    "Bash",
    "NGINX",
    "cPanel",
  ];

  const experiences = [
    {
      date: "April 2024 - Present",
      title: "Computer Programmer I",
      company: "Human Settlements Adjudication Commission",
      description:
        "Leading the development of web applications using Laravel and React. Implementing responsive designs and ensuring optimal performance across devices. Along with deploying and maintaining applications on Linux servers.",
    },
    {
      date: "August 2023 - February 2024",
      title: "Junior Developer at Web Solutions Inc.",
      company: "Central Luzon State University",
      description:
        "Assisted in the development of client websites and applications. Gained experience in front-end and back-end technologies, including HTML, CSS, JavaScript, and PHP.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-0 pt-20 dark:bg-gray-700">
      {/* Navbar */}
      <section>
        <div className="fixed top-0 right-0 left-0 z-50">
          <Navbar fluid className="bg-gray-100 dark:bg-gray-800">
            <NavbarBrand href="https://flowbite-react.com">
              <img
                src="img/krakensushi.png"
                className="mr-3 h-9 sm:h-12"
                alt="KrakenSushi Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                KrakenSushi
              </span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
              <NavbarLink className="text-lg font-semibold" href="#home" active>
                Home
              </NavbarLink>
              <NavbarLink className="text-lg font-semibold" href="#projects">
                Projects
              </NavbarLink>
              <NavbarLink className="text-lg font-semibold" href="#experience">
                Experiences
              </NavbarLink>
              <NavbarLink className="text-lg font-semibold" href="#education">
                Education
              </NavbarLink>
              <NavbarLink className="text-lg font-semibold" href="#contact">
                Contact
              </NavbarLink>
            </NavbarCollapse>
            <DarkThemeToggle />
          </Navbar>
        </div>
      </section>

      {/* Hero */}
      <div
        id="home"
        className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-700"
      >
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Name
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              Hi!, I'm Ardy, a passionate full-stack software developer with a
              knack for crafting elegant solutions to complex problems. With a
              strong foundation in both front-end and back-end technologies, I
              thrive on turning ideas into reality through code.
            </p>
            <a
              href="CV.pdf"
              download
              className="mb-20 inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-none dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
            >
              Download CV
              <Paperclip className="-mr-1 ml-2 h-5 w-5" />
            </a>

            {/* Tags */}
            <div className="flex flex-wrap pt-6">
              {tags.map((tag) => (
                <div className="rounded-4xl">
                  <span
                    className={`text-md m-1 inline-flex items-center rounded-full border-1 border-gray-400 px-3 py-1 font-medium dark:border-gray-400 dark:text-gray-100`}
                  >
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Hero Image */}
          <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
              alt="mockup"
            />
          </div>
        </div>
      </div>

      {/* Body */}
      <section className="flex w-full flex-col items-center bg-slate-50 px-4 py-16 dark:bg-gray-900">
        {/* Projects */}
        <div id="projects" className="mt-24">
          <div className="relative my-10 flex w-full flex-col items-center justify-center gap-12">
            <div className="relative flex flex-col items-center gap-6">
              <h1 className="relative text-center text-4xl leading-[125%] font-bold text-gray-900 dark:text-gray-200">
                Projects
              </h1>
            </div>
          </div>
        </div>

        {/* Experience */}
        <Card
          id="experience"
          className="relative mt-24 w-full max-w-7xl rounded-3xl border-0 bg-slate-50 p-10 shadow-2xl backdrop-blur dark:bg-gray-800"
        >
          <div className="relative flex w-full flex-col items-center justify-center gap-12">
            <div className="relative flex flex-col items-center gap-6">
              <h1 className="relative text-center text-4xl leading-[125%] font-bold text-gray-900 dark:text-gray-200">
                Experiences
              </h1>
            </div>
            <Timeline>
              {experiences.map((exp, index) => (
                <TimelineItem key={index}>
                  <TimelinePoint icon={BriefcaseBusiness} />
                  <TimelineContent>
                    <TimelineTime>{exp.date}</TimelineTime>
                    <TimelineTitle>{exp.title}</TimelineTitle>
                    <TimelineBody className="text-sm">
                      {exp.company}
                    </TimelineBody>
                    <TimelineBody>{exp.description}</TimelineBody>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </Card>

        {/* Education */}
        <Card
          id="education"
          className="relative mt-24 w-full max-w-6xl rounded-3xl border-0 bg-slate-50 p-10 shadow-2xl backdrop-blur dark:bg-gray-800"
        >
          <div className="relative flex w-full flex-col items-center justify-center gap-12">
            <div className="relative flex flex-col items-center gap-6">
              <h1 className="relative text-center text-4xl leading-[125%] font-bold text-gray-900 dark:text-gray-200">
                Education
              </h1>
              <span className="inline-flex flex-wrap items-center justify-center gap-2.5 text-center">
                <span className="inline text-xl text-gray-600 dark:text-gray-400">
                  Your app is ready, start building with
                </span>
                <span className="relative inline-flex items-center gap-2">
                  <img
                    className="size-6"
                    alt="Flowbite React logo"
                    src="/flowbite-react.svg"
                  />
                  <span className="relative w-fit text-xl font-semibold whitespace-nowrap text-[#111928] dark:text-white">
                    Flowbite React
                  </span>
                </span>
                <h2 className="inline text-xl text-gray-600 dark:text-gray-400">
                  now.
                </h2>
              </span>
            </div>

            <div className="relative flex w-full flex-col items-start gap-6 self-stretch">
              <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2"></div>
            </div>
          </div>
        </Card>

        {/* Contact Me */}
        <Card
          id="contact"
          className="relative mt-24 w-full max-w-6xl rounded-3xl border-0 bg-slate-50 p-10 shadow-2xl backdrop-blur dark:bg-gray-800"
        >
          <div className="relative flex w-full flex-col items-center justify-center gap-12">
            <div className="relative flex flex-col items-center gap-6">
              <h1 className="relative text-center text-4xl leading-[125%] font-bold text-gray-900 dark:text-gray-200">
                Get In Touch
              </h1>
            </div>

            <div className="relative flex w-full flex-col items-start gap-6 self-stretch">
              <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2"></div>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}
