import React from 'react';

const Card = ({ imgSrc, title, description, profileImgSrc, token }) => {

    const formattedDescription = description.split(' ').map((word, index) =>
        word.startsWith('#') ? <><br key={index} /><b>{word}</b></> : word + ' '
    );

    return (
        <div className="bg-custom-gray p-6 rounded-lg shadow-md flex flex-col border-2 border-black h-[85vh] max-h-[900px]">
            <img src={imgSrc} alt={title} className="w-full h-1/2 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-bold mb-2 text-left font-sans text-card-title">{title}</h2>
            <p className="text-lg text-justify mb-4 font-sans text-card-description">{formattedDescription}</p>
            <div className="flex items-center justify-between w-full mt-4">
                <img src={profileImgSrc} alt="Profile" className="w-14 h-14 rounded-full border-2 border-black shadow-custom-bottom-right" />
                <button className="w-3/5 h-14 bg-custom-light-beige border-2 border-black rounded-[5px] shadow-custom-bottom-right text-custom-dark-gray cursor-pointer text-[17px] font-bold hover:bg-custom-border focus:outline-none uppercase">
                    Buy {token}
                </button>
            </div>
        </div>
    );
};

export default Card;
