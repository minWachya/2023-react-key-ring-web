import React from "react";
import { TextField, Paper, Button } from "@material-ui/core";

class AddKeyRing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: {title: "", userId: "", detail: "", imgUrl: ""}};
        this.add = props.add;
    };

    onButtonClick = () => {
        this.add(this.state.item);      
        this.setState({item: {title: "", userId: "", detail: "", imgUrl: ""}}); 
    };

    onInputChangeTitle = (event) => {
        const thisItem = this.state.item;
        thisItem.title = event.target.value;
        this.setState({item: thisItem});
    };
    onInputChangeUserId = (event) => {
        const thisItem = this.state.item;
        thisItem.userId = event.target.value;
        this.setState({item: thisItem});
    };
    onInputChangeDetail = (event) => {
        const thisItem = this.state.item;
        thisItem.detail = event.target.value;
        this.setState({item: thisItem});
    };
    onInputChangeImgUrl = (event) => {
        const thisItem = this.state.item;
        thisItem.imgUrl = event.target.value;
        this.setState({item: thisItem});
    };

    render() {
        return (
            <Paper style={{margin: 16, padding: 16}}>
                <div class="row">
                    <h2>&lt;키링 생성&gt;</h2>
                    <div style={{marginBottom: 5}}>
                        <TextField 
                            id="outlined-basic" label="title" variant="outlined" 
                        value={this.state.item.title}
                        onChange={this.onInputChangeTitle}
                        />
                    </div>
                    <div style={{marginBottom: 5}}>
                        <TextField id="outlined-basic" label="userId" variant="outlined" 
                        value={this.state.item.userId}
                        onChange={this.onInputChangeUserId}
                        />
                        </div>
                    <div style={{marginBottom: 5}}>
                        <TextField id="outlined-basic" label="detail" variant="outlined"
                        value={this.state.item.detail}
                        onChange={this.onInputChangeDetail}
                        />
                        </div>
                    <div style={{marginBottom: 5}}>
                        <TextField id="outlined-basic" label="imgUrl" variant="outlined" 
                        value={this.state.item.imgUrl}
                        onChange={this.onInputChangeImgUrl}
                        />
                        </div>
                 </div>

                 <Button onClick={this.onButtonClick} color="secondary" variant="contained">키링 생성</Button>
            </Paper>
        );
    }
}

export default AddKeyRing;