import React from 'react';
import bicycle from '../map-components/assets/bicycle.svg'
import walkingThick from '../map-components/assets/walkingThick.svg'
import walkingThin from '../map-components/assets/walkingThin.svg'
import bus from '../map-components/assets/bus.svg'

function Score({ethData}) {
  

	return (
		<div className="travel-scores-container-one">
            {ethData.map(item => 
                <div key={item._id} className="travel-scores-container-two">
                    <div className="score-breakdown-container">
                        <p className="chart-title scores">Score breakdown</p>
                        <div className="score-metric">
                            <div className="score-rate-nums">
                                <p>90 - 100</p>
                                <p>70 - 89</p>
                                <p>50 - 69</p>
                                <p>25 - 49</p>
                                <p>0 - 24</p>
                            </div>
                            <div className="score-rate-titles">
                                <p>Optimal</p>
                                <p>Excellent</p>
                                <p>Good</p>
                                <p>Minimal</p>
                                <p>Inadequate</p>
                            </div>
                        </div>
                    </div>

                    <div className="walk-score-container"> 
                        <p className="chart-title scores">Walk score</p>
                        <p className="score-subtitle">Pedestrian friendliness</p>
                        <div className="score-num">
                            
                            <p className="score"><img className="walk" src={walkingThin} alt="walking person" />{item['Walk Score']}</p>
                        </div>
                        <p className="score-city">{item['City']}</p>
                    </div>


                    <div className="transit-score-container"> 
                        <p className="chart-title scores">Transit score</p>
                        <p className="score-subtitle">Public transportation</p>
                        <div className="score-num">
                            <img className="bus" src={bus} alt="bus" />
                            <p className="score">{item['Transit Score']}</p>
                        </div>
                        <p className="score-city">{item['City']}</p>
                    </div>


                    <div className="bike-score-container"> 
                        <p className="chart-title scores">Bike score</p>
                        <p className="score-subtitle">Biking infrastructure</p>
                        <div className="score-num">
                            <img className="bike" src={bicycle} alt="bike" />
                            <p className="score">{item['Bike Score']}</p>
                        </div>
                        <p className="score-city">{item['City']}</p>
                    </div>

               </div>
            )}
		</div>
	);
}

export default Score;