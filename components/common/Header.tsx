import { AppBar, Switch, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { useContext } from "react";
import { CustomThemeContext } from "../CustomThemeProvider";

type HeaderPropsType = {
  path: string[];
};
function Header({ path }: HeaderPropsType) {
  const { darkMode, toggleMode } = useContext(CustomThemeContext);
  let title: string = "Amazona";

  if (path) {
    path.map((element) => {
      title = title + ">" + element;
      return 1;
    });
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Link href={"/"} passHref>
          <Typography variant="h5">{title}</Typography>
        </Link>
        <div style={{ flexGrow: 1 }}></div>
        <Switch
          checked={darkMode == "light" ? false : true}
          onClick={() => {
            toggleMode();
          }}
        />
        <Link href={"/login"} passHref>
          <Typography style={{ marginRight: 15 }} component="a">
            Login
          </Typography>
        </Link>
        <Link href={"/cart"} passHref>
          <Typography component="a">Add to cart</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
