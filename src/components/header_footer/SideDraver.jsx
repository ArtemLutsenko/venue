import React from "react";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {scroller} from 'react-scroll'

const SideDraver = ({ open, onClose }) => {

    const scrolToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 500,
            smooth: true,
            offset: -150
        })
        onClose(false)
    }
        
    

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <List component="nav">
        <ListItem button onClick={() => scrolToElement('featured')}>
          Event starts in
        </ListItem>
        <ListItem button onClick={() => scrolToElement('venuenfo')}>
          Venue NFO
        </ListItem>
        <ListItem button onClick={() => scrolToElement('highlights')}>
          Highlights
        </ListItem>
        <ListItem button onClick={() => scrolToElement('pricing')}>
          Pricing
        </ListItem>
        <ListItem button onClick={() => scrolToElement('location')}>
          Location
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDraver;
