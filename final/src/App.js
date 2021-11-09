import "./styles.css";
import React from 'react';
import italian_background from './italian_background.png';

export default function App() {
  return (
  
    <div className='app'> 
    

			<div className='score-section'>
				Pizza Mind
			</div>
			<div className='Button-options'>
				<div className='TakeQuiz'>
				<button  >Take Quiz </button>
				</div>
				<div className='Browse'>
				<button  >Browse Top Restaurants </button>
				</div>
				<div className='Invite'>
				<button>Invite Friends
					</button>
				</div>
			</div>
    
		</div>
  );
}
