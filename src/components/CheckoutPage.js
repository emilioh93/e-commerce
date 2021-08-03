import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import CheckoutCard from "./CheckoutCard";
import Total from "./Total";
import { useStateValue } from "../StateProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "2rem",
  },
}));

const CheckoutPage = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);
  const [{ basket }, dispatch] = useStateValue();

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  useEffect(() => {
    FormRow();
  }, []);

  function FormRow() {
    return (
      <React.Fragment>
        {basket?.map((item) => {
          return (
            <Grid key={item.id} item xs={12} sm={8} md={6} lg={4}>
              <CheckoutCard
                key={item.id}
                id={item.id}
                title={item.title}
                category={item.category}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            </Grid>
          );
        })}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid items xs={12}>
          <Typography align="center" gutterBottom variant="h4">
            ShoppingCart
          </Typography>
        </Grid>
        <Grid items xs={12} sm={8} md={9} container spacing={2}>
          <FormRow></FormRow>
        </Grid>
        <Grid items xs={12} sm={4} md={3}>
          <Typography align="center" gutterBottom variant="h4">
            <Total></Total>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default CheckoutPage;
