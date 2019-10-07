import React from 'react';
import "./reset.css";
import './App.css';
import Header from "./Components/Header";
import DisplayOfLists from "./Components/DisplayOfLists";
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      arrayOfLists: [
        {
            titleOfList: "Things I don't want to happen", 
            listOfThings: [
                "I want something else to show. "
            ]
        }
      ]
      // , 
      // titleEdit: false
      // , 
      // quoteEdit: false
    }

    this.createNewList = this.createNewList.bind(this)
    this.editListTitle = this.editListTitle.bind(this)
    this.deleteList = this.deleteList.bind(this)
  }
  
  componentDidMount() {
    axios.get("/api/lists").then(res => {
      this.setState({
        arrayOfLists: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  }

  createNewList(body) {
    axios.post("/api/lists", body).then(res => {
      this.setState({
        arrayOfLists: res.data
      })
    }).catch(err => {
      console.log(err)
    })
  }

  editListTitle(id, body) {
    axios.put(`/api/lists/:${id}`, body)
      .then(res => {
        this.setState({
          arrayOfLists: res.data
        })
      }).catch(err => {
        console.log(err)
      })
  }

  deleteList(id) {
    axios.delete(`/api/lists/:${id}`)
      .then(res => {
        this.setState({
          arrayOfLists: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <Header createNewList={this.createNewList} />
        <DisplayOfLists 
          arrayOfLists={this.state.arrayOfLists} 
          editListTitle={this.editListTitle}
          deleteList={this.deleteList}
          // titleEdit={this.state.titleEdit}
          // quoteEdit={this.state.quoteEdit}
        />
      </div>
    );

  }
}

export default App;
