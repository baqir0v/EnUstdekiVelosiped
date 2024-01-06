import React from 'react'
import "./index.scss"

const OnlyOnline = () => {
    return (
        <section id='onlyonline'>
            <div className="onlyonlinebox">
                <h3>Only Online</h3>
                <div className="time">
                    <div className="timecard"><span>00</span>  Days</div>
                    <div className="timecard"><span>00</span>  Hours</div>
                    <div className="timecard"><span>00</span>  Minutes</div>
                    <div className="timecard"><span>00</span>  Seconds</div>
                </div>
                <p>Get 30% off your order of $100 or more</p>
                <h4> Use code “TOPBIKE30”</h4>
                <button>Shop Now</button>
            </div>
        </section>
    )
}

export default OnlyOnline