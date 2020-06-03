import React, { Component } from "react";

class Folder extends Component{
    constructor(props) {
        super(props);
        this.state = {isShowing : true}
    }
    handleClick(event)
    {
        event.preventDefault();
        this.setState((prevState)=>{
            return {isShowing : !prevState.isShowing}
        })
    }
    render(){
        return(
            <div>
                <h1>Home</h1>
                {this.state.isShowing ?  <u1>
                    <li>File1</li>
                    <li>File2</li>
                    <li>File3</li>
                </u1>: null}
                <button onClick={(event)=>this.handleClick(event)} >Toggle</button>
            </div>
        );
    }
}

export default Folder;