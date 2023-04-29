import React from "react";
import {ListItem, ListItemText, ListItemSecondaryAction, IconButton} from "@material-ui/core";
import { DeleteOutlined } from "@material-ui/icons";

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
                    />
                <ListItemText>{item.userId}</ListItemText>
                <ListItemText>{item.title}</ListItemText>
                <ListItemText>{item.detail}</ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete Todo"
                        onClick={this.deleteEventHandler}>
                        <DeleteOutlined />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export default KeyRing;