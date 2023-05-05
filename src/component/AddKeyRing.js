import React from "react";
import { TextField, Paper, Button } from "@material-ui/core";

// 키링 생성 컴포넌트
class AddKeyRing extends React.Component {
    constructor(props) {
        super(props);
        // 생성할 아이템 정보 상태
        this.state = {item: {title: "", userId: "", detail: "", imgUrl: ""}};
        // App > Menu 로부터 받아온 생성 함수
        this.add = props.add;
    };

    // 생성 버튼 클릭
    onButtonClick = () => {
        this.add(this.state.item);      
        this.setState({item: {title: "", userId: "", detail: "", imgUrl: ""}}); // 초기화
    };

    // title, userId, detail, imgUrl TextField 관리
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
            <Paper style={{padding: 16}}>
                {/* 키링 정보 입력창 */}
                <div class="row">
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
                
                {/* 키링 생성 버튼 */}
                <Button onClick={this.onButtonClick} color="secondary" variant="contained">키링 생성</Button>
            </Paper>
        );
    }
}

export default AddKeyRing;