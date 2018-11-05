import React from "react";
import Aux from "../../hoc/Aux";
import classes from "./Layout.css";

const layout = props => (
  <Aux>
    <div>
      Toolbar, SideDrawer, backdrop
      <main className={classes.Content}>{props.children}</main>
    </div>
  </Aux>
);

export default layout;
