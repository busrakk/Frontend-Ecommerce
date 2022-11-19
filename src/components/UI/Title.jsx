import React from 'react';

const Title = ({ children }) => {
  return (
    <h3 className='text-2xl tracking-tighter font-semibold mb-3 px-6 md:px-0'>{ children }</h3>
  )
}

export default Title;