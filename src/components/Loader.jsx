import React from 'react';

export default function Loader() {
  return (
    <span className='block h-3 w-3'>
      <span className="animate-ping inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
    </span>
  )
}
