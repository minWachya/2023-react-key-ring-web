import React from "react";
import { TextField, Button } from "@material-ui/core";
import { call } from "../service/ApiService";

// 키링 수정 컴포넌트
class ModifyKeyRing extends React.Component {
    constructor(props) {
        super(props);
        // 수정할 키링 정보 상태
        this.state = {item: {title: ""}, searchItem: {title: "", userId: "", detail: "", imgUrl: ""}};
        // App > Menu 로부터 받아온 수정 함수
        this.modify = props.modify;
    };

    // 키링 검색
    search = (item) => {
        call("/keyring/search", "POST", item).then((response) => 
            this.setState({searchItem: response.data[0]})
        );
    };

    // 수정할 키링 검색을 위한 title textField value 관리 함수 
    onInputChangeTitle = (event) => {
        const thisItem = this.state.item;
        thisItem.title = event.target.value;
        this.setState({item: thisItem});
    };
    // 수정할 키링 정보 작성을 위한 title, detail, userId, imgUrl textField value 함수 관리
    onInputChangeModTitle = (event) => {
        const thisItem = this.state.searchItem;
        thisItem.title = event.target.value;
        this.setState({searchItem: thisItem});
    };
    onInputChangeModDetail = (event) => {
        const thisItem = this.state.searchItem;
        thisItem.detail = event.target.value;
        this.setState({searchItem: thisItem});
    };
    onInputChangeModUserId = (event) => {
        const thisItem = this.state.searchItem;
        thisItem.userId = event.target.value;
        this.setState({searchItem: thisItem});
    };
    onInputChangeModImgUrl = (event) => {
        const thisItem = this.state.searchItem;
        thisItem.imgUrl = event.target.value;
        this.setState({searchItem: thisItem});
    };

    // 수정할 키링 검색 버튼 함수
    onSearchButtonClick = () => {
        this.search(this.state.item); 
    };

    // 키링 수정 버튼 함수
    onModifyButtonClick = () => {
        this.modify(this.state.searchItem); 
        this.setState({item: {title: ""}, searchItem: {title: "", userId: "", detail: "", imgUrl: ""}}); 
    };

    render() {
        return (
            <div style={{margin: 16, padding: 16}} className="App">
                {/* 수정할 키링 title textField */}
                <div class="row">
                    <div style={{marginBottom: 5}}>
                        <TextField id="outlined-basic" label="title" variant="outlined" 
                            value={this.state.item.title}
                            onChange={this.onInputChangeTitle}
                        />
                        </div>
                 </div>
                 {/* 키링 검색 버튼 */}
                 <Button onClick={this.onSearchButtonClick} color="secondary" variant="contained">키링 검색</Button>

                {/* 키링 수정 정보 textField */}
                <div style={{margin: 16, padding: 16}}>
                    <div class="row">
                        <h5>-검색 결과-</h5>
                        <div style={{marginBottom: 5}}>
                            <TextField id="outlined-basic" label="title" variant="outlined" 
                            value={this.state.searchItem.title}
                            onChange={this.onInputChangeModTitle}/>
                        </div>
                        <div style={{marginBottom: 5}}>
                            <TextField id="outlined-basic" label="userId" variant="outlined" 
                            value={this.state.searchItem.userId}
                            onChange={this.onInputChangeModUserId}/>
                        </div>
                        <div style={{marginBottom: 5}}>
                            <TextField id="outlined-basic" label="detail" variant="outlined" 
                            value={this.state.searchItem.detail}
                            onChange={this.onInputChangeModDetail}/>
                        </div>
                        <div style={{marginBottom: 5}}>
                            <TextField id="outlined-basic" label="imgUrl" variant="outlined" 
                            value={this.state.searchItem.imgUrl}
                            onChange={this.onInputChangeModImgUrl}/>
                        </div>
                    </div>
                    {/* 키링 수정 버튼 */}
                    <Button onClick={this.onModifyButtonClick} color="secondary" variant="contained">키링 수정</Button>
                </div>
            </div>
        );
    }
}

export default ModifyKeyRing;