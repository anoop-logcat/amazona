import { Button, Grid, Switch } from "@mui/material";
import type { NextPage } from "next";
import { useContext } from "react";
import { CustomThemeContext } from "../components/CustomThemeProvider";
import MainLayout from "../components/MainLayout";

const Home: NextPage = () => {
  const { darkMode, toggleMode } = useContext(CustomThemeContext);
  return (
    <MainLayout>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Button variant="contained">Hello World</Button>
        </Grid>
        <Grid item xs={3}>
          <Switch
            checked={darkMode == "light" ? false : true}
            onClick={() => {
              toggleMode();
            }}
          />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Home;
