import React from "react";
import { TextField, Paper, Button, ListItem, List, ListItemText } from "@material-ui/core";

class SearchKeyRing extends React.Component {
    render() {
        return (
            <Paper style={{margin: 16, padding: 16}}>
                <div class="row">
                    <h2>&lt;키링 검색&gt;</h2>
                    <div style={{marginBottom: 5}}><TextField id="outlined-basic" label="title" variant="outlined" /></div>
                 </div>

                 <Button color="secondary" variant="contained">키링 검색</Button>
                 
                 <div style={{margin: 16, padding: 16}} class="row">
                    <h5>-검색 결과-</h5>
                    <div>
                        <List>
                            <ListItem>
                                <ListItemText primary="title" style={{textAlign: "center"}}/>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="userId" style={{textAlign: "center"}}/>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="detail" style={{textAlign: "center"}}/>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="imgUrl" style={{textAlign: "center"}}/>
                            </ListItem>
                        </List>
                    </div>
                </div>
            </Paper>
        );
    }
}

export default SearchKeyRing;