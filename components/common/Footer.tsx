import { Grid, Typography } from "@mui/material";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="80px"
    >
      <Typography variant="h6">{"Copyright @Amazona " + date}</Typography>
    </Grid>
  );
}

export default Footer;
