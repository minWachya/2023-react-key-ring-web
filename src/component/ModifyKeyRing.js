import React from "react";
import { TextField, Paper, Button } from "@material-ui/core";
import { call } from "../service/ApiService";

class ModifyKeyRing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: {title: ""}, searchItem: {title: "", userId: "", detail: "", imgUrl: ""}};
    };

    // 키링 검색
    search = (item) => {
        call("/keyring/search", "POST", item).then((response) => 
        this.setState({searchItem: response.data[0]})
        );
        console.log(this.state.searchItem)
    };

    onInputChangeTitle = (event) => {
        const thisItem = this.state.item;
        thisItem.title = event.target.value;
        this.setState({item: thisItem});
    };

    onButtonClick = () => {
        this.search(this.state.item); 
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
                 <Button onClick={this.onButtonClick} color="secondary" variant="contained">키링 검색</Button>

                <div style={{margin: 16, padding: 16}}>
                    <div class="row">
                        <h5>-검색 결과-</h5>
                        <div style={{marginBottom: 5}}><TextField id="outlined-basic" label="title" variant="outlined" value={this.state.searchItem.title}/></div>
                        <div style={{marginBottom: 5}}><TextField id="outlined-basic" label="userId" variant="outlined" value={this.state.searchItem.userId}/></div>
                        <div style={{marginBottom: 5}}><TextField id="outlined-basic" label="detail" variant="outlined" value={this.state.searchItem.detail}/></div>
                        <div style={{marginBottom: 5}}><TextField id="outlined-basic" label="imgUrl" variant="outlined" value={this.state.searchItem.imgUrl}/></div>
                    </div>
                    <Button color="secondary" variant="contained">키링 수정</Button>
                </div>
            </Paper>
        );
    }
}

export default ModifyKeyRing;