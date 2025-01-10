import React, { useEffect, useState } from "react";

const Counter = () => {
    const counters = [
        { label: "EXECUTED PROJECTS", count: 150 },
        { label: "APPRECIATION RECEIVED", count: 120 },
        { label: "INDUSTRY EXPERIENCE", count: 8 },
    ];

    const [values, setValues] = useState(counters.map(counter => ({ value: 0, target: counter.count })));

    useEffect(() => {
        const interval = setInterval(() => {
            setValues(prevValues => {
                return prevValues.map((item, index) => {
                    if (item.value < item.target) {
                        // Adjust the increment step for the "INDUSTRY EXPERIENCE" counter
                        const increment = item.target === 8 ? 1 : Math.ceil(item.target / 150); // Change 150 to your max count for other counters
                        return { ...item, value: Math.min(item.value + increment, item.target) };
                    }
                    return item;
                });
            });
        }, 100); // Adjust the interval to slow down the overall increment speed

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="dg-counter-main about-contr pt-md-5 mt-4 mb-4">
            <div className="row">
                {values.map((item, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="container_counter">
                            <h2 className="heading counter">
                                {item.value}+
                            </h2>
                            <p className="description">{counters[index].label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Counter;
