import React from "react";

export default function SecondSection(){
    const imgstyle = {
        height: "30vmax",
        borderRadius: "10px",
        boxShadow: "20px -20px 0px 0px rgba(238,238,254,0.75)",
    }
    const buttonstyle = {
        margin: "10px 18px",
        padding: "8px 14px",
        background: "#2563EB",
        borderRadius: "20px",
        width: "35%",
        color: "#fff",
        fontSize: "1rem",
    }
    return (
        <>
            <div className="container-fluid" style={{margin: "8rem 0"}}>
                <div className="columns-2 flex flex-row">
                    <div className="textArea basis-2/4 flex justify-center" style={{flexDirection: "column"}}>
                        <h1 style={{fontWeight: "600", fontSize: "2.4rem" , marginLeft: "2rem"}}>Take Control <br /><span style={{color: "#FF5F55"}}>Monitor Usage & Change Filters</span>  <br />No Technician Needed</h1>
                        <p style={{fontSize: "1rem", color: "#616759"}} className="mx-10 my-5 ">We have crafted a product that addresses the real frustrations of a customer. The first step is to ensure there are zero service delays.</p>
                        <div className="qna my-3">
                            <p style={{fontSize: "1.8rem"}} className="mx-10  my-5 ">&#x1F5F9; Smart Water Purifier With Self Servicing Capability</p>
                            <p style={{fontSize: "1rem"}} className="mx-10 my-5 ">Say goodbye to the hassle of scheduling a technician for purifier maintenance with our self-replacing filters.</p>
                        </div>
                        <div className="qna my-3">
                            <p style={{fontSize: "1.8rem"}} className="mx-10 my-5 ">&#x1F5F9; Smart Water Purifier With Self Servicing Capability</p>
                            <p style={{fontSize: "1rem"}} className="mx-10 my-5 ">Say goodbye to the hassle of scheduling a technician for purifier maintenance with our self-replacing filters.</p>
                        </div>
                        <button className="" style={buttonstyle}>Next: Lorem ipsum dolor sit.</button>
                    </div>
                    <div className="imageArea basis-2/4 flex justify-center">
                        <img style={imgstyle} src="https://th.bing.com/th/id/OIP.XUW1rVguTqP4kLZoASrjTAHaE8?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="personsWorking" />
                    </div>
                </div>
            </div>
            <div className="container-fluid"  style={{margin: "8rem 0"}}>
                <div className="columns-2 flex flex-row">
                    <div className="imageArea basis-2/4 flex justify-center">
                    <img style={imgstyle} src="https://th.bing.com/th/id/OIP.XUW1rVguTqP4kLZoASrjTAHaE8?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="personsWorking" />
                    </div>
                    <div className="textArea basis-2/4 flex justify-center" style={{flexDirection: "column"}}>
                        <h1 style={{fontWeight: "600", fontSize: "2.4rem" , marginLeft: "2rem"}}>Take Control <br /><span style={{color: "#FF5F55"}}>Monitor Usage & Change Filters</span>  <br />No Technician Needed</h1>
                        <p style={{fontSize: "1rem", color: "#616759"}} className="mx-10 my-5 ">We have crafted a product that addresses the real frustrations of a customer. The first step is to ensure there are zero service delays.</p>
                        <div className="qna my-3">
                            <p style={{fontSize: "1.8rem"}} className="mx-10  my-5 ">&#x1F5F9; Smart Water Purifier With Self Servicing Capability</p>
                            <p style={{fontSize: "1rem"}} className="mx-10 my-5 ">Say goodbye to the hassle of scheduling a technician for purifier maintenance with our self-replacing filters.</p>
                        </div>
                        <div className="qna my-3">
                            <p style={{fontSize: "1.8rem"}} className="mx-10 my-5 ">&#x1F5F9; Smart Water Purifier With Self Servicing Capability</p>
                            <p style={{fontSize: "1rem"}} className="mx-10 my-5 ">Say goodbye to the hassle of scheduling a technician for purifier maintenance with our self-replacing filters.</p>
                        </div>
                        <button className="" style={buttonstyle}>Next: Lorem ipsum dolor sit.</button>
                    </div>
                </div>
            </div>
        </>
    )
}