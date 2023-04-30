import React from "react";
import {ListItem, ListItemText} from "@material-ui/core";

class KeyRing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: props.item};
    }; 

    render() {
        const item = this.props.item;

        return (
            <ListItem>
                    <img 
                    src={item.imgUrl} 
                    alt={item.title} 
                    width="100" 
                    height="100"
                    style={{marginRight: 15}}
                    />
                <ListItemText>
                    <b>{item.title}</b>    
                </ListItemText>
                <ListItemText>
                    {item.detail}
                </ListItemText>
                <ListItemText style={{marginTop:10}}>{item.userId}</ListItemText>
            </ListItem>
        );
    }
}

export default KeyRing;