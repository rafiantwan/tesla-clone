import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <div className="menu">
      <MenuItem title="Existing Inventory" />
      <MenuItem title="Used Inventory" />
      <MenuItem title="Trade-in" />
      <MenuItem title="Demo Drive" />
      <MenuItem title="Fleet" />
      <MenuItem title="Roadster" />
      <MenuItem title="Semi" />
      <MenuItem title="Commercial Energy" />
      <MenuItem title="Utilities" />
      <MenuItem title="Energy" />
      <MenuItem title="Charging" />
      <MenuItem title="Careers" />
      <MenuItem title="Find Us" />
      <MenuItem title="Support" />
      <MenuItem title="Investor Relations" />
      <MenuItem title="Iraq" />
    </div>
  );
}

export default Menu;
