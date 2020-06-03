import React, { Component } from "react";

class Display extends Component {
    constructor(props) {
      super(props);
      this.state = { 
          FirstName: '',
          LastName: '',
          isEdit: false,
          preFirstName: '',
          perLastName: '',
        };
    }
  
    handleEditClick = () => {
        this.setState({
            isEdit: true,

        });
    };
    handleSaveClick = () => {
        this.setState({
            isEdit: false,
            preFirstName: this.state.FirstName,
            perLastName: this.state.LastName
        });
    };
    handleCancleClick = () => {
        this.setState({
            isEdit: false,
            FirstName: this.state.preFirstName,
            LastName: this.state.perLastName,
        });
    };
    handleFirstNameChange = (event) =>{
        this.setState({
            FirstName: event.target.value,
          });
    }
    handleLastNameChange = (event) =>{
        this.setState({
            LastName: event.target.value,
          });
    }

  
    render() {
     
        if(!this.state.isEdit){
            return ( 
                    <div>
                        <div>First Name: {this.state.FirstName} </div>
                        <div>Last Name: {this.state.LastName}</div>
                        <button onClick = {this.handleEditClick}>Edit</button>
                    </div>
            );
        }
       else{
            return (
                <div>
                <label for="FirstName">FirstName: </label>
                <input
                    type="text"
                    name="FirstName"
                    value={this.state.FirstName}
                    onChange={this.handleFirstNameChange}
                />
                <label for="FirstName">LastName: </label>
                 <input
                    type="text"
                    name="LastName"
                    value={this.state.LastName}
                    onChange={this.handleLastNameChange}
                />
                <br/>
                <button onClick = {this.handleSaveClick}>Save</button>
                <button onClick = {this.handleCancleClick}>Cancle</button>
                </div>
            );
       }
    }
  }
  
  export default Display;