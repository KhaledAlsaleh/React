// import React from 'react'

const Guarantee = ({ guaranteeImg, guaranteeTitle, guaranteeDescription }) => {
  return (
    <div className='guarantee'>
      <img className='guaranteeImage' src={guaranteeImg} alt='GuaranteeImage' />
      <h3>{guaranteeTitle}</h3>
      <p>{guaranteeDescription}</p>
    </div>
  );
};

export default Guarantee;
