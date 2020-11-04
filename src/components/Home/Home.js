import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  fontFamily: {
    fontFamily: "Nanum Gothic",
  },
  root: {
    color: "#070d59",
    fontSize: "2rem",
  },
});

function Home() {
  const classes = useStyles();
  return (
    <div>
      <Typography className={classes.fontFamily} variant="h3" color="primary">
        Home
      </Typography>
      <h3 className={classes.root}>Find, learn, save, review.</h3>
    </div>
  );
}

export default Home;
