import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import MainLayout from "../components/MainLayout";
import data from "../db/data";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <>
        <Header path={["/"]} />
        <Typography variant="h4" my={5}>
          Products
        </Typography>
        <Grid container spacing={3} style={{ minHeight: "80vh" }}>
          {data.products.map((product) => (
            <Grid item md={4} key={product.name}>
              <Card>
                <Link href={`/product/${product.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      style={{ maxHeight: "75vh" }}
                      component="img"
                      image={product.image}
                      title={product.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{product.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Link>
                <CardActions>
                  <Typography>{product.price}</Typography>
                  <Button size="small" color="primary">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Footer />
      </>
    </MainLayout>
  );
};

export default Home;
