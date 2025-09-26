import { useState, useEffect } from "react";
import {
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
  Tooltip,
} from "flowbite-react";

import {
  BriefcaseBusiness,
  Paperclip,
  GraduationCap,
  Backpack,
  ArrowUp,
} from "lucide-react";
import DotGrid from "./DotGrid";

export default function App() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  const projects = [
    {
      title: "Human Resource Management Information System",
      date: "July 2025 - Present",
      role: "Full-Stack Developer",
      description:
        "Continue development of an internal HRMIS, currently working on the pending modules. Maintain both current and legacy versions, ensuring system stability, applying bug fixes, and supporting users during the transition to the updated platform.",
      image: "HRMIS.png",
    },
    {
      title: "Records Management Information System",
      date: "April 2024 - Present",
      role: "Full-Stack Developer",
      description:
        "Developed and maintained a records management system, enabling users to upload, create, and track official documents across the commission. Implemented an electronic signature feature to streamline document approval workflows and improve overall process efficiency.",
      image: "RMIS.png",
    },
    {
      title: "TestCasetify",
      date: "January 2024",
      role: "Full-Stack Developer",
      description:
        "This project was primarily focused on creating test cases based on the standard test case format and generating a PDF file for export.",
      image: "TestCasetify.png",
    },
    {
      title: "Event Tabulation",
      date: "October 2023",
      role: "Full-Stack Developer",
      description:
        "Designed and developed an automated tabulation system for the school’s pageant, streamlining score tallying and participant ranking for faster and more accurate results.",
      image: "Tabulate.png",
    },
    {
      title: "Web-Based Student Immersion Portal",
      date: "July 2023",
      role: "Full-Stack Developer",
      description:
        "Developed a system to digitize the submission and monitoring of work immersion–related documents for CLSU’s Department of IT, significantly reducing manual paperwork and improving process tracking.",
      image: "WSIP.png",
    },
    {
      title: "Luckbye Tours",
      date: "October 2022",
      role: "Backend Developer",
      description:
        "Built a booking platform featuring destination reservations with automated email confirmations, user feedback collection, and an admin dashboard for managing transactions.",
      image: "LT.png",
    },
  ];

  const experiences = [
    {
      date: "April 2024 - Present",
      title: "Computer Programmer I",
      icon: BriefcaseBusiness,
      company: "Human Settlements Adjudication Commission",
      description:
        "Leading the development of web applications using Laravel and React. Implementing responsive designs and ensuring optimal performance across devices. Along with deploying and maintaining applications on Linux servers.",
    },
    {
      date: "February 2024",
      title: "Graduated with Academic Distinction",
      company: "Central Luzon State University",
      icon: GraduationCap,
      description:
        "Earned a Bachelor of Science in Information Technology, majoring in Systems Development, with a GPA of 1.65, demonstrating strong proficiency in software development concepts and hands-on experience in both front-end and back-end technologies.",
    },
    {
      date: "August 2023 - February 2024",
      title: "Web Developer Intern",
      icon: Backpack,
      company: "Central Luzon State University",
      description:
        "Developed and maintained internal systems for the IT department, gaining hands-on experience with front-end and back-end technologies including HTML, CSS, JavaScript, and PHP.",
    },
  ];

  const contacts = [
    {
      label: "Facebook",
      link: "https://www.fb.me/thisisardy",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z"/></svg>',
    },
    {
      label: "Instagram",
      link: "https://www.instagram.com/thisisardy_",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>',
    },
    {
      label: "GitHub",
      link: "https://www.github.com/krakensushi",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>',
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/ej-reyes-9560912ba/",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm5 170.2l66.5 0 0 213.8-66.5 0 0-213.8zm71.7-67.7a38.5 38.5 0 1 1 -77 0 38.5 38.5 0 1 1 77 0zM317.9 416l0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2-66.4 0z"/></svg>',
    },
    {
      label: "Google Mail",
      link: "mailto:reyesej715@gmail.com",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"/></svg>',
    },
    {
      label: "Phone",
      link: "tel:+639763219490",
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free v7.0.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"/></svg>',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = scrollTop / docHeight;

      if (scrolled > 0.35) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-200/90 px-0 pt-20 dark:bg-gray-700/80">
      {/* Navbar */}
      <section>
        <div className="fixed top-0 right-0 left-0 z-50 shadow-lg">
          <Navbar fluid className="bg-gray-100 dark:bg-gray-800">
            <NavbarBrand href="https://flowbite-react.com">
              <img
                src="img/krakensushi.png"
                className="mr-3 h-9 sm:h-12"
                alt="KrakenSushi Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                KrakenSushi
              </span>
            </NavbarBrand>
            <NavbarToggle />
            <NavbarCollapse>
              <NavbarLink className="text-lg font-semibold" href="#home">
                Home
              </NavbarLink>
              <NavbarLink className="text-lg font-semibold" href="#projects">
                Projects
              </NavbarLink>
              <NavbarLink className="text-lg font-semibold" href="#experience">
                Timeline
              </NavbarLink>
              <NavbarLink className="text-lg font-semibold" href="#contact">
                Contact
              </NavbarLink>
              <div className="flex items-center justify-start gap-2 text-gray-700 hover:text-blue-600 dark:text-gray-400">
                <span className="inline pt-2 pb-1 pl-3 text-lg font-semibold lg:hidden">
                  Toggle theme
                </span>
                <DarkThemeToggle className="block p-0" />
              </div>
            </NavbarCollapse>
          </Navbar>
        </div>
      </section>

      {/* DotGrid Background */}
      <div className="fixed inset-0 -z-10">
        <DotGrid
          dotSize={5}
          gap={20}
          baseColor="#333333"
          activeColor="#FFFFFF"
          proximity={100}
          shockRadius={200}
          shockStrength={5}
          resistance={700}
          returnDuration={1.5}
        />
        <div className="absolute inset-0 bg-white/5 dark:bg-gray-900/60" />
      </div>

      {/* Hero */}
      <div id="home" className="">
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-4xl leading-none font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Ardy
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-300">
              I’m a full-stack web developer with expertise in building and
              improving web applications. Skilled in PHP (Laravel), ReactJS, and
              server deployments, I focus on creating reliable, maintainable,
              and efficient solutions. I thrive in collaborative environments,
              adapt quickly to new challenges, and enjoy automating processes to
              enhance system performance and reliability.
            </p>
            <a
              href="CV.pdf"
              download
              className="mb-20 inline-flex items-center justify-center rounded-lg border border-gray-300 bg-gray-100 px-5 py-3 text-center text-base font-medium text-gray-900 transition duration-200 ease-in-out hover:scale-110 hover:bg-gray-300 hover:outline-1 hover:outline-gray-400 focus:ring-4 focus:ring-gray-400 dark:border-none dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600 dark:hover:outline-blue-400 dark:focus:ring-blue-600"
            >
              Download CV
              <Paperclip className="-mr-1 ml-2 h-5 w-5" />
            </a>

            {/* Tags */}
            <div className="flex flex-wrap pt-6">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-md m-1 inline-flex transform items-center rounded-full border border-gray-400 bg-white px-3 py-1 font-medium transition duration-200 ease-in-out hover:scale-125 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="right-0 hidden justify-end lg:col-span-5 lg:mt-0 lg:flex">
            <img src="img/me_bgremoved-1.png" alt="Ardy" />
          </div>
        </div>
      </div>

      {/* Body */}
      <section className="flex w-full flex-col items-center border-t border-gray-400 bg-gray-400/40 px-4 py-16 dark:border-gray-800 dark:bg-gray-700/50">
        {/* Projects */}
        <Card
          id="projects"
          className="relative mt-24 w-full max-w-7xl rounded-3xl border-0 py-5 shadow-2xl backdrop-blur lg:p-10"
        >
          <div className="flex w-full flex-col items-center justify-center gap-12">
            <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-gray-200">
              Projects
            </h1>
            <div className="grid w-full gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex flex-col rounded-xl border border-gray-200 p-5 shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:outline-1 hover:outline-blue-300 dark:border-gray-700 dark:bg-gray-700 dark:hover:outline-blue-400"
                >
                  {project.image && (
                    <img
                      src={"img/" + project.image}
                      alt={project.title}
                      className="mb-4 h-40 w-full cursor-pointer rounded-lg object-cover"
                      onClick={() => setPreviewImage("img/" + project.image)}
                    />
                  )}
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    {project.date}
                  </p>
                  <p className="mb-4 text-gray-700 dark:text-gray-300">
                    {project.role}
                  </p>
                  <hr className="py-3 text-gray-300 dark:text-gray-400" />
                  <p className="mt-0 pt-0 text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Image Preview Modal */}
        {previewImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={() => setPreviewImage(null)}
          >
            <img
              src={previewImage}
              alt="Preview"
              className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Timeline */}
        <Card
          id="experience"
          className="relative mt-24 w-full max-w-7xl rounded-3xl border-0 p-10 shadow-2xl backdrop-blur"
        >
          <div className="flex w-full flex-col items-center justify-center gap-12">
            <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-gray-200">
              Timeline
            </h1>
            <Timeline>
              {experiences.map((exp, index) => (
                <TimelineItem key={index}>
                  <TimelinePoint icon={exp.icon} />
                  <TimelineContent>
                    <TimelineTime>{exp.date}</TimelineTime>
                    {/* <div className="w-full rounded px-5 dark:bg-gray-600"> */}
                    <TimelineTitle>{exp.title}</TimelineTitle>
                    <TimelineBody className="text-sm">
                      {exp.company}
                    </TimelineBody>
                    <TimelineBody>{exp.description}</TimelineBody>
                    {/* </div> */}
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </Card>

        {/* Contact Me */}
        <Card
          id="contact"
          className="relative mt-24 w-full max-w-7xl rounded-3xl border-0 p-10 shadow-2xl backdrop-blur"
        >
          <div className="flex w-full flex-col items-center justify-center gap-12">
            <h1 className="text-center text-4xl font-bold text-gray-900 dark:text-gray-200">
              Contact me
              <p className="mb-5 text-sm font-light dark:text-gray-300">
                You may reach me through these channels
              </p>
            </h1>

            {/* Change grid to flex row */}
            <div className="flex flex-wrap justify-center gap-6">
              {contacts.map((contact, index) => (
                <Tooltip key={index} content={contact.label} placement="top">
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-3xl border border-gray-200 bg-gray-100 p-5 text-gray-900 shadow transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:border-gray-700 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:outline-blue-400 dark:focus:ring-blue-600"
                  >
                    <div
                      className="h-8 w-8 fill-current text-gray-900 dark:text-gray-100"
                      dangerouslySetInnerHTML={{ __html: contact.icon }}
                    />
                  </a>
                </Tooltip>
              ))}
            </div>
            <div className="m-0 flex w-full justify-center p-0">
              <a
                href="CV.pdf"
                download
                className="mb-20 inline-flex items-center justify-center rounded-lg border border-gray-300 bg-gray-100 px-5 py-3 text-center text-base font-medium text-gray-900 transition duration-200 ease-in-out hover:scale-110 hover:bg-gray-300 hover:outline-1 hover:outline-gray-400 focus:ring-4 focus:ring-gray-400 dark:border-none dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:hover:outline-blue-400 dark:focus:ring-blue-600"
              >
                Download CV
                <Paperclip className="-mr-1 ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </Card>
      </section>
      {showScrollTop && (
        <div className="fixed right-6 bottom-6 z-50">
          <Tooltip content="Back to top" placement="left" trigger="hover">
            <span className="inline-block">
              <button
                onClick={scrollToTop}
                className="rounded-full bg-slate-500 p-3 text-white shadow-lg transition hover:bg-blue-300 dark:bg-blue-800 dark:hover:bg-blue-600"
              >
                <ArrowUp className="h-8 w-8" />
              </button>
            </span>
          </Tooltip>
        </div>
      )}
    </main>
  );
}
