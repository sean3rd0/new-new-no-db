import React from "react"
import TitleEditFalse from "./TitleEditFalse"
import TitleEditTrue from "./TitleEditTrue"

class IndividualList extends React.Component {
    constructor() {
        super()

        this.state = {
            titleEdit: false
        }

        this.toggleEditFalse = this.toggleEditFalse.bind(this)
        this.toggleEditTrue = this.toggleEditTrue.bind(this)
    }

    toggleEditFalse() {
            this.setState({
                titleEdit: false
            })
    }

    toggleEditTrue() {
            this.setState({
                titleEdit: true
            })
        
    }

    render() {
        return (
            <div>
                {this.state.titleEdit === true ? 
                    <TitleEditTrue 
                        titleOfList={this.props.titleOfList}
                        toggleEditFalse={this.toggleEditFalse}
                    />
                    : 
                    <TitleEditFalse 
                        titleOfList={this.props.titleOfList}
                        toggleEditTrue={this.toggleEditTrue}
                    />
                }
            </div>

        //     <h2 className="title-of-list">{this.props.titleOfList} <button 
        //   className="edit-save-title-button" 
        //   // onClick={props.toggleTitleEdit}
        //   >
        //     edit / save
        //   </button>
        //   </h2>
        )
    }
    
}

export default IndividualList