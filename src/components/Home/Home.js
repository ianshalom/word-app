import React from "react";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Image from "../../images/background-image.jpg";
import ImageSmall from "../../images/background-image-sm.jpg";

const useStyles = makeStyles((theme) => ({
  header: {
    fontFamily: "Nanum Gothic",
    fontSize: "150px",
    color: "#ffeadb",
    paddingTop: "150px",
  },
  root: {
    color: "#d2f5e3",
    fontSize: "2rem",
    backgroundImage: "cover",
  },
  paperContainer: {
    [theme.breakpoints.up("sm")]: {
      backgroundImage: `url(${Image})`,
      height: "100vh",
      backgroundSize: "cover",
    },
    backgroundImage: `url(${ImageSmall})`,
    backgroundSize: "contain",
    height: "100vh",
    // height: "300px",
    // width: "150px",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Paper className={classes.paperContainer}>
      <Typography className={classes.header}>Home</Typography>
      <h3 className={classes.root}>Find, learn, save, review.</h3>
    </Paper>
  );
}

export default Home;
