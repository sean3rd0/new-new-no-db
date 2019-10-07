import React from "react" 

const TitleEditTrue = (props) => {
    return (
        <h2>
            <input onChange={e => props.editListTitle(props.listID, e.target.value)}></input>
            <button onClick={props.toggleEditFalse} >Save</button>
        </h2>
    )
}

export default TitleEditTrue