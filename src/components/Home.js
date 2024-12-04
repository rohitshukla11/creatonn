import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import ConnectWallet from './ConnectWallet';

const Home = () => {
    const navigate = useNavigate();

    const cards = [
        {
            id: 1,
            title: '@WanderlustTrav',
            description: 'Just back from the Maldives 🏝️ Crystal-clear waters, white sandy beaches, and amazing marine life 🌊 #Maldives #BeachLife #TravelGoals',
            imgSrc: '/images/cards/maldives.jpg',
            profileImgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png',
            points: 1200,
            leaderboardRank: 5,
            token: 'WLT'
        },
        {
            id: 2,
            title: '@TechSavvy',
            description: 'Super hyped to try the new AI-powered model 🤖 It’s insane how it generates human-like text 🧠 #AI #Tech #Future',
            imgSrc: '/images/cards/ai_tech.jpg',
            profileImgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png',
            points: 1200,
            leaderboardRank: 3,
            token: 'TSY'
        },
        {
            id: 3,
            title: '@FoodLvr23',
            description: 'Tried the BEST pizza 🍕 at a hidden spot in town. Crispy crust, fresh toppings, pure heaven 😋 #Pizza #Foodie #Yum',
            imgSrc: '/images/cards/pizza.jpg',
            profileImgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png',
            points: 1200,
            leaderboardRank: 1,
            token: 'FLR'
        },
        {
            id: 4,
            title: '@FitFam100',
            description: 'Just hit 100 push-ups today 💪 Feeling stronger than ever. Keep pushing, team🏋️‍♂️ #Fitness #Grind #Motivation',
            imgSrc: '/images/cards/fitness.jpg',
            profileImgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png',
            points: 1200,
            leaderboardRank: 2,
            token: 'FTF'
        },
        {
            id: 5,
            title: '@BookwormB',
            description: 'Finished "The Great Gatsby" 📖—blown away by this classic! 🌟 #Books #Reading #Literature',
            imgSrc: '/images/cards/gatsby.jpg',
            profileImgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png',
            points: 1200,
            leaderboardRank: 6,
            token: 'BWB'
        },
        {
            id: 6,
            title: '@GameAddict',
            description: 'Leveling up in my fave game 🎮 Who else can’t stop playing? 👾 #Gaming #LevelUp #Addicted',
            imgSrc: '/images/cards/gaming.jpg',
            profileImgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png',
            points: 1200,
            leaderboardRank: 4,
            token: 'GAT'
        },
        {
            id: 7,
            title: '@NatureHkr',
            description: 'Hiking through the mountains 🏞️ and soaking in the fresh air. Nature therapy at its best🌲 #Hiking #Nature #Adventure',
            imgSrc: '/images/cards/hiking.jpg',
            profileImgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png',
            points: 1200,
            leaderboardRank: 7,
            token: 'NHK'
        },
        {
            id: 8,
            title: '@CreativeMnd',
            description: 'Finished this new painting 🎨 What do you think? 🖌️ #Art #Painting #Creative',
            imgSrc: '/images/cards/art_painting.jpg',
            profileImgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png',
            points: 1200,
            leaderboardRank: 8,
            token: 'CMN'
        },
        {
            id: 9,
            title: '@MusicFan',
            description: 'Found a new band and I’m obsessed 🎶 Their music is on repeat 🎸 #Music #NewJam #BandLove',
            imgSrc: '/images/cards/music.jpg',
            profileImgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png',
            points: 1200,
            leaderboardRank: 9,
            token: 'MFN'
        },
        {
            id: 10,
            title: '@Fashnista',
            description: 'Rocking this new outfit for the night out 🎧 💃✨ #Fashion #OOTD #StyleQueen',
            imgSrc: '/images/cards/fashion.jpg',
            profileImgSrc: 'https://cdn-icons-png.flaticon.com/512/8847/8847419.png',
            points: 1200,
            leaderboardRank: 10,
            token: 'FAS'
        }
    ];

    const handleCardClick = (user) => {
        navigate(`/profile/${user.id}`, { state: { userTitle: user.title, cards } });
    };

    return (
        <>
            <ConnectWallet />
            <div className="flex flex-col items-center justify-center min-h-screen p-6 pb-32 -mt-4 ">
                <div className="bg-custom-beige p-4 border-2 border-black rounded-lg shadow-custom-bottom-right w-full max-w-7xl mx-auto overflow-y-hidden">
                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {cards.map((card) => (
                            <div key={card.id} onClick={() => handleCardClick(card)}>
                                <Card
                                    key={card.id}
                                    imgSrc={card.imgSrc}
                                    title={card.title}
                                    description={card.description}
                                    profileImgSrc={card.profileImgSrc}
                                    token={card.token}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
