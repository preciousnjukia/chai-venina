import React, { useEffect, useState } from 'react';
import '../App.css';

function TrackingPage() {
    const estimatedTime = 5;
    const [elapsedTime, setElapsedTime] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setElapsedTime((prevTime) => prevTime + 1);
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    const getStepByElapsedTime = () => {
        const totalSteps = 4;
        const stepDuration = estimatedTime / totalSteps;
        const currentStep = Math.floor(elapsedTime / stepDuration) + 1;
        return currentStep > totalSteps ? totalSteps : currentStep;
    };


    return (
        <div>
            <div className="track-order-container">
                <div className="steps-container">
                    {["Ordered", "Preparing", "In Transit", "Arrived"].map((step, index) => (
                        <div
                            key={index}
                            className={`step ${getStepByElapsedTime() === index + 1 ? 'active' : ''}`}
                        >
                            {step}
                        </div>
                    ))}
                </div>
                <div className="estimate-bar">
                    <div className="estimate-progress" style={{ width: `${(elapsedTime / estimatedTime) * 100}%` }}></div>
                </div>
                <div className="estimated-time">Estimated Time: {estimatedTime - elapsedTime} minutes</div>
                {/* Add other tracking page content here */}

               

                {/* Creative form for order status */}
                <div className="order-status-form">
                    <h2>Your feedback is important to us</h2>
                    <form>
                        <label htmlFor="status1">Rate our Service:</label>
                        <img style={{width: '100%', height: '100%'}} alt="stars" src="https://via.placeholder.com/293x100" />

                        <label htmlFor="status2">What Makes You Feel This Way:</label>
                        <input type="text" id="status2" placeholder="Good Food, Fast dekivery etc.." />

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TrackingPage;