import React from "react";
import { useLocation } from "react-router-dom";

const UserProfile = () => {
    const location = useLocation();
    const { userTitle, cards } = location.state || {};

    const userCards = cards.filter((card) => card.title === userTitle);

    const userProfile = {
        profileImgSrc: "https://cdn-icons-png.flaticon.com/512/8847/8847419.png",
        name: userTitle,
    };

    const sliderValue = 50;

    const calculateBackgroundSize = () => {
        return `${(sliderValue / 100) * 100}%`;
    };

    return (
        <div className="flex flex-col items-center p-6 min-h-screen">
            <div className="relative w-full mb-8">
                <div className="relative w-full h-40 bg-gray-200 border border-gray-300 rounded-lg overflow-visible">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div
                            className="absolute w-32 h-32 bg-white rounded-full"
                            style={{
                                top: "-16%",
                                left: "50%",
                                transform: "translate(-50%, 80%)",
                            }}
                        >
                            <img
                                src={userProfile.profileImgSrc}
                                alt={`${userProfile.name} profile`}
                                className="w-32 h-32 rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className=" w-full max-w-7xl mt-8">
                <div className="flex flex-col items-center mb-4">
                    <h1 className="text-3xl font-bold font-sans text-card-title uppercase">
                        {userProfile.name}
                    </h1>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <span className="text-base font-sans font-semibold text-gray-500">
                        Rank &nbsp;:&nbsp;
                    </span>
                    <span className="text-2xl font-bold font-sans text-gray-700">10</span>
                </div>
            </div>

            <div className="w-full flex flex-col items-start">
                <h1 className="text-xl font-bold font-sans text-gray-700">
                    Level
                </h1>
                <div className="relative w-full mb-16 bg-custom-light-beige rounded-full p-4 shadow-custom-bottom-right mt-4">
                    <label htmlFor="labels-range-input" className="sr-only">
                        Labels range
                    </label>
                    <input
                        id="labels-range-input"
                        type="range"
                        value={sliderValue}
                        min="0"
                        max="100"
                        className="w-full h-4 bg-white rounded-lg appearance-none cursor-pointer custom-slider"
                        style={{
                            background: `linear-gradient(to right, #aad6f1 ${calculateBackgroundSize()}, white ${calculateBackgroundSize()})`,
                        }}
                    />
                    <span className="text-lg text-gray-500 absolute left-0 -bottom-10">
                        0
                    </span>
                    <span className="text-lg text-gray-500 absolute left-1/2 transform -translate-x-1/2 -bottom-10">
                        {`${sliderValue}/100`}
                    </span>
                    <span className="text-lg text-gray-500 absolute right-0 -bottom-10">
                        100
                    </span>
                </div>
            </div>

            <div className="flex justify-between items-center p-4 w-full my-2">
                <div className="coin-section flex flex-col-reverse  items-center">
                    <span className="text-base font-sans font-semibold text-gray-500">
                        Followers
                    </span>
                    <span className="text-2xl font-bold font-sans text-gray-700">
                        1500
                    </span>
                </div>
                <div className="coin-section flex flex-col-reverse items-center">
                    <span className="text-base font-sans font-semibold text-gray-500">
                        Tokens Sold{" "}
                    </span>
                    <span className="text-2xl font-bold font-sans text-gray-700">
                        1500
                    </span>
                </div>
                <div className="flex items-center flex-col-reverse ">
                    <span className="text-base font-sans font-semibold text-gray-500">
                        Tokens Price
                    </span>
                    <span className="text-2xl font-bold font-sans text-gray-700">10</span>
                </div>
            </div>
            <div className="flex justify-center gap-8 items-center p-4 w-full ">
                <div className="coin-section flex items-center w-[40%]">
                    <button className="w-full h-14 bg-custom-light-beige border-2 border-black rounded-[5px] shadow-custom-bottom-right text-custom-dark-gray cursor-pointer text-[17px] font-bold hover:bg-custom-border focus:outline-none uppercase">
                        Follow
                    </button>
                </div>
                <div className="flex items-center w-[45%]">
                    <button className="w-full h-14 bg-custom-light-beige border-2 border-black rounded-[5px] shadow-custom-bottom-right text-custom-dark-gray cursor-pointer text-[17px] font-bold hover:bg-custom-border focus:outline-none uppercase">
                        Buy Tokens
                    </button>
                </div>
            </div>

            <div className="flex justify-center mt-4 mb-8">
                <a
                    href="#post"
                    className={`font-sans text-xl inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg text-gray-800 border-gray-800 dark:hover:text-gray-300 group`}
                >
                    <img
                        src="/images/header-icons/watch.png"
                        alt="/images/header-icons/watch.png"
                        className="w-8 h-8 object-cover"
                    />
                </a>
            </div>

            <div className="user-posts w-full max-w-5xl grid grid-cols-3 gap-4 md:px-0 mb-20">
                {userCards.map((post) => (
                    <div key={post.id} className="post h-40">
                        <img
                            src={post.imgSrc}
                            alt={post.alt}
                            className="w-full h-full object-cover rounded-md"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserProfile;
