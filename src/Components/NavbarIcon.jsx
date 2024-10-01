import React, { useState } from 'react';

import 'lord-icon-element';

const NavbarIcon = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex items-center space-x-2">
            <li
                className="relative dark:bg-slate-400 dark:hover:bg-slate-100 flex items-center rounded-full hover:bg-slate-100 p-2  transition-colors duration-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {props.icon}
                {/* Tooltip text */}
                {isHovered && (
                    <span className="absolute  right-full mr-2 mt-1 text-xs bg-[#FFB400] text-gray-700 font-semibold px-2 py-1 rounded shadow-lg">
                        {props.hovertext}
                    </span>
                )}
            </li>
        </div>
    );
};

export default NavbarIcon;
