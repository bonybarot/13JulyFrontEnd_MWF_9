
  
  
import React from 'react';

const Clock = () => {
    
  function tick() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    // root.render(element);
  }
    return (
        <div>
            {tick()}
            
            {/* {setInterval(tick(), 1000)} */}
        </div>
    );
};

export default Clock;
