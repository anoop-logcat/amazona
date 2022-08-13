import { Button, Card, Grid, List, ListItem, Typography } from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import MainLayout from "../../components/MainLayout";
import data from "../../db/data";

const EachProduct: NextPage = () => {
  const route = useRouter();
  const { id } = route.query;
  const product = data.products.find((a) => a.slug === id);
  if (!product) {
    return (
      <>
        <Typography>Product not found</Typography>
      </>
    );
  } else {
    return (
      <MainLayout>
        <div>
          <Header path={["products", product.name]} />
          <div style={{ minHeight: "80vh", margin: "10px" }}>
            <Link href="/" passHref>
              <Typography component="a" style={{ fontWeight: "Bold" }} href="/">
                Home
              </Typography>
            </Link>
            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={640}
                  height={640}
                  layout="responsive"
                ></Image>
              </Grid>
              <Grid item md={3} xs={12}>
                <List>
                  <ListItem>
                    <Typography
                      component={"h1"}
                      variant="h1"
                      style={{ fontWeight: "bold" }}
                    >
                      {product.name}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography style={{ fontWeight: "bold" }}>
                      Category:{product.category}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography style={{ fontWeight: "bold" }}>
                      Brand:{product.brand}
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography style={{ fontWeight: "bold" }}>
                      Rating:{product.rating} stars from {product.numOfReviews}{" "}
                      reviews
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <Typography style={{ fontWeight: "bold" }}>
                      Description:{product.description}
                    </Typography>
                  </ListItem>
                </List>
              </Grid>
              <Grid item md={3} xs={12}>
                <Card>
                  <List>
                    <ListItem>
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <Typography>Price: </Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>{product.price}</Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem>
                      <Grid container spacing={3}>
                        <Grid item xs={6}>
                          <Typography>Status:</Typography>
                        </Grid>
                        <Grid item xs={6}>
                          <Typography>
                            {product.countInStock > 0
                              ? "In stock"
                              : "Out of stock"}
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                    <ListItem>
                      <Button fullWidth variant="contained" color="primary">
                        Add to cart
                      </Button>
                    </ListItem>
                  </List>
                </Card>
              </Grid>
            </Grid>
          </div>
          <Footer />
        </div>
      </MainLayout>
    );
  }
};

export default EachProduct;
