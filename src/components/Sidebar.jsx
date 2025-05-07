import React, { useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Sidebar({ Clicked }) {
  const [hiddenClass, setHiddenClass] = useState('');
  const [openSections, setOpenSections] = useState({});

  useEffect(() => {
    if (Clicked) {
      setHiddenClass('-translate-x-full opacity-0 ');
    } else {
      setHiddenClass('translate-x-0 opacity-100 ');
    }
  }, [Clicked]);

  const filterOptions = {
    "Ideal For": ["Men", "Women", "Children"],
    "Occasion": ["Casual", "Party", "Work"],
    "Work": ["Formal", "Semi-formal"],
    "Frabic": ["Cotton", "Silk"],
    "Segment": ["Premium", "Regular"]
  };

  const toggleSection = (label) => {
    setOpenSections(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <div
      className={`h-fit  w-[20vw] pl-5 bg-amber-50 transition-all duration-500 ease-in-out transform ${hiddenClass} sidebar`}
    >
      <div className='w-full py-4 px-1 flex gap-8 border-b border-gray-300'>
        <input type="checkbox" name="Customizble" className='scale-125' />
        <span className='font-medium text-lg'>Customizble</span>
      </div>

      {Object.entries(filterOptions).map(([label, options], idx) => {
        const isOpen = openSections[label];
        return (
          <div key={idx} className='my-2'>
            <div
              className='flex justify-between pt-2 pr-6 items-center cursor-pointer'
              onClick={() => toggleSection(label)}
            >
              <p className='text-md font-medium'>{label}</p>
              {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              {options.map((opt, i) => (
                <label key={i} className='flex items-center gap-2 py-1 text-sm'>
                  <input type="checkbox" className="scale-110 accent-blue-600" />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
            <hr className="my-2 border-gray-300" />
          </div>
        );
      })}
    </div>
  );
}
