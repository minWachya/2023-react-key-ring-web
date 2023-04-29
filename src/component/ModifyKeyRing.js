import React from "react";
import { TextField, Paper, Button } from "@material-ui/core";

class ModifyKeyRing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: {title: ""}, searchItem: props.searchItem};
        this.search = props.search;
    };

    onInputChangeTitle = (event) => {
        const thisItem = this.state.item;
        thisItem.title = event.target.value;
        this.setState({item: thisItem});
    };

    onButtonClick = () => {
        this.search(this.state.item.title);      
        this.setState({item: {title: ""}}); 
    };

    render() {
        return (
            <Paper style={{margin: 16, padding: 16}}>
                <div class="row">
                    <div style={{marginBottom: 5}}>
                        <TextField id="outlined-basic" label="title" variant="outlined" 
                            value={this.state.item.title}
                            onChange={this.onInputChangeTitle}
                        />
                        </div>
                 </div>
                 <Button color="secondary" variant="contained">키링 검색</Button>

                <div style={{margin: 16, padding: 16}}>
                    <div class="row">
                        <h5>-검색 결과-</h5>
                        <div style={{marginBottom: 5}}><TextField id="outlined-basic" label="title" variant="outlined" /></div>
                        <div style={{marginBottom: 5}}><TextField id="outlined-basic" label="userId" variant="outlined" /></div>
                        <div style={{marginBottom: 5}}><TextField id="outlined-basic" label="detail" variant="outlined" /></div>
                        <div style={{marginBottom: 5}}><TextField id="outlined-basic" label="imgUrl" variant="outlined" /></div>
                    </div>
                    <Button color="secondary" variant="contained">키링 수정</Button>
                </div>
            </Paper>
        );
    }
}

export default ModifyKeyRing;