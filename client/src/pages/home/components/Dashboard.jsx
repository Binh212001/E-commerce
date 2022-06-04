import React from 'react';
import Content from './content/Content';
import Slide from './slide/Slide';

function Dashboard() {
  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='slide'>
          <Slide />
        </div>
        <div className='main'>
          <Content />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
