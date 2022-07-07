import React, { useState } from 'react';
import './about.css';

// "done" is passed from parent - About.js
function Progress({ done }) {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };
    setStyle(newStyle);
  }, 1000);

  return (
    <div className="pb-6">
      <div
        className="progress-container h-6 w-96 bg-white rounded-full sm:w-60

      
        // PHONES | VERTICAL
        // To change the width of progress bars
        iPhoneSEH:w-80
        iPhoneXRH:w-80
        iPhone12ProH:w-80
        Pixel5H:w-80
        SamsungS8H:w-80
        SamsungS20UltraH:w-80
        GalaxyFoldH:w-60
  
      "
      >
        <div
          className="progress-done rounded-full text-white text-bold flex items-center justify-center flex-col text-center text-xs"
          style={style}
        >
          {done}%
        </div>
      </div>
    </div>
  );
}

export default Progress;
