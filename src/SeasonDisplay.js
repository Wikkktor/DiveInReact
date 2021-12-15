import React from 'react';


const getSeason = (lat, month) => {
    // getting from the user latitude and month if he has summer or winter
    if (month > 2 && month < 9){
       return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth())
    return (
        <div>
            <h1>{season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the bitch'}</h1>
        </div>
    )
}

export default SeasonDisplay;