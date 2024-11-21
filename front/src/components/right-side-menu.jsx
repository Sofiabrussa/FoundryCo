import React from 'react';

const RightSide = ({ imageSrc }) => {
  return (
    <div className="right-side">
      <img
        src={imageSrc}
        alt="Dynamic"
        className="dynamic-image"
      />
    </div>
  );
};

export default RightSide;