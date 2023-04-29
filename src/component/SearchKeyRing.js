import React from "react";
import { TextField, Paper, Button, ListItem, List, ListItemText } from "@material-ui/core";
import { call } from "../service/ApiService";

class SearchKeyRing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {item: {title: ""}, searchItem: {title: "dd", userId: "ddd", detail: "df", imgUrl: "df"}};
    };

    // 키링 검색
    search = (item) => {
        call("/keyring/search", "POST", item).then((response) => 
        this.setState({searchItem: response.data[0]})
        );
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
        const searchItem = this.state.searchItem;

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
                 
                 <div style={{margin: 16, padding: 16}} class="row">
                    <h5>-검색 결과-</h5>
                    <div>
                        <List>
                            <ListItem>
                                <ListItemText primary={searchItem.title} style={{textAlign: "center"}}/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={searchItem.userId} style={{textAlign: "center"}}/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={searchItem.detail} style={{textAlign: "center"}}/>
                            </ListItem>
                            <ListItem>
                                <ListItemText primary={searchItem.imgUrl} style={{textAlign: "center"}}/>
                            </ListItem>
                        </List>
                    </div>
                </div>
            </Paper>
        );
    }
}

export default SearchKeyRing;