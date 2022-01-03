import Slider from './slider';
import Selectbox from './selectbox';
import Sort from './sort';

import React from 'react';
import { GlobalState } from '../store/GlobalState';

const hrStyles = {
    hrStyle_one: {
        border: "none",
        borderBottom: "1.6px solid #323234",
        marginTop: "11px",
        marginLeft: "-20px",
    },
    hrStyle_two: {
        border: "none",
        borderBottom: "1.6px solid #323234",
        marginTop: "30px",
        marginLeft: "-20px",
    }
};

const Sidebar = () => {

    const { setSliderValue, setDelay } = React.useContext(GlobalState);

    const handleBars = (event: any, newValue: number | number[]) => {
        setSliderValue?.(newValue);
    };

    const handleDelay = (event: any, newValue: number) => {
        setDelay?.(newValue);
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h4>CONTROLS</h4>
                <hr style={hrStyles.hrStyle_one} />
            </div>
            <div className="sidebar-content">
                <div className="sidebar-content-item">

                    <h6>ALGORITHM</h6>
                    <Selectbox />

                    <hr style={hrStyles.hrStyle_two} />

                    <h6 style={{ marginTop: "20px" }}>SLIDERS</h6>


                    <div className="slider-container">
                        <h5>BARS LENGTH</h5>
                        <div className="sliders">
                            <p id='p1'>2</p>
                            <Slider defaultValue={50} min={2} max={100} onChange={handleBars} />
                            <p id='p2'>100</p>
                        </div>
                    </div>


                    <div className="slider-container">
                        <h5>SPEED</h5>
                        <div className="sliders">
                            <p id='p1'>1x</p>
                            <Slider defaultValue={1} min={1} max={4} onChange={handleDelay} />
                            <p id='p2'>4x</p>
                        </div>
                    </div>

                    <hr style={hrStyles.hrStyle_two} />

                    <Sort />

                </div>
            </div>
        </div>
    );
}

export default Sidebar;