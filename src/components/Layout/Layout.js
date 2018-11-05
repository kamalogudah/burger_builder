import React from "react";
import Aux from "../../hoc/Aux";

const layout = props => (
  <Aux>
    <div>
      Toolbar, SideDrawer, backdrop
      <main>{props.children}</main>
    </div>
  </Aux>
);

export default layout;
