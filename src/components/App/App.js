import React, { useState, useEffect } from "react";
import './App.sass';


const App = () => {
   const [scrollValue, setScrollValue] = useState(0)
   let scrollLength = 0
   window.addEventListener('wheel', (e) => {

      e = e || window.event;
      let delta = e.deltaY || e.detail || e.wheelDelta;
      scrollLength += delta
      console.log(delta, scrollLength)

      if (scrollLength >= 300) {
         (scrollValue >= 1050) ? setScrollValue(1125) : setScrollValue(scrollValue + 210)
         scrollLength = 0
      } else if (scrollLength <= -300) {
         (scrollValue < 0) ? setScrollValue(0) : setScrollValue(scrollValue - 210)
         scrollLength = 0
      }
      console.log(scrollValue)

   })
   return (
      <div className="slider-container"
         style={{
            background: 'grey',
            width: '705px',
            height: '200px',
            margin: '600px auto',
            overflow: 'hidden'
         }}>
         <div className="slider"
            style={{
               display: 'flex',
               gap: '60px',
               width: '100%',
               height: '100%',
               transform: `translate3d(-${scrollValue}px, 0px, 0px)`,
               transition: 'transform 500ms linear'
            }}
            onClick={(e) => console.log(e.target.scrollTop)}>
            <div style={{
               display: 'flex',
               gap: '60px',
            }}>
               <div style={{ background: 'black', width: '150px', height: '100%', color: 'red', fontSize: '60px' }}>1</div>
               <div style={{ background: 'black', width: '150px', height: '100%', color: 'red', fontSize: '60px' }}>2</div>
               <div style={{ background: 'black', width: '150px', height: '100%', color: 'red', fontSize: '60px' }}>3</div>
               <div style={{ background: 'black', width: '150px', height: '100%', color: 'red', fontSize: '60px' }}>4</div>
               <div style={{ background: 'black', width: '150px', height: '100%', color: 'red', fontSize: '60px' }}>5</div>
               <div style={{ background: 'black', width: '150px', height: '100%', color: 'red', fontSize: '60px' }}>6</div>
               <div style={{ background: 'black', width: '150px', height: '100%', color: 'red', fontSize: '60px' }}>7</div>
               <div style={{ background: 'black', width: '150px', height: '100%', color: 'red', fontSize: '60px' }}>8</div>
               <div style={{ background: 'black', width: '150px', height: '100%', color: 'red', fontSize: '60px' }}>9</div>
            </div>
         </div>

      </div>
   )
}

export default App;