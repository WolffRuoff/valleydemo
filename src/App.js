import React from 'react';
import image from './img/mock-up.png';
import './App.css';

function App() {
  return (


        <div className="frame">
          <img src={image} alt="Hello" className="overlapp-top"/>

          <iframe title="hello"  width="375" height="812" src="https://xd.adobe.com/embed/1669fb66-fe91-4e09-a38b-1459e3dceb6f-433a/" frameBorder="0" className="overlapp-bottom" allowFullScreen></iframe>

        </div>



  );
}

export default App;
