import React, { useState, useEffect } from 'react';
import data from '../data.json';

const TabsAccordionComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false); 

  const handleResize = () => {
    setIsMobileView(window.innerWidth < 768);
  };


  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize); 
  }, []);

  const handleItemClick = (index) => {

    setActiveIndex(index === activeIndex ? null : index);
  }
;

  return (
    <div className="w-full max-w-lg mx-auto p-4 pb-10">
      {!isMobileView ? (
        <>
          <div className="flex border border-gray-200">
            {data.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(index)}
                className={`flex-1 py-2 px-4 text-center ${
                  activeIndex === index ? 'font-bold border-b-2 border-blue-500 text-blue-500' : 'font-bold text-gray-600'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="p-4 text-gray-700 border border-t-0 border-gray-200">
          <div className="data__html" dangerouslySetInnerHTML={{ __html: activeIndex !== null && data[activeIndex].content }}></div>
          </div>
        </>
      ) : (
        <>
          <div>
            {data.map((item, index) => (
              <div key={item.id}>
                <button
                  onClick={() => handleItemClick(index)}
                  className={`font-bold w-full text-left py-2 px-4 border-b border-gray-200 ${
                    activeIndex === index ? 'font-bold bg-blue-100' : ''
                  }`}
                >
                  {item.title}
                </button>
                {activeIndex === index && (
                  <div className="p-4 text-gray-700 border-b border-gray-200">
                    <div className="data__html" dangerouslySetInnerHTML={{ __html: item.content }}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TabsAccordionComponent;


