import React from "react";
import { TextField, Paper, Button } from "@material-ui/core";

class AddKeyRing extends React.Component {
    render() {
        return (
            <Paper style={{margin: 16, padding: 16}}>
                <div class="row">
                    <h2>&lt;키링 생성&gt;</h2>
                    <div style={{marginBottom: 5}}><TextField id="outlined-basic" label="title" variant="outlined" /></div>
                    <div style={{marginBottom: 5}}><TextField id="outlined-basic" label="userId" variant="outlined" /></div>
                    <div style={{marginBottom: 5}}><TextField id="outlined-basic" label="detail" variant="outlined" /></div>
                    <div style={{marginBottom: 5}}><TextField id="outlined-basic" label="imgUrl" variant="outlined" /></div>
                 </div>

                 <Button color="secondary" variant="contained">키링 생성</Button>
            </Paper>
        );
    }
}

export default AddKeyRing;