import * as React from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { NavLink } from "react-router-dom";
import { SettingsOutlined } from "@mui/icons-material";
import { DashboardOutlined } from "@mui/icons-material";
import { ListItem } from "@mui/material";
import Mycontext from "../../Context/Mycontext";

export default function NestedList() {
  const context = React.useContext(Mycontext);

  const { domain } = context;

  const [open, setOpen] = React.useState(true);
  const styles = {
    color: "white",
    fontFamily: "Poppins",
    ".MuiListItemButton-root": {
      color: "white",
    },
    ".MuiList-root": {
      width: "100%",
      maxWidth: "360",
      borderRight: "3px solid white",
    },
    "	.MuiListItemText-primary": {
      fontFamily: "Poppins",
    },
    "	.MuiListItemText-primary:hover": {
      fontFamily: "Poppins",
      color: "#6D6DFC",
    },
  };
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List sx={styles} component="nav">
      <ListItemButton sx={styles}>
        <ListItem
          component={NavLink}
          to={{
            pathname: `/admin/${domain}`,
          }}
        >
          <ListItemIcon>
            <DashboardOutlined sx={styles} />
          </ListItemIcon>
          <ListItemText primary="DashBoard" sx={styles} />
        </ListItem>
      </ListItemButton>
      <ListItemButton>
        <ListItem component={NavLink} to="nft-settings">
          <ListItemIcon>
            <SendIcon sx={styles} />
          </ListItemIcon>
          <ListItemText primary="Nft Settings" sx={styles} />
        </ListItem>
      </ListItemButton>
      <ListItemButton>
        <ListItem component={NavLink} to="token-distribution">
          <ListItemIcon>
            <DraftsIcon sx={styles} />
          </ListItemIcon>
          <ListItemText primary="Token Distribution" sx={styles} />
        </ListItem>
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <SettingsOutlined sx={styles} />
        </ListItemIcon>
        <ListItemText primary="Site Settings" sx={styles} />
        {open ? <ExpandLess sx={styles} /> : <ExpandMore sx={styles} />}
      </ListItemButton>
      <Collapse sx={styles} in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItem component={NavLink} to="seo">
              <ListItemText primary="Seo" sx={styles} />
            </ListItem>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItem component={NavLink} to="admin">
              <ListItemText primary="Admin" sx={styles} />
            </ListItem>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItem component={NavLink} to="theme">
              <ListItemText primary="Theme" sx={styles} />
            </ListItem>
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItem component={NavLink} to="others">
              <ListItemText primary="Others" sx={styles} />
            </ListItem>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}
