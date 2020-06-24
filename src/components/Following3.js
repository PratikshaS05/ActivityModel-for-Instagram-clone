import React, { Component } from 'react'
import './FollowingR.css'
import Pic3 from './pratik.jpg' 
import BorderWrapper from 'react-border-wrapper'

class Following1 extends Component {
    render() {
        return (
            <div className = "f0">
                <div className="f1" role="button" tabIndex="0" >
                    <div className="f2" >
                        <div className="f3" >
                            <div className="f4" role="button" tabindex="0" >
                                <canvas className="f5" height="66" width="66" style={{ position: "absolute", top: "-5px", left: "-5px", width: "44px", height: "44px" }}>
                                </canvas>
                                <span className="f6" role="link" tabindex="0" style={{ width: "34px", height: "34px" }}>
                                    <img alt="pratii_s05" className="f7" draggable="false" src={Pic3}>
                                    </img>

                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="f8">
                        <div className="f9">
                            <a className="f10" title="pratii_s05" href=" "  >pratik08_</a>

                        </div>
                       started following you.
                       <time className="f11" dateTime="2020-06-2405:00:00" title="Jun 23,2020">2d</time>
                    </div>
                    <BorderWrapper
                        borderColour="lightgrey"
                        borderWidth="0.5px"
                        borderRadius="5px"
                        borderType="solid"
                        innerPadding="0.5px"
                        // topElement= topElement}
                        topPosition={0.05}
                        topOffset="22px"
                        topGap="4px"
                        //rightElement={rightElement}
                        rightPosition={0.1}
                        rightOffset="22px"
                        rightGap="4px"
                    >
                        <button className="f13" type="button" >Following </button>
                    </BorderWrapper>


                </div>
            </div>
        )
    }
}

export default Following1
