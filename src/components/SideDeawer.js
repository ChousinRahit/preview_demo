import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    paddingTop: 64,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function SideDrawe() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [openAbout, setOpenAbout] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClickAbout = () => {
    setOpenAbout(!openAbout);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {/*   */}
      <ListItem button onClick={handleClickAbout}>
        <ListItemIcon>
          <StarBorder />
        </ListItemIcon>
        <ListItemText primary="About US" />
        {openAbout ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openAbout} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="About Etihad WE" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Chairman's Message" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Director General Message" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Board of Directors" />
          </ListItem>
        </List>
      </Collapse>

      {/*   */}
      {/*   */}
      <ListItem button onClick={handleClickAbout}>
        <ListItemIcon>
          <StarBorder />
        </ListItemIcon>
        <ListItemText primary="Regulations" />
        {openAbout ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openAbout} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Electric Vehicle Regulations" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Smart Water Meter Installation" />
          </ListItem>
        </List>
      </Collapse>

      {/*   */}

      <ListItem button>
        <ListItemIcon>
          <StarBorder />
        </ListItemIcon>
        <ListItemText primary="Services" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <StarBorder />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
