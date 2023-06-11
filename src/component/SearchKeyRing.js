import React from "react";
import { Button, ListItem, List, ListItemText } from "@material-ui/core";
import { call } from "../service/ApiService";
import { InputTextField } from "../ui/InputTextField";

// 키링 검색 컴포넌트
class SearchKeyRing extends React.Component {
    constructor(props) {
        super(props);
        // 검색할 키링 제목과
        // 검색된 키링 정보 상태
        this.state = {item: {title: ""}, searchItem: {title: "title", userId: "userId", detail: "detail", imgUrl: "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg"}};
    };

    // 키링 검색 함수
    search = (item) => {
        call("/keyring/search", "POST", item).then((response) => 
        this.setState({searchItem: response.data[0]})
        );
    };

    // 검색할 키링 title textField vaule 관리
    onInputChangeTitle = (event) => {
        const thisItem = this.state.item;
        thisItem.title = event.target.value;
        this.setState({item: thisItem});
    };

    // 키링 검색 버튼 함수
    onButtonClick = () => {
        this.search(this.state.item); 
    };

    render() {
        const searchItem = this.state.searchItem;

        return (
            <div style={{padding: 8}} className="App">
                {/* 검색할 키링 title TextField */}
                <div className="row">
                    <div style={{marginBottom: 5}}>
                        <InputTextField id="outlined-basic" label="title" variant="outlined"
                            value={this.state.item.title}
                            onChange={this.onInputChangeTitle}
                        />
                        </div>
                 </div>
                {/* 키링 검색 버튼 */}
                <Button onClick={this.onButtonClick} style={{ backgroundColor: "#ff8849" }} color="secondary" variant="contained">키링 검색</Button>
                 
                {/* 키링 검색 결과 */}
                <div style={{padding: 8}} className="row">
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
                            <ListItemText style={{textAlign: "center"}}>
                            <img 
                                    src={searchItem.imgUrl} 
                                    alt={searchItem.title + '의 이미지'} 
                                    width="100" 
                                    height="100"
                                    />
                            </ListItemText>
                            </ListItem>
                        </List>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchKeyRing;