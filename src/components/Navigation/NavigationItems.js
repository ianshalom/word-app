import React from "react";
import { Link } from "react-router-dom";
import "./NavigationItems.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    fontSize: "30px",
    padding: "10px",
  },
  navStyles: {
    fontFamily: "Nanum Gothic",
    fontWeight: "bold",
  },
  color: {
    color: "#c060a1",
  },
});
function NavigationItems() {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <nav>
        <ul className={classes.navStyles}>
          <li>
            <Link to="/" className={classes.color}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/find-words" className={classes.color}>
              Find Words
            </Link>
          </li>
          <li>
            <Link to="/my-words" className={classes.color}>
              My Words
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationItems;
