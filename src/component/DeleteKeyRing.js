import React from "react";
import { Button } from "@material-ui/core";
import { call } from "../service/ApiService";
import { InputTextField } from "../ui/InputTextField";

// 키링 삭제 컴포넌트
class DeleteKeyRing extends React.Component {
    constructor(props) {
        super(props);
        // 삭제할 아이템 title 상태
        this.state = {item: {title: ""}};
        // App > Menu 로부터 받아온 삭제 함수
        this.delete = props.delete;
    };

    // 키링 검색 후 삭제하는 함수
    search = (item) => {
        // 검색
        call("/keyring/search", "POST", item).then((response) => {
            if(response.data.length !== 0)
                this.delete(response.data[0])
            else alert('해당 키링이 없습니다!');
        }
        );
    };

    // 삭제할 키링 title textField value 관리 함수
    onInputChangeTitle = (event) => {
        const thisItem = this.state.item;
        thisItem.title = event.target.value;
        this.setState({item: thisItem});
    };

    // 삭제 버튼 클릭 함수
    onButtonClick = () => {
        this.search(this.state.item); 
        this.setState({item: {title: ""}}); 
    };

    render() {
        return (
            <div style={{padding: 8}} className="App">
                {/* 삭제할 키링 title 입력 textField */}
                <div className="row">
                    <div style={{marginBottom: 5}}>
                        <InputTextField id="outlined-basic" label="title" variant="outlined" 
                            value={this.state.item.title}
                            onChange={this.onInputChangeTitle}
                        />
                        </div>
                 </div>
                
                {/* 키링 삭제 버튼 */}
                <Button onClick={this.onButtonClick} style={{ backgroundColor: "#ff8849"}} color="secondary" variant="contained">키링 삭제</Button>
            </div>
        );
    }
}

export default DeleteKeyRing;