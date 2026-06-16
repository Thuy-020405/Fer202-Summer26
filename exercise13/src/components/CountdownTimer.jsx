import { useEffect, useState } from "react";

function CountdownTimer({ initialValue }) {
    const [timeRemaining, setTimeRemaining] = useState(initialValue);
    useEffect(() => {
        if (timeRemaining <= 0) return;
        const timerId = setInterval(() => {
            setTimeRemaining((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timerId);
    }, [timeRemaining]);
    return <p>Time Remaining: {timeRemaining}</p>;
}
export default CountdownTimer;