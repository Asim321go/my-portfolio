"use client";
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { easeIn, motion } from "framer-motion";
import ExperienceCard from "@/components/ExperienceCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaHtml5, FaCss3, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// experience data
const experience = {
  title: "My Experience",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy tex",
  items: [
    {
      company: "Redsky Advance Soulution",
      position: "React Native Developer",
      duration: "2023 - present",
    },
    {
      company: "Redsky Advance Soulution",
      position: "React Native Developer",
      duration: "2023 - present",
    },
    {
      company: "Redsky Advance Soulution",
      position: "React Native Developer",
      duration: "2023 - present",
    },
    {
      company: "Redsky Advance Soulution",
      position: "React Native Developer",
      duration: "2023 - present",
    },
    {
      company: "Redsky Advance Soulution",
      position: "React Native Developer",
      duration: "2023 - present",
    },
    {
      company: "Redsky Advance Soulution",
      position: "React Native Developer",
      duration: "2023 - present",
    },
  ],
};

// education data
const education = {
  title: "My Education",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy tex",
  items: [
    {
      degree: "10th",
      institution: "NIC College",
      duration: "2015 - 2016",
    },
    {
      degree: "10 + 2",
      institution: "NIC College",
      duration: "2016 - 2018",
    },
    {
      degree: "BCA",
      institution: "Lucknow University",
      duration: "2018 - 2021",
    },
    {
      degree: "Web Designing Intern",
      institution: "Analyze Info Tech",
      duration: "2021 - 2022",
    },
    {
      degree: "Frontend Developer Intern",
      institution: "Sunrise Info Tech",
      duration: "2022 - 2023",
    },
    {
      degree: "React Native Developer Intern",
      institution: "Redsky Advance Solution Pvt Ltd",
      duration: "2023 - 2023",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy tex",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "Css3",
    },
    {
      icon: <RiTailwindCssFill />,
      name: "talwind css",
    },
    {
      icon: <FaJs />,
      name: "Javascript",
    },
    {
      icon: <FaReact />,
      name: "react",
    },
    {
      icon: <RiNextjsFill />,
      name: "next.js",
    },
    {
      icon: <FaReact />,
      name: "react native",
    },
    {
      icon: <FaGithub />,
      name: "github",
    },
  ],
};

// about data
const about = {
  title: "About me",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy tex",
  info: [
    { fieldName: "name", fieldValue: "Asim Farhan" },
    { fieldName: "phone", fieldValue: "(+91 700 784 0791)" },
    { fieldName: "experience", fieldValue: "2+ Years" },
    { fieldName: "skype", fieldValue: "Asim.farhan" },
    { fieldName: "email", fieldValue: "asimfarhan007@gmail.com" },
    { fieldName: "nationality", fieldValue: "Indian" },
    { fieldName: "Languages", fieldValue: "Urdu Hindi English" },
    { fieldName: "freelance", fieldValue: "unavailable" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.5, duration: 0.4, ease: easeIn },
      }}
      className="container"
    >
      <Tabs
        defaultValue="experience"
        className="xl:flex-row lg:flex-row flex-col flex gap-10"
      >
        <TabsList className="flex-[0.5]">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="about me">About me</TabsTrigger>
        </TabsList>
        <div className="min-h-[70vh] flex-1">
          <TabsContent value="experience" className="flex-1 min-h-[70vh]">
            <div className="flex flex-col gap-8">
              <h1 className="text-3xl xl:text-start text-center lg:text-start md:text-start text-white font-bold">
                {experience?.title}
              </h1>
              <p className="text-sm text-center xl:text-start lg:text-start md:text-start text-white/60 leading-relaxed ">
                {experience?.description}
              </p>
              <ScrollArea className="h-[390px]">
                <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-7">
                  {experience?.items?.map((item, index) => {
                    return (
                      <ExperienceCard
                        duration={item?.duration}
                        position={item?.position}
                        techUniversity={item?.company}
                        key={index}
                      />
                    );
                  })}
                </div>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="education" className="flex-1">
            <div className="flex flex-col gap-8">
              <h1 className="text-3xl xl:text-start text-center lg:text-start md:text-start text-white font-bold">
                {education?.title}
              </h1>
              <p className="text-sm text-center xl:text-start lg:text-start md:text-start text-white/60 leading-relaxed ">
                {education?.description}
              </p>
              <ScrollArea className="h-[390px]">
                <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-7">
                  {education?.items?.map((item, index) => {
                    return (
                      <ExperienceCard
                        duration={item?.duration}
                        position={item?.degree}
                        techUniversity={item?.institution}
                        key={index}
                      />
                    );
                  })}
                </div>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="skills" className="flex-1">
            <div className="flex flex-col gap-8">
              <h1 className="text-3xl xl:text-start text-center lg:text-start md:text-start text-white font-bold">
                {skills?.title}
              </h1>
              <p className="text-sm text-center xl:text-start lg:text-start md:text-start text-white/60 leading-relaxed max-w-[90%]">
                {skills?.description}
              </p>
              <ul className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-7">
                {skills?.skillList?.map((skill, index) => {
                  return (
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger>
                          <li
                            key={index}
                            className="shadow-xl flex justify-center text-6xl bg-[#232329] py-10 rounded-[10px] group"
                          >
                            <p className="group-hover:text-accent transition-all duration-500">
                              {skill?.icon}
                            </p>
                            <TooltipContent className="bg-white text-primary rounded shadow-sm">
                              <p className="capitalize">{skill?.name}</p>
                            </TooltipContent>
                          </li>
                        </TooltipTrigger>
                      </Tooltip>
                    </TooltipProvider>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
          <TabsContent
            value="about me"
            className="flex-1 w-full xl:mx-0 mx-auto"
          >
            <div className="flex flex-col gap-8">
              <h1 className="text-3xl xl:text-start text-center lg:text-start md:text-start text-white font-bold">
                {about?.title}
              </h1>
              <p className="text-sm text-center xl:text-start lg:text-start md:text-start text-white/60 leading-relaxed max-w-[90%]">
                {about?.description}
              </p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-x-9 gap-y-4">
                {about?.info?.map((item, index) => {
                  return (
                    <li className="flex items-center justify-center xl:justify-start lg:justify-start md:justify-start">
                      <span className="text-sm text-white/60 mr-4 capitalize">
                        {item?.fieldName}
                      </span>
                      <span className="">{item?.fieldValue}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </motion.div>
  );
};

export default Resume;
