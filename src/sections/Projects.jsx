import React from 'react'
import { Element } from "react-scroll";
import { projects } from '../constants';

import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";

  import "react-vertical-timeline-component/style.min.css";

  const ProjectCard = ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src={experience.icon}
              className='w-[60%] h-[60%] object-contain'
            />
          </div>
        }
      >
        <div className='flex justify-between'>
          <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
         {experience.done ? (
          <img
          src={experience.icon}
          className='w-[6%] h-[10%] bg-green-300 rounded-full object-contain'
        />
         ): ''}
          
        </div>
  
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-[14px] pl-1 tracking-wider'
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
  }

const Projects = () => {
  return (
    <section>
        <Element name="projects" className="relative">
        <div className="container relative z-2 py-28">
            <div>
            <h3 className="h3 max-md:h5 max-w-640 max-lg:max-w-md mb-7 text-p4">
                Our journey so far.
            </h3>
            <p className="body-1 max-lg:max-w-sm">
                milestones.
            </p>
            </div>

            <div className="faq-line_after w-0.5 h-full absolute left-[calc(50%-1px)] top-0 -z-1 bg-s2" />
        </div>

        <div className='mt-20 flex flex-col'>
            <VerticalTimeline>
            {projects.map((experience, index) => (
                <ProjectCard
                key={`experience-${index}`}
                experience={experience}
                />
            ))}
            </VerticalTimeline>
        </div>
        </Element>
      </section>
  )
}

export default Projects