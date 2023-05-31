import React from "react";
import {Grid, Typography} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';

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
            <Grid item xs={12} sm={4} md={2}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                    component="div"
                    sx={{
                        // 16:9
                        pt: '56.25%',
                    }}
                    image={item.imgUrl}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h3">{item.title}</Typography>
                        <Divider sx={{ my: 1 }} />
                        <Typography>{item.detail}</Typography>
                        <Typography>{item.userId}</Typography>
                    </CardContent>
                </Card>
        </Grid>
        );
    }
}

export default KeyRing;