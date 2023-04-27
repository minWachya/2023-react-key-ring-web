import React from "react";
import { TextField, Paper, Button } from "@material-ui/core";

class ModifyKeyRing extends React.Component {
    render() {
        return (
            <Paper style={{margin: 16, padding: 16}}>
                <div class="row">
                    <h2>&lt;키링 수정&gt;</h2>
                    <div style={{marginBottom: 5}}><TextField id="outlined-basic" label="title" variant="outlined" /></div>
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