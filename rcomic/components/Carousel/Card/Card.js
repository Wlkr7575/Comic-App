import React from 'react'
import {Paper} from '@material-ui/core'
import {Card,CardMedia,CardContent,Typography} from '@material-ui/core'
const itemCard = ({img,title}) => {
    return ( 
        <Card>
            <CardMedia>
            <img src={img} alt={title} />
            </CardMedia>
            <CardContent>
                <Typography>
                {title}
                </Typography>
            </CardContent>
        </Card>
     );
}
 
export default itemCard;