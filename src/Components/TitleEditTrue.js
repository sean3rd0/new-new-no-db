import React from "react" 

const TitleEditTrue = (props) => {
    return (
        <h2>
            <input></input>
            <button onClick={props.toggleEditFalse}>Save</button>
        </h2>
    )
}

export default TitleEditTrue