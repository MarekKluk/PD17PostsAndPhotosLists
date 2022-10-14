import React from "react";
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';


export function PostTile({ postToDisplay }) {

    return (
        <List component="div" disablePadding >
            <ListItem  >
                <ListItemText
                    primary={postToDisplay.title}
                    secondary={postToDisplay.body} />
            </ListItem>
        </List>
    );
}
