import React, { useState, useEffect } from 'react'
import { Element } from "react-scroll";
import { getAllHistoryItems } from '../api/get';

import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";

  import "react-vertical-timeline-component/style.min.css";

  const HistoryCard = ({ historyItem }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={historyItem.date}
        iconStyle={{ background: "#915eff" }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <img 
              src="/images/lecRo.svg" 
              alt="lecRo Logo" 
              className='w-[60%] h-[60%] object-contain'
            />
          </div>
        }
      >
        <div>
          <h3 className='text-white text-[24px] font-bold'>{historyItem.title}</h3>
        </div>
  
        <ul className='mt-5 list-disc ml-5 space-y-2'>
          {historyItem.points.map((point, index) => (
            <li
              key={`history-point-${index}`}
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
  const [historyItems, setHistoryItems] = useState([]);

  useEffect(() => {
    getAllHistoryItems()
        .then((data) => {
            setHistoryItems(data);
        })
        .catch((error) => {
            console.error('Projects component: Error fetching history items:', error);
        });
  }, []);

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
            {historyItems.map((historyItem, index) => (
                <HistoryCard
                key={`history-${historyItem._id}`}
                historyItem={historyItem}
                />
            ))}
            </VerticalTimeline>
        </div>
        </Element>
      </section>
  )
}

export default Projects