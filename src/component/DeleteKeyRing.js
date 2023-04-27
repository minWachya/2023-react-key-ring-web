import React from "react";
import { TextField, Paper, Button } from "@material-ui/core";

class DeleteKeyRing extends React.Component {
    render() {
        return (
            <Paper style={{margin: 16, padding: 16}}>
                <div class="row">
                    <h2>&lt;키링 삭제&gt;</h2>
                    <div style={{marginBottom: 5}}><TextField id="outlined-basic" label="title" variant="outlined" /></div>
                 </div>

                 <Button color="secondary" variant="contained">키링 삭제</Button>
            </Paper>
        );
    }
}

export default DeleteKeyRing;