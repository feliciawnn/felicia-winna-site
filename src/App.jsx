import { useRef, useState } from "react";
import {
  IoBookOutline,
  IoLogoJavascript,
  IoLogoLinkedin,
  IoMailOutline,
} from "react-icons/io5";
import {
  PiArrowBendUpRightLight,
  PiGraduationCapThin,
  PiPhoneCall,
} from "react-icons/pi";
import { LuGraduationCap, LuUsersRound } from "react-icons/lu";
import { FaCss3, FaFigma, FaHtml5, FaJira, FaReact } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { BsBarChart } from "react-icons/bs";
import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoTailwindCss,
} from "react-icons/bi";

import headshot from "./assets/hero_headshot.png";
import logo from "./assets/fw_logo_light.svg";

const CONTACT_INFO = [
  {
    id: 3,
    icon: <IoLogoLinkedin className="w-full h-full" />,
    title: "LinkedIn",
    data: "Visit LinkedIn",
  },
  {
    id: 1,
    icon: <IoMailOutline className="w-full h-full" />,
    title: "Email",
    data: "winna.felicia@gmail.com",
  },
  {
    id: 2,
    icon: <PiPhoneCall className="w-full h-full" />,
    title: "Contact Number",
    data: "087787879290",
  },
];

const PERSONAL_VALUES = [
  {
    title: "User First",
    content:
      "Designing with empathy, providing real solutions to users problems",
    icon: <LuUsersRound />,
  },
  {
    title: "Frontend at Heart",
    content: "Clean, scalable code and pixel-perfect execution",
    icon: <FaCode />,
  },
  {
    title: "Product Mindset",
    content: "Thinking beyond features to value, impact, and outcomes",
    icon: <BsBarChart />,
  },
  {
    title: "Always Learning",
    content: "Curious by nature, consistently exploring and improving",
    icon: <IoBookOutline />,
  },
];

const WORK_EXPERIENCE = [
  {
    start_date: "May 2023",
    end_date: null,
    title: "Frontend Engineer",
    institution: "PT. Digital Pharma Andalan Indonesia",
    place: "Jakarta, Indonesia",
    content:
      "Developed and maintained various PWA systems including ERP, HRMS, and internal operational platforms using React.js and Typescript in fast-paced development cycles. Led frontend initiatives boosting user experience and operational saving costs by 50%.",
    skills: [
      "React.JS",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Project Management",
      "Vite",
      "Agile",
      "Jira",
      "Confluence",
      "Figma",
    ],
  },
  {
    start_date: "Dec 2021",
    end_date: "Feb 2022",
    title: "IT Intern",
    institution: "DoctorOnCall",
    place: "Kuala Lumpur, Malaysia",
    content:
      "Collaborated with cross-functional teams to support the launch of a new VIP-focused end-to-end healthcare service within one month, while developing frontend features.",
    skills: [
      "JavaScript",
      "HTML",
      "CSS",
      "SEO",
      "Bootstrap",
      "Express.js",
      "User Testing",
    ],
  },
];

const FORMAL_EDUCATION = [
  {
    start_date: "Feb 2020",
    end_date: "Aug 2022",
    title: "Bachelor of Computer Science (Advance Computer Science)",
    institution: "Monash University",
    skills: [
      "Advanced Algorithms and Data Structures",
      "Databases",
      "Big Data Management and Processing",
      "Object Oriented Design and Implementation",
    ],
  },
  {
    start_date: "July 2019",
    end_date: "Feb 2020",
    title: "Diploma of Engineering, IT Stream",
    institution: "Monash College",
  },
];

const TECH_STACK = [
  { icon: <FaReact />, name: "React" },
  { icon: <BiLogoJavascript />, name: "JavaScript" },
  { icon: <BiLogoTypescript />, name: "TypeScript" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3 />, name: "CSS3" },
  { icon: <BiLogoTailwindCss />, name: "Tailwind" },
  { icon: <FaJira />, name: "Jira" },
  { icon: <FaFigma />, name: "Figma" },
];

function App() {
  const [selectedId, setSelectedId] = useState(null);

  const popoverRef = useRef(null);

  const showPopover = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const popover = popoverRef.current;

    popover.showPopover();

    const popRect = popover.getBoundingClientRect();

    popover.style.left = `${rect.left + rect.width / 2}px`;
    popover.style.top = `${rect.top - popRect.height - 8}px`;
  };

  const hidePopover = () => {
    setSelectedId(null);
    popoverRef.current?.hidePopover();
  };

  const SkillBubbles = ({ skills }) => {
    return (
      <div className="flex gap-2 items-center flex-wrap mb-8">
        {skills?.map((skill) => (
          <div
            key={skill}
            className="border rounded-full border-secondary text-secondary text-center px-2"
          >
            {skill}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="w-full h-[100vh] overflow-hidden px-12 py-24 lg:py-20 lg:px-[20vw] bg-background text-brown flex flex-col justify-between relative">
        <div>
          <p className="text-brown-light text-[80px] md:text-[100px] font-serif leading-none mb-4">
            Felicia <br />
            Winna
          </p>

          <p className="text-[20px] ml-2">
            Building thoughtful digital experiences <br />
            from{" "}
            <span className="text-brown-light font-serif text-[32px] mx-1">
              code
            </span>{" "}
            to{" "}
            <span className="text-secondary font-serif italic text-[32px] mx-1 underline">
              strategy
            </span>
          </p>
        </div>
        <div>
          <div className="flex gap-4 items-center mb-4">
            {CONTACT_INFO.map((item, i) => (
              <div
                key={i}
                id="popover-trigger"
                popoverTarget="card-popover"
                className="w-[48px] h-[48px] rounded-full p-[12px] bg-background border-brown-light text-brown-light border-2 flex justify-center items-center cursor-pointer hover:text-secondary hover:border-secondary hover:bg-onhover-sec"
                onMouseEnter={(e) => {
                  showPopover(e);
                  setSelectedId(item.id);
                }}
                onMouseLeave={() => {
                  hidePopover();
                }}
              >
                {item.icon}
              </div>
            ))}
          </div>

          <div className="text-brown-light flex items-center gap-2 text-[24px] font-serif italic border-b w-fit border-brown-light cursor-pointer hover:text-brown hover:not-italic">
            <p className="">Get to know me</p>
            <PiArrowBendUpRightLight />
          </div>

          <img
            src={headshot}
            className="object-contain w-fit h-[75vh] hidden lg:block absolute bottom-0 right-[20vw]"
          />
        </div>
      </div>
      <div className="bg-background w-full h-full">
        <div className="-translate-y-[20px]">
          <div className="min-h-[400px] p-4 bg-brown [clip-path:ellipse(120%_100%_at_50%_100%)] text-white flex justify-center items-center">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:divide-x py-12 px-12 animate-float-up">
              {PERSONAL_VALUES.map((item, i) => (
                <div
                  className="flex flex-col items-center justify-center gap-4"
                  key={i}
                >
                  <div className="text-[32px]">{item.icon}</div>
                  <p>{item.title}</p>
                  <p className="text-center">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-b from-brown to-background h-[10px]" />
        </div>

        <div className="px-12 py-4 w-full">
          <p className="text-secondary font-bold">EXPERIENCE</p>
          <p className="font-serif text-[32px] mb-8">
            My professional{" "}
            <span className="text-secondary italic ">journey</span>
          </p>

          {WORK_EXPERIENCE.map((item, i) => (
            <div key={i} className="flex gap-4">
              <p className="w-[200px] hidden lg:block shrink-0">
                {item.start_date}
                {item.end_date ? ` - ${item.end_date}` : ""}
              </p>

              <div className="relative w-6 flex justify-center shrink-0">
                {i !== WORK_EXPERIENCE.length - 1 && (
                  <div className="absolute top-6 bottom-0 left-[11px] border-l-2 border-brown-light/50" />
                )}

                <div className="relative z-10 w-6 h-6 rounded-full bg-[#E7BAAE] p-[4px] flex justify-center items-center">
                  <div className="relative z-10 w-full h-full rounded-full bg-secondary" />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1">
                  <div className="mb-2 font-bold">
                    <div className="flex gap-2 lg:gap-4 items-center mb-2">
                      {!item.end_date ? (
                        <div className="rounded-full bg-secondary text-background text-[14px] py-1 px-4">
                          Current <span className="hidden lg:inline">Role</span>
                        </div>
                      ) : null}
                      <p className="text-[20px]">{item.title}</p>
                    </div>
                    <p className="text-[14px]">{item.institution}</p>

                    <p className="block lg:hidden mb-4 text-secondary">
                      <br />
                      {item.start_date}
                      {item.end_date ? ` - ${item.end_date}` : ""}
                    </p>
                  </div>

                  <p className="lg:mb-8">{item.content}</p>
                </div>

                <div className="max-w-[300px]">
                  <SkillBubbles skills={item.skills} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="px-12 py-4 w-full">
          <div className="bg-[#F4EEDB] rounded-[12px] p-4">
            <p className="text-secondary font-bold mb-4">EDUCATION</p>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 lg:items-center">
              <p className="font-serif text-[32px] leading-none whitespace-nowrap">
                Latest Formal
                <br /> <span className="text-secondary italic ">Education</span>
              </p>
              {FORMAL_EDUCATION.map((edu, i) => (
                <div className="w-full" key={i}>
                  <div className="flex lg:block w-full items-center gap-4">
                    <div className="w-[40px] h-[40px] shrink-0 rounded-full border border-secondary flex justify-center items-center p-[8px] text-secondary mb-4">
                      <PiGraduationCapThin className="w-full h-full" />
                    </div>
                    <div className="w-full">
                      <p className="font-bold">{edu.title}</p>
                      <p className="mb-4">{edu.institution}</p>
                      <div className="hidden lg:block">
                        <SkillBubbles skills={edu.skills} />
                      </div>
                      <button
                        type="button"
                        className="rounded-full py-1 px-4 bg-secondary lg:hidden w-full font-bold text-background hover:bg-onhover-sec"
                      >
                        View Coursework
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="px-12 py-4 w-full">
          <p className="text-secondary font-bold">FEATURED WORK</p>
          <p className="font-serif text-[32px] mb-8">
            Recent <span className="text-secondary italic ">Projects</span>
          </p>
        </div>

        <div className="w-full px-12 py-8 bg-brown text-background">
          <p className="text-secondary font-bold">TECH STACK</p>
          <div className="flex justify-between gap-4 items-center mb-8">
            <p className="font-serif text-[32px]">
              Tools & <span className="text-secondary italic ">Technology</span>
            </p>
            <p className="font-serif italic flex items-center gap-2 cursor-pointer hover:not-italic border-b">
              See All <PiArrowBendUpRightLight />
            </p>
          </div>

          <div className="overflow-hidden w-full">
            <div className="animate-marquee flex gap-4">
              <div className="flex shrink-0 gap-8">
                {TECH_STACK.map((stack, i) => (
                  <div
                    key={i}
                    className="shrink-0 mx-4 flex flex-col items-center gap-2"
                  >
                    <div className="text-secondary text-[48px]">
                      {stack.icon}
                    </div>
                    <p>{stack.name}</p>
                  </div>
                ))}
              </div>

              <div className="flex shrink-0 gap-8">
                {TECH_STACK.map((stack, i) => (
                  <div
                    key={i}
                    className="shrink-0 mx-4 flex flex-col items-center gap-2"
                  >
                    <div className="text-secondary text-[48px]">
                      {stack.icon}
                    </div>
                    <p>{stack.name}</p>
                  </div>
                ))}
              </div>

              <div className="flex shrink-0 gap-8">
                {TECH_STACK.map((stack, i) => (
                  <div
                    key={i}
                    className="shrink-0 mx-4 flex flex-col items-center gap-2"
                  >
                    <div className="text-secondary text-[48px]">
                      {stack.icon}
                    </div>
                    <p>{stack.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="px-12 py-8 w-full">
          <p className="text-secondary font-bold">ABOUT ME</p>
          <p className="font-serif text-[32px] mb-8">
            Beyond The <span className="text-secondary italic ">Screen</span>
          </p>
        </div>

        {/* FOOTER */}
        <div className="px-12 py-4 w-full bg-brown text-background flex justify-between gap-4 items-center">
          <div className="w-full hidden lg:block">
            <img src={logo} className="w-[20px] h-[20px] object-contain" />
          </div>
          <div className="w-full text-center whitespace-nowrap">
            Felicia Winna &copy; 2026
          </div>
          <div className="w-full flex gap-4 items-center justify-end">
            {CONTACT_INFO.map((item, i) => (
              <div
                key={i}
                className="w-[24px] h-[24px] cursor-pointer hover:text-brown-light"
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        id="card-popover"
        ref={popoverRef}
        popover="manual"
        className="
          absolute left-1/2 bottom-full
          -translate-x-1/2
          rounded-[20px] p-4
          shadow-lg
          text-brown
        "
      >
        <p>{CONTACT_INFO.find((item) => item.id === selectedId)?.data}</p>
      </div>
    </div>
  );
}

export default App;
