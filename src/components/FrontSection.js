import React from "react";
import img1 from "../images/front.png";

export default function FrontSection(){
    const containerstyle = {
        background: "#1C1C3A",
        padding: "15vh 8vw",
        borderRadius: "0px 0px 20px 20px",
    }
    const makemecenter = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alingItem: "center",
    }
    const buttonstyle = {
        margin: "10px 18px",
        padding: "8px 14px",
        background: "#2563EB",
        borderRadius: "20px",
        width: "25%",
        color: "#fff",
        fontSize: "1.3rem",
    }
    const gradientMe = {
        backgroundImage: "linear-gradient(to right, pink, orange)",
        color: "transparent",
        webkitBackgroundClip: "text",
        backgroundClip: "text",
    }
    return (
        <>
            <div style={containerstyle} className="container-fluid" >
                <div className="columns-2 flex flex-row">
                    <div className="imageArea basis-1/4"  style={makemecenter}>
                        <img src={img1} alt="imgHere" style={{height: ""}}/>
                    </div>
                    <div className="textArea basis-3/4 items-center" style={makemecenter}>
                        <h1 style={{fontSize: "4rem", lineHeight: "1.2", color: "#fff"}}>Gauge Water Purifier<br/><span style={gradientMe}>Puts An End </span>To RO Service <br/>Pain</h1>
                        <p style={{fontSize: "1rem", lineHeight: "1.2", color: "#616759",margin: "2rem 0rem"}}>Fully automatic water purifier provides the highest water savings while ensuring a seamless service experience.</p>
                        <button className="" style={buttonstyle}> Take a product tour</button>
                        <p style={{fontSize: "1rem", lineHeight: "1.2", color: "#93ADB5",margin: "2rem 0rem"}}>Experience Convenience Like Never Before With Our Smart Water Purifier</p>
                    </div>
                </div>
            </div>
        </>
    )
}