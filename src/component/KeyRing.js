import React from "react";

class KeyRing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: props.item};
    }; 

    render() {
        return (
            <div className="KeyRing">
                <img 
                    src={this.state.item.imgUrl} 
                    alt={this.state.item.title} 
                    width="200" 
                    height="200"
                    />
                <label for="kr1">{this.state.item.uerId} </label>
                <label for="kr1">{this.state.item.title} </label>
                <label for="kr1">{this.state.item.detail} </label>
            </div>
        );
    }
}

export default KeyRing;