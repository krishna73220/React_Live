// src/components/NewsTicker.js
import React, { useState, useEffect, useRef } from 'react';
// import './NewsTicker.css'; // Import custom CSS for styling

const NewsTicker = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const tickerRef = useRef(null);
    const items = [
        "मैं तो आर्थिक अभाव के कारण खेला नहीं सका लेकिन मैं चाहता हूं हमारे कोशी - सीमांचल के बच्चे खेलें और ओलंपिक तक जाएं :- संजीव मिश्रा",     
        "सत्ता में रहते हुए ट्रांसफर-पोस्टिंग और सरकारी नौकरी के नाम पर लालू परिवार ने अकूत संपत्ति बनाई: उमेश सिंह कुशवाहा"
    ];

    useEffect(() => {
        const tickerInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000); // Change item every 3 seconds

        return () => clearInterval(tickerInterval); // Cleanup on unmount
    }, [items.length]);

    return (
        <div className="ticker-containerk news-ticker-wrap">
            <span class="ticker-title tt-u">Breaking News</span>
            <div className="ticker">
                <div className="ticker-items" style={{ transform: `translateY(-${currentIndex * 100}%)` }}>
                    {items.map((item, index) => (
                        <div className="ticker-item" key={index}>
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div class="ticker-control">
                <i class="ti-angle-left" id="prev-ticker" onClick={() => setCurrentIndex((currentIndex - 1 + items.length) % items.length)}></i>
                <i class="ti-angle-right" id="next-ticker" onClick={() => setCurrentIndex((currentIndex + 1) % items.length)}></i>
              
            </div>

        </div>
    );
};

export default NewsTicker;
