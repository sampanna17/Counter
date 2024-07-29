import { useState } from 'react';
import './counter.css';

function Counter() {
    const [counter, setCounter] = useState(0);
    const [step, setStep] = useState(1);

    const handleIncrement = () => {
        setCounter(counter + step);
    };

    const handleDecrement = () => {
        setCounter(counter - step);
    };

    const handleReset = () => {
        setCounter(0);
    };

    const handleStepChange = (e) => {
        setStep(Number(e.target.value));
    };

    return (
        <div className="counter">
            <h1>Counter</h1>
            <div className="counter-display">{counter}</div>
            <div className="controls">
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <div className="step-control">
                <label>Set Increment/Decrement Value:</label>
                <input 
                    type="number" 
                    value={step} 
                    onChange={handleStepChange} 
                    min="1"
                />
            </div>
        </div>
    );
}

export default Counter;
