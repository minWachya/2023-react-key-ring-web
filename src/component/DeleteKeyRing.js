import React from "react";
import { TextField, Paper, Button } from "@material-ui/core";

class DeleteKeyRing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: {title: ""}};
        this.delete = props.delete;
    };

    onInputChangeTitle = (event) => {
        const thisItem = this.state.item;
        thisItem.title = event.target.value;
        this.setState({item: thisItem});
    };

    deleteEventHandler = () => {
        this.delete(this.state.item.title);
    }

    render() {
        return (
            <Paper style={{margin: 16, padding: 16}}>
                <div class="row">
                    <h2>&lt;키링 삭제&gt;</h2>
                    <div style={{marginBottom: 5}}>
                        <TextField id="outlined-basic" label="title" variant="outlined" 
                            value={this.state.item.title}
                            onChange={this.onInputChangeTitle}
                        />
                        </div>
                 </div>

                 <Button onClick={this.deleteEventHandler} color="secondary" variant="contained">키링 삭제</Button>
            </Paper>
        );
    }
}

export default DeleteKeyRing;