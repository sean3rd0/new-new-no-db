import React from "react"

const TitleEditFalse = (props) => {
    return (
        <h2>
            {props.titleOfList}
            <button onClick={props.toggleEditTrue}>Edit</button>
        </h2>
    )
}

export default TitleEditFalse