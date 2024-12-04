import React from "react";

const Profile = () => {
    const sliderValue = 15;

    const calculateBackgroundSize = () => {
        return `${(sliderValue / 100) * 100}%`;
    };

    return (
        <div className="flex flex-col items-center p-6 min-h-screen">
            <div className="w-full flex justify-end">
                <div className="w-[33%] flex items-center bg-white rounded-full mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                        <img
                            src="/images/profile/coin.png"
                            alt="User Profile"
                            className="w-12 h-12 md:w-48 md:h-auto rounded-full object-cover"
                        />
                    </div>
                    <span className="mx-4 text-lg md:text-xl font-semibold text-gray-800">
                        123
                    </span>
                </div>
            </div>

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
                                src="https://www.pixelstalk.net/wp-content/uploads/image10/Desktop-Background-Stitch-HD-620x338.jpg"
                                alt=""
                                className="w-32 h-32 rounded-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className=" w-full max-w-7xl mt-8">
                <div className="flex flex-col items-center mb-4">
                    <h1 className="text-3xl font-bold font-sans text-card-title uppercase">
                        Dmitry
                    </h1>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <span className="text-base font-sans font-semibold text-gray-500">
                        Rank &nbsp;:&nbsp;
                    </span>
                    <span className="text-2xl font-bold font-sans text-gray-700">10</span>
                </div>
            </div>

            <div className="w-full flex flex-col items-start m-4 ">
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

            <div className="flex justify-center items-center w-full my-2 gap-8">
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
                        Following
                    </span>
                    <span className="text-2xl font-bold font-sans text-gray-700">
                        1500
                    </span>
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

            <div className="user-posts w-full max-w-5xl flex flex-col items-center justify-center mt-8 mb-[5rem]">
                <img
                    src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Angry-Birds-Animation-Movie-HD-Wallpaper-620x388.jpg"
                    alt="No Posts"
                    className="w-64 h-64 md:w-32 md:h-32 rounded-full object-cover mb-4"
                />
                <span className="text-lg md:text-xl font-semibold text-gray-600">
                    No Post Yet
                </span>
            </div>
        </div>
    );
};

export default Profile;
