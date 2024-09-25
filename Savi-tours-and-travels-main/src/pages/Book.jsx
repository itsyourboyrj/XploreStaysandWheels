import React, { useEffect } from 'react';

function Book() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
        document.head.removeChild(script);
    };
}, []);

  return (
    <>
      <iframe className='pt-16 bg-gray-900' data-tally-src="https://tally.so/r/mBXy1e" width="100%" height="100%" title="BOOK NOW !!"></iframe> 
    </>
)
}

export default Book