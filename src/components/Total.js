import React from "react";
import accounting from "accounting";
import { makeStyles } from "@material-ui/core";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
  },
  link: {
    marginTop: "2rem",
    textDecoration: "none",
    fontSize: "25px",
    backgroundColor: "#d81b60",
    borderRadius: "28px",
    border: "1px solid #ec407a",
    cursor: "pointer",
    display: "inline-block",
    padding: "16px 31px",
    color: "#fff"
  },
}));

const Total = () => {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className={classes.root}>
      <h5>Total items: {basket?.length}</h5>
      <h5>{accounting.formatMoney(getBasketTotal(basket))}</h5>
      <Link
        to="/checkout-payment"
        className={classes.link}
        variant="contained"
        color="secondary"
      >
        Check Out
      </Link>
    </div>
  );
};

export default Total;
