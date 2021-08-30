import React from 'react'
import {ImageList,ImageListItem,ImageListItemBar,IconButton} from '@material-ui/core'
import {StarBorder}from '@material-ui/icons'
import itemData from './itemData'
import useStyles  from './style'
const CardSlider = () => {
    const classes = useStyles()
    return ( 
        <div className={classes.root}>
            <ImageList className={classes.imageList} cols={4.1} rowHeight={150}>
                {itemData.map(item => (
                    <ImageListItem key={item.title} sx>
                        <img src={item.img} alt={item.title} />
                        <ImageListItemBar title={ item.title } classes={{root:classes.titleBar,title:classes.title}} actionIcon={<IconButton aria-label={`star ${item.title}`}><StarBorder className={classes.title}></StarBorder></IconButton>}>
                        </ImageListItemBar>
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
     );
}
 
export default CardSlider;