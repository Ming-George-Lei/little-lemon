import React from 'react';
import founders1 from './assets/Mario and Adrian A.jpg';

const Introduction = () => {
    return (
        <section className="introduction-container">
            <div className="company-info">
                <div className="company-details">
                    <div className="founders">
                        <img className="image1" src={founders1} alt="founders"></img>
                    </div>
                    <div className="company-introduction">
                            <p className="company-title">Little Lemon</p>
                            <p className="company-position">Chicago</p>
                            <p className="detailed-introduction">Two good brothers, Adrian and Mario, founded Little Lemon Restaurant. Their restaurant is located on Michigan Avenue in downtown Chicago. They are committed to developing delicious Mediterranean cuisine and bringing delicious food to everyone.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Introduction;