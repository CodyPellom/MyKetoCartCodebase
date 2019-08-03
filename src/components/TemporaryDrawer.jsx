import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardRounded from '@material-ui/icons/DashboardRounded';
import Store from '@material-ui/icons/Store';
import Favorite from '@material-ui/icons/Favorite';
import Help from '@material-ui/icons/Help';
import Games from '@material-ui/icons/Games';
import Language from '@material-ui/icons/Language';
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },

});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        
          <ListItem>
            <ListItemIcon><DashboardRounded /></ListItemIcon>
            <ListItemText><a href="../App.js" className="link">About</a></ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon><Favorite /></ListItemIcon>
            <ListItemText><a href="../App.js" className="link">Keto Food</a></ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon><Store /></ListItemIcon>
            <ListItemText><a href="../App.js" className="link">Keto Store</a></ListItemText>
          </ListItem>


          <ListItem>
            <ListItemIcon><Games /></ListItemIcon>
            <ListItemText><a href="../App.js" className="link">Keto Tech</a></ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon><Help /></ListItemIcon>
            <ListItemText><a href="../App.js" className="link">Help</a></ListItemText>
          </ListItem>




        
      </List>
      
    </div>
  );


  return (
    <div>  
      <Language onClick={toggleDrawer('left', true)} id="MenuIcon"></Language>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}