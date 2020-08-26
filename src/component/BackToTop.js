import React, { useState, useEffect } from 'react';
import '../style/BackToTop.css';
import { scrollToTop } from '../helper';


const BackToTop = () => {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const onBackToTop = () => {
        scrollToTop();
    };

    const handleScroll = () => {
        if (document.documentElement.scrollTop > 100) {
            if (!showButton)
                setShowButton(true)
        } else {
            if (showButton)
                setShowButton(false)
        }
    }

    return (
        <div>
            {
                showButton ?
                    <button onClick={() => onBackToTop()} className="ui icon button back-to-top">
                        <i className="angle up icon"></i>
                    </button>
                    :
                    null
            }
        </div>

    );
};

export default BackToTop;
