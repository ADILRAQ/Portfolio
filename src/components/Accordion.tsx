import React, { useRef } from 'react';
import Badge from './Badge';
import Techs from './Techs';
import { Itemdata } from '../data';
import Link from './Link';

interface AccordionProp {
  id?:       number,
  data:     Itemdata,
  openedId?: number,
  isOpen?:   React.Dispatch<React.SetStateAction<number>>
}

const Accordion: React.FC<AccordionProp> = ({id, data, openedId, isOpen}) => {
  // const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null); // Ref typed as HTMLDivElement or null

  const toggleAccordion = () => {
    if (id !== undefined && isOpen)
      isOpen(value => value !== id ? id : -1)
  };

  return (
    <div className="border-b border-dark">
      {/* Accordion Header */}
      <button
        className="w-full flex justify-between items-center p-4 text-left text-dark font-medium focus:outline-none hover:opacity-70"
        onClick={toggleAccordion}
      >
        <span>{data.name}</span>
        {data.status?.status ?
            <Badge variant={data.status?.status ? 'orange' : 'dark'} sz='sm'>{ data.status?.content }</Badge>
            :
            <Link link={data.link} />
        }
      </button>

      {/* Accordion Content */}
      {
        data.description &&
        <div
          ref={contentRef}
          className="overflow-hidden transition-[height] duration-300 ease-in-out"
          style={{
            height: (id === openedId) && contentRef.current ? `${contentRef.current.scrollHeight}px` : '0px',
          }}
        >
          <div className="font-light p-4 text-[#51595F]">
            {data.description}
            <div className='flex mt-4'>
              <div className='flex-1'>
                <Techs items={data.techs || []} type={{variant: 'bordered', sz: 'sm'}}/>
              </div>
              <Link link={data.link} />
            </div>
          </div>
        </div>
        }
    </div>
  );
};

export default Accordion;
