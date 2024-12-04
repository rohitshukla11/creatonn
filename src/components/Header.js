import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const buttons = [
        { id: 1, imgSrc: '/images/header-icons/watch.png', alt: 'user-1', action: 'home' },
        { id: 2, imgSrc: '/images/header-icons/add.png', alt: 'user-2', action: 'camera' },
        { id: 3, imgSrc: '/images/header-icons/leader.png', alt: 'user-3', action: 'leaders' },
        { id: 4, imgSrc: '/images/header-icons/user.png', alt: 'user-4', action: 'profile' },
    ];

    const handleClick = (action) => {
        console.log("action: ", action)
        if (action === 'home') {
            navigate('/');
        } else if (action === 'profile') {
            navigate('/profile');
        } else if (action === 'leaders') {
            navigate('/leaders');
        } else if (action === 'camera') {
            // open camera
        }
    };

    return (
        <div className="fixed bottom-1 left-1/2 -translate-x-1/2 bg-black p-2 rounded-full w-[70%] max-w-md sm:w-3/4 md:w-2/3 lg:w-1/2 flex justify-center z-50 backdrop-blur-lg backdrop-filter bg-opacity-60 mb-4">
            <nav className="flex gap-2 ">
                {buttons.map(button => (
                    <button
                        key={button.id}
                        className="w-14 h-14 sm:w-12 sm:h-12 rounded-full overflow-hidden focus:outline-none flex justify-center items-center"
                        onClick={() => handleClick(button.action)}
                    >
                        <img src={button.imgSrc} alt={button.alt} className="w-8 h-8 object-cover" />
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default Header;
