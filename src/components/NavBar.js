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
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { actionTypes } from "../reducer";

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
  link: {
    color: "#fff",
    textDecoration: "none",
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [{ basket, user }, dispatch] = useStateValue();
  let history = useHistory();

  const handleOut = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      history.push("/");
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Link to="/">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <img src={logo} alt="Logo" className={classes.image} />
            </IconButton>
          </Link>
          <div className={classes.grow} />
          <Typography variant="h6" component="p">
            Hello {user ? user.email : "Guest"}
          </Typography>
          <div className={classes.button}>
            <Link to="/signin" className={classes.link}>
              <Button variant="outlined" color="inherit" onClick={handleOut}>
                <strong>{user ? "Sign Out" : "Sign In"}</strong>
              </Button>
            </Link>
            <Link to="/checkout" className={classes.link}>
              <IconButton aria-label="show cart item" color="inherit">
                <Badge badgeContent={basket?.length} color="secondary">
                  <ShoppingCart fontSize="large" />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
