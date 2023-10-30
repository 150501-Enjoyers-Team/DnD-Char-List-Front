import React from "react";

const starSky = () => {

    function renderSky(){
        const params = {
            amount: 200,
            size: {
                min: 1,
                max: 5,
                giant: 9
            },
            duration: {
                min: 5,
                max: 25,
            }
        }
    
    
        const randomBetween = (a, b) => {
            return (a + (Math.random() * (b - a)));
        }
        
        var sky ="";
    
        for (let i = 0; i < params.amount; i++) {
            // let star = $("<div></div>");
            let size = Math.round(Math.random() * 10) === 0 ? params.size.giant : randomBetween(params.size.min, params.size.max);
            let star = "<div  style=\"width: " + size + "px; " + 
                "height: " + size + "px; " +
                "left: " + randomBetween(0, 100) + "%; " +
                "top: " + randomBetween(0, 100) + "%; " + 
                "box-shadow: 0 0 " + size + "px " + size / 2 + "px #043668; " +
                "animation-duration:" + randomBetween(params.duration.min, params.duration.max) + "s;\"></div>"
           
           
            sky += star;
    
        }

        return sky;
    }
    
    return (
        <div id="starSky"  dangerouslySetInnerHTML={{__html: renderSky()}}></div> 
    );
};



export default starSky;

