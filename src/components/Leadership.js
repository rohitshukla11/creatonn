import React, { useState } from 'react';

const Leadership = () => {
    const [activeTab, setActiveTab] = useState('Test1');

    const leadersTest1 = [
        { id: 1, imgSrc: '/images/leaderboard/user-profile.png', username: '@MusicFan', coins: 150 },
        { id: 2, imgSrc: '/images/leaderboard/user-profile.png', username: '@TechSavvy', coins: 120 },
        { id: 3, imgSrc: '/images/leaderboard/user-profile.png', username: '@FoodLvr23', coins: 100 },
        { id: 4, imgSrc: '/images/leaderboard/user-profile.png', username: '@FitFam100', coins: 100 },
    ];

    const leadersTest2 = [
        { id: 5, imgSrc: '/images/leaderboard/user-profile.png', username: '@BookwormB', coins: 100 },
        { id: 6, imgSrc: '/images/leaderboard/user-profile.png', username: '@GameAddict', coins: 100 },
        { id: 7, imgSrc: '/images/leaderboard/user-profile.png', username: '@NatureHkr', coins: 100 },
        { id: 8, imgSrc: '/images/leaderboard/user-profile.png', username: '@CreativeMnd', coins: 100 },
    ];

    const leaders = activeTab === 'Test1' ? leadersTest1 : leadersTest2;

    return (
        <div className="min-h-screen p-6">
            <div className="flex justify-between items-center p-4 bg-custom-gray border-2 border-black rounded-[5px] shadow-custom-bottom-right text-custom-dark-gray cursor-pointer text-[17px] font-bold hover:bg-custom-border focus:outline-none uppercase">
                <div className="flex items-center">
                    <img src="/images/leaderboard/tokens.png" alt="tokens" className="w-12 h-12 rounded-full mr-4" />
                    <span className="text-xl font-semibold font-sans text-gray-700">1500</span>
                </div>
                <div className="flex items-center">
                    <img src="/images/leaderboard/cup.png" alt="cup" className="w-14 h-10 rounded-full" />
                    <span className="text-xl font-semibold font-sans text-gray-700">10</span>
                </div>
            </div>
            <div className="text-3xl font-bold pt-10 pb-6 text-left font-sans text-card-title">
                Leaderboard
            </div>

            <div className="flex justify-center items-center pt-4 w-full gap-8">
                <div className="coin-section flex flex-col-reverse  items-center">
                    <span className='text-base font-sans font-semibold text-gray-500'>Total Users</span>
                    <span className="text-2xl font-bold font-sans text-gray-700">1500</span>
                </div>
                <div className="coin-section flex flex-col-reverse items-center">
                    <span className='text-base font-sans font-semibold text-gray-500'>Your rank </span>
                    <span className="text-2xl font-bold font-sans text-gray-700">1500</span>
                </div>
            </div>

            <div className="flex justify-center p-4">
                <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                    <li className="me-2" onClick={() => setActiveTab('Test1')}>
                        <a href="#tab1" className={`font-sans text-xl inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg ${activeTab === 'Test1' ? 'text-gray-800 border-gray-800' : 'border-transparent '} dark:hover:text-gray-300 group`}>
                            <svg className="w-6 h-6 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                            </svg>
                            Creator
                        </a>
                    </li>
                    <li className="me-2" onClick={() => setActiveTab('Test2')}>
                        <a href="#tab2" className={`font-sans text-xl inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg ${activeTab === 'Test2' ? 'text-gray-800 border-gray-800' : 'border-transparent '} dark:hover:text-gray-300 group`}>
                            <svg className="w-6 h-6 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                            </svg>
                            User
                        </a>
                    </li>
                </ul>
            </div>

            <div className="flex flex-col gap-8 mb-[5rem]">
                {leaders.map(leader => (
                    <div key={leader.id} className="flex items-center mb-4 p-2 bg-custom-light-beige border-2 border-black rounded-[5px] shadow-custom-bottom-right text-custom-dark-gray cursor-pointer text-[17px] font-bold hover:bg-custom-border focus:outline-none uppercase">
                        <img src={leader.imgSrc} alt={leader.username} className="w-12 h-12 rounded-full mr-2" />
                        <div className="flex flex-1 justify-between items-center">
                            <span className="text-sm font-semibold font-sans text-gray-700">{leader.username}</span>
                            <div className="flex items-center">
                                <span className='font-sans text-sm'>Points &nbsp;:&nbsp;</span>
                                <span className="text-sm font-semibold font-sans text-gray-700">{leader.coins}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Leadership;
