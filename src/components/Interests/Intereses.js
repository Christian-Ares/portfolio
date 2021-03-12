import React from 'react';
import './Intereses.css'

export const Intereses = () => {
    return (
        <div className="interests" id="interests">
            <h1>Current Interests</h1>
            <div className="parentInterests">
                <span className="iconify span1" data-icon="logos:angular-icon" data-inline="false"></span>
                <span className="iconify span2" data-icon="logos:typescript-icon" data-inline="false"></span>
                <span className="iconify span3" data-icon="cib:mysql" data-inline="false"></span>
                <span className="iconify span4" data-icon="logos:flutter" data-inline="false"></span>
            </div>
        </div>
    )
};