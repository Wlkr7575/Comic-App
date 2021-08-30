import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar,Toolbar,Typography,Button,IconButton,SwipeableDrawer,List,ListItem,ListItemIcon,ListItemText,Divider} from '@material-ui/core'
import {Menu,Inbox,Mail} from '@material-ui/icons'
import {Link} from 'next/link'
import useStyles from './style'
import Drawer from './Drawer';
function Navbar ()  {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
    return ( 
      <div className={classes.root}>
        <AppBar position="static">
  <Toolbar>
    <Drawer/>
    <Typography variant="h6" component={Link} href="/" className={classes.title}>
      RComic
    </Typography>
    <Button color="inherit" component={Link} href="/login">Login</Button>
  </Toolbar>
</AppBar>
    </div>
     );
}
 
export default Navbar