import {
    AppBar, Toolbar, Typography 
} from "@material-ui/core";

import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
      },
}));

function Footer() {

    const classes = useStyles();

    return(
        <div style={{marginBottom: 100}}>
            <React.Fragment>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="h10">Create by: Nal_Last and The_Lee</Typography>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        </div>
    );
} export default Footer;