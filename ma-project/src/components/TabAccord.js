import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import data from '../data.json';

console.log(ReactMarkdown)

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
          <div className="flex border-b border-gray-200">
            {data.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleItemClick(index)}
                className={`flex-1 py-2 px-4 text-center ${
                  activeIndex === index ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
          <div className="p-4 prose text-gray-700 border border-t-0 border-gray-200">
            <ReactMarkdown children={activeIndex !== null ? data[activeIndex].content : ''} />
          </div>
        </>
      ) : (
        <>
          <div>
            {data.map((item, index) => (
              <div key={item.id}>
                <button
                  onClick={() => handleItemClick(index)}
                  className={`w-full text-left py-2 px-4 border-b border-gray-200 ${
                    activeIndex === index ? 'bg-blue-100' : ''
                  }`}
                >
                  {item.title}
                </button>
                {activeIndex === index && (
                  <div className="p-4 prose text-gray-700 border-b border-gray-200">
                    <ReactMarkdown children={item.content} />
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