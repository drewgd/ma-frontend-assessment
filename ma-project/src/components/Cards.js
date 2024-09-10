// src/components/Cards.js
import React from 'react';

const Cards = () => {
  // Card data
  const cardData = [
    { id: 1, img: 'https://via.placeholder.com/400x300', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 2, img: 'https://via.placeholder.com/400x300', text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { id: 3, img: 'https://via.placeholder.com/400x300', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi exercitation ullamco laboris nisi.' }
  ];

  // Render cards
  const renderCards = () => {
    return cardData.map((card) => (
      <div key={card.id} className="card__item max-w-[325px] flex flex-col justify-between items-center bg-white rounded-md border-[#f2f2f2] border-2 overflow-hidden p-[20px] transition-shadow duration-250 hover:shadow-md shadow-sm">
        <div className="text-center">
        <img src={card.img} alt={`Card ${card.id}`} className="w-full object-cover rounded-md" />
          <p className="text-md text-gray-600 py-5">{card.text}</p>
        </div>
        <a href="https://www.mindarc.com" className="px-4 py-[0.55rem] tracking-[0.2em] uppercase text-black text-[0.85rem] hover:text-white hover:bg-black transition-colors ease-in-out duration-500 inline-block rounded-full px-3 py-1 border-[3px] text-sm font-black border-black">Read more</a>
      </div>
    ));
  };

  return (
    <div className="card__container max-w-[1105px] flex flex-wrap justify-center gap-[40px] mx-auto p-6 pt-[40px] pb-10">
      {renderCards()}
    </div>
  );
};

export default Cards;

