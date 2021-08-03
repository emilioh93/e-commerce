import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Product from "./Product";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Products() {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  console.log("products", products);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {products &&
          products.map((product) => {
            return (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                <Product
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  category={product.category}
                  description={product.description}
                  image={product.image}
                  price={product.price}
                />
              </Grid>
            );
          })}

        {/* <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product></Product>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product></Product>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product></Product>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product></Product>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product></Product>
        </Grid> */}
      </Grid>
    </div>
  );
}
