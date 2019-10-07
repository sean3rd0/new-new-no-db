import React from "react"
import TitleEditFalse from "./TitleEditFalse"
import TitleEditTrue from "./TitleEditTrue"

class IndividualList extends React.Component {
    constructor() {
        super()

        this.state = {
            titleEdit: false, 
            titleOfList: ""
        }

        this.toggleEditFalse = this.toggleEditFalse.bind(this)
        this.toggleEditTrue = this.toggleEditTrue.bind(this)
        this.handleTitleEdit = this.handleTitleEdit.bind(this)
    }

    componentDidMount() {
        this.setState({
            titleOfList: this.props.titleOfList
        })
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

    handleTitleEdit(value) {
        this.setState({
            titleOfList: value
        })
    }

    render() {
        console.log(this.state.titleOfList)
        return (
            <div>
                {this.state.titleEdit === true ? 
                    <TitleEditTrue 
                        titleOfList={this.state.titleOfList}
                        toggleEditFalse={this.toggleEditFalse}
                        listID={this.props.listID}
                        // handleTitleEdit={this.handleTitleEdit}
                        editListTitle={this.props.editListTitle}
                    />
                    : 
                    <TitleEditFalse 
                        titleOfList={this.state.titleOfList}
                        toggleEditTrue={this.toggleEditTrue}
                        listID={this.props.listID}
                        deleteList={this.props.deleteList}
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