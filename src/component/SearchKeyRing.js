import React from "react";
import { TextField, Paper, Button, Grid, ListItem, List, ListItemText, styled } from "@material-ui/core";

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  }));

class SearchKeyRing extends React.Component {
    render() {
        return (
            <Paper style={{margin: 16, padding: 16}}>
                <div class="row">
                    <h2>&lt;키링 검색&gt;</h2>
                    <div style={{marginBottom: 5}}><TextField id="outlined-basic" label="title" variant="outlined" /></div>
                 </div>

                 <Button color="secondary" variant="contained">키링 생성</Button>

                 <Grid container>
                    <Grid item xs={12} md={6}>
                    <Demo>
                        <List>
                            <ListItem>
                                <ListItemText primary="title"/>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="userId"/>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="detail"/>
                            </ListItem>
                        </List>
                        <List>
                            <ListItem>
                                <ListItemText primary="imgUrl"/>
                            </ListItem>
                        </List>
                    </Demo>
                    </Grid>
                </Grid>


            </Paper>
        );
    }
}

export default SearchKeyRing;