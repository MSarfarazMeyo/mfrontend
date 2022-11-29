import { makeStyles } from "@material-ui/core";
import { blue, blueGrey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => {
  console.log(theme.breakpoints);
  return {
    //common

    //header
    wrapper: {
      width: "100%",
      minHeight: "100vh",
      height: "auto",
      background: "linear-gradient(68.46deg, #1B194B 25.89%, #312677 72.06%)",
      boxSizing: "border-box",

      padding: "70px 24px 24px 270px",
      [theme.breakpoints.down("sm")]: {
        padding: "70px 24px 24px 24px",
      },
    },
    logo: {
      lineHeight: "47px",
      color: "inherit",
    },

    // navbar styles

    toolbar: {
      display: "flex",
      borderBottom: "2px solid #4E39D7",
      justifyContent: "space-between",
      background: "#1B194B",
    },
    brandBox: {
      display: "flex",
      flexFlow: "row wrap",
    },
    dropdownlist: {
      maxWidth: "250px",
    },
    listItem: {
      textTransform: "capitalize",
    },

    //sidenav
    drawerPaper: {
      width: "250px",
      marginTop: "64px",
      borderRight: "2px solid #4E39D7  !important",
      borderTop: "2px solid #4E39D7  !important",
      background: "linear-gradient(68.46deg, #1B194B 25.89%, #312677 72.06%)",
      [theme.breakpoints.down("sm")]: {
        marginTop: "0px",
      },
    },

    navlink: {
      color: blueGrey[700],
      transition: "0.8s",
      "&:hover  div": {
        color: blue["A400"],
      },
    },
    navButton: { width: "100%", textTransform: "capitalize" },
    selectedNav: {
      color: `${blue[800]} !important`,
      fontWeight: " bolder",
      " & div": {
        color: `${blue[800]} !important`,
      },
    },
  };
});
