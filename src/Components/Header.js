import React from "react"
import axios from "axios";

function Header (props) {
    return(
        <div className="header">
            <h1>Things to Remember</h1>
            <button
                className="new-list-button"
                onClick={() => {props.createNewList()}}
            >
                New List
            </button>
        </div>
    )
}

export default Header