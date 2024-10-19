import React, { useState, useRef } from 'react';
import Badge from './Badge';
import Techs from './Techs';
import Visit from '../Assets/Visit.svg';
import { Itemdata } from '../data';

interface AccordionItemProps {
  title   :string;
  content :string;
  techs   ?:string[]
}

const AccordionItem: React.FC<{data: Itemdata}> = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null); // Ref typed as HTMLDivElement or null

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-dark">
      {/* Accordion Header */}
      <button
        className="w-full flex justify-between items-center p-4 text-left text-dark font-medium focus:outline-none hover:opacity-70"
        onClick={toggleAccordion}
      >
        <span>{data.name}</span>
        <Badge variant={data.status?.status ? 'orange' : 'dark'} sz='sm'>{ data.status?.content }</Badge>
      </button>

      {/* Accordion Content */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-[height] duration-300 ease-in-out"
        style={{
          height: isOpen && contentRef.current ? `${contentRef.current.scrollHeight}px` : '0px',
        }}
      >
        <div className="font-light p-4 text-dark">
          {data.description}
          <div className='flex mt-4'>
            <div className='flex-1'>
              <Techs items={data.techs || []} type={{variant: 'bordered', sz: 'sm'}}/>
            </div>
            <a href={data.link} target='_blank' className='w-[20px] h-[20px] rounded-full'>
              <img src={Visit} alt="" className='w-full h-[100%] cursor-pointer hover:rotate-45 transition-transform duration-150 ease-in'/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
