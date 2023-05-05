import React from "react";
import {ListItem, ListItemText} from "@material-ui/core";

// 키링 데이터 모델
class KeyRing extends React.Component {
    constructor(props) {
        super(props);
        // 키링 아이템 정보 상태
        this.state = {item: props.item};
    }; 

    render() {
        const item = this.props.item;

        return (
            // 키링 img, title, detail, userId를 MUI 사용하여 출력
            <ListItem>
                    <img 
                    src={item.imgUrl} 
                    alt={item.title} 
                    width="100" 
                    height="100"
                    style={{marginRight: 15}}
                    />
                <ListItemText>
                    <b>{item.title}</b>    
                </ListItemText>
                <ListItemText>
                    {item.detail}
                </ListItemText>
                <ListItemText style={{marginTop:10}}>{item.userId}</ListItemText>
            </ListItem>
        );
    }
}

export default KeyRing;