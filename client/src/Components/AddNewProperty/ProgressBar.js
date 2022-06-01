import React from 'react';
import "../../CSS/addPropHeader.css";

const Progress = () => {
  return (
    <>
      <div className="steps">
        <div className="step">
          <center><div className='num'>1</div></center>
          <div className='st' >Basic Info</div>
        </div>
        <div className="step">
          <div className='num'>2</div>
          <div className='st'>Property Details</div>
        </div>
        <div className="step">
          <div className='num'>3</div>
          <div className='st'>General Info</div>
        </div>
        <div className="step">
          <div className='num'>4</div>
          <div className='st'>Location Info</div>
        </div>
      </div>
    </>
  );
};

export default Progress;