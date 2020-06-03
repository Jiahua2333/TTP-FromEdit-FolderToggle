import React, { Component } from "react";

class Folder extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isToggle: false,
        };
    }

    handleToggleClick = () =>{
        if(this.state.isToggle)
            this.setState({isToggle: false,});
        else
            this.setState({isToggle: true,});
    }

    render(){
    
        if(!this.state.isToggle){
            return (
                <>
                    <h1>Home:</h1>
                    <ul>
                        <li>File1</li>
                        <li>File2</li>
                        <li>File3</li>
                    </ul>
                    <button onClick = {this.handleToggleClick}>Toggle</button>
                </>
            );
        }
        else{
            return (
                <>
                    <h1>Home:</h1>
                    <button onClick = {this.handleToggleClick}>Toggle</button>
                </>

            );
        }
    }
}

export default Folder;