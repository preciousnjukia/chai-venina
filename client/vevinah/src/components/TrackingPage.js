import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
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

    const [rate, setRate] = useState(0);

    const handleRateClick = (selectedRate) => {
        setRate(selectedRate);
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
                    <label htmlFor='status1'>Rate our Service: </label>
                    <div className="rating-stars">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star}
                            className={`star${star <= rate ? ' selected' : ''}`}
                            onClick={() => handleRateClick(star)}
                          />
                        ))}
                    </div>
                    <form>
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