import { CssBaseline } from "@mui/material";
import Head from "next/head";

type MainLayoutPropsType = {
  children: JSX.Element;
  title?: string;
  description?: string;
  thumbnailImage?: string;
  url?: string;
};

function MainLayout({
  children,
  title = "MUI - Dark Mode",
  description = "A tutorial for dark mode in MUI.",
  thumbnailImage = "/vercel.svg",
  url = "http://localhost:3000",
}: MainLayoutPropsType) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MUI - Dark Mode" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={thumbnailImage} />
        <meta property="og:url" content={url} />
      </Head>
      <main>
        <CssBaseline />
        {children}
      </main>
    </>
  );
}

export default MainLayout;
