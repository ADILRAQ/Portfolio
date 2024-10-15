import React from 'react';

const HoverButton = () => {
    return (
        <button className="relative flex items-center justify-center px-6 py-3 border-2 border-gray-800 rounded-lg overflow-hidden transition-all duration-300">
            {/* Text (will disappear on hover) */}
            <span className="absolute transition-all duration-300 transform hover:translate-y-full">
                Hover me
            </span>
        
            {/* Icon (will appear on hover) */}
            <span className="absolute transition-all duration-300 transform translate-y-full hover:translate-y-0">
                hello 
            </span>
            </button>
        );
};

// export default HoverButton;
