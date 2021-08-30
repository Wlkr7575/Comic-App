import {SwipeableDrawer,IconButton,List,ListItem,ListItemIcon,ListItemText,Divider, makeStyles}from '@material-ui/core'
import {Menu,Inbox,Mail} from '@material-ui/icons'
import { useState } from 'react';
import {Link} from 'next/link'
import useStyles from './style';
import itemDrawer from './Draweritem';
const Drawer = () => {
    const [open,setOpen] = useState(false)
    const classes = useStyles()
    return ( 
        <div>
            <IconButton edge="start" color="inherit" aria-label="open drawer" onClick={()=>setOpen(true)}>
                <Menu />
            </IconButton>
            <SwipeableDrawer anchor="left" open={open} onClose={()=>setOpen(false)} onOpen={()=>(false)}>
              <div>
              <List className={classes.list}>
        {itemDrawer.map((text, index) => (
          <ListItem button key={text.title} component={Link} href={text.to}>
            <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
            <ListItemText primary={text.title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
              </div>
            </SwipeableDrawer>
        </div>
     );
}
 
export default Drawer;