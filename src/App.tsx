import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import Projects from "./pages/projects";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./utils/theme";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box my={10}>
        <Outlet />
      </Box>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
