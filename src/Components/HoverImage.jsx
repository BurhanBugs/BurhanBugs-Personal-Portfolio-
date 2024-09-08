import React from "react";

const HoverImage = () => {
  return (
    <div className="relative w-44 h-44 sm:w-64 sm:h-64">
      <img
        src="/favi icon.png"
        alt="Hover Me"
        className="w-full h-full object-cover rounded-lg"
      />
      {/* Dot that will animate around the image */}
      <div className="absolute inset-0 rounded-full border-4  border-transparent 
                      hover:before:absolute hover:before:w-2 hover:before:h-2 hover:before:bg-[#FFB400] 
                      hover:before:rounded-full hover:before:top-0 hover:before:left-1/2 hover:before:transform 
                      hover:before:-translate-x-1/2 animate-spinDot transition-all duration-300 ease-in-out">
      </div>
    </div>
  );
};

export default HoverImage;
