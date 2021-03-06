import React from 'react';
import '../scss/Spinner.scss';

const Spinner = () => {
    return (
        <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};

export default Spinner;
