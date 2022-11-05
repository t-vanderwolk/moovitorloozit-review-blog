import React from 'react';

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
    position:"relative",
        display: 'flex',
        justifyContent: 'space-around',
        alignContent: 'baseline',
        alignItems: 'baseline',
        border: '3px solid black',
        backgroundColor: 'orange',
      
        
      }}
    >
      <img
        style={{
          width: '10%',
          margin: '12',
          padding: '0%',
          paddingBottom: '0%',
        }}
        id="empty-boxes"
        src={require('../icons/boxes.png')}
        alt="washington state"
      />
      <img
        style={{
          width: '10%',
          margin: '12',
          padding: '0%',
          paddingBottom: '0%',
        }}
        id="empty-boxes"
        src={require('../icons/baggage.png')}
        alt="washington state"
      />
      <img
        style={{
          width: '10%',
          margin: '12',
          padding: '0%',
          paddingBottom: '0%',
        }}
        id="empty-boxes"
        src={require('../icons/moving-truck.png')}
        alt="washington state"
      />
    </footer>
  );
};

export default Footer;
