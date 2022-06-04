import React from 'react';

function WrapperCategory({ children }) {
  return (
    <div>
      <div className='filter'>filter</div>
      <div className='content'>{children}</div>
    </div>
  );
}

export default WrapperCategory;
