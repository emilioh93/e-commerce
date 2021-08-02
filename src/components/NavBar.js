import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import logo from "../assets/logo.webp";
import { ShoppingCart } from "@material-ui/icons";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  appBar: {
    backgroundColor: "#20A4F3",
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
    marginRight: "10px",
    height: "2rem",
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img src={logo} alt="Logo" className={classes.image} />
          </IconButton>
          <div className={classes.grow} />
          <Typography variant="h6" component="p">
            Hello Guest
          </Typography>
          <div className={classes.button}>
            <Button variant="outlined" color="inherit">
              <strong>Sign In</strong>
            </Button>
            <IconButton aria-label="show cart item" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCart fontSize="large" />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
