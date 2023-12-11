import React from 'react';

function Done({ onClick }) {
  return (
    <button onClick={onClick} className='done'>Done!</button>
  );
}

export default Done;