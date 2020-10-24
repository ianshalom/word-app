import React from "react";
import NavigationItems from "../Navigation/NavigationItems";

function Layout(props) {
  return (
    <React.Fragment>
      <NavigationItems />
      <main>{props.children}</main>
    </React.Fragment>
  );
}

export default Layout;
