import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item border-b-4 border-blue-50 p-5 cursor-pointer bg-white-100 rounded-sm text-blue-100">
            <div className="accordion-title flex justify-between items-center gap-4" onClick={() => setIsActive(!isActive)}>

                <div className='font-russo font-semibold lg:text-xl'>
                    {title}
                </div>

                <div className='p-2 rounded-full bg-white-100 text-2xl flex items-center font-bold'>{isActive ? '↑' : '↓'}</div>
            </div>
            {isActive && <div className="accordion-content my-5 text-left">{content}</div>}
        </div>
    );
};

export default Accordion
