import React from "react";
import { TextField, Paper, Button } from "@material-ui/core";
import { call } from "../service/ApiService";

class DeleteKeyRing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: {title: ""}};
        this.delete = props.delete;
    };

    // 키링 검색 후 삭제
    search = (item) => {
        console.log(item);
        call("/keyring/search", "POST", item).then((response) => 
        this.delete(response.data[0])
        );
    };

    onInputChangeTitle = (event) => {
        const thisItem = this.state.item;
        thisItem.title = event.target.value;
        this.setState({item: thisItem});
    };

    onButtonClick = () => {
        this.search(this.state.item); 
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

                 <Button onClick={this.onButtonClick} color="secondary" variant="contained">키링 삭제</Button>
            </Paper>
        );
    }
}

export default DeleteKeyRing;