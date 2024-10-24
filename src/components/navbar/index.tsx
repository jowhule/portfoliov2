import { AppBar, Slide, Toolbar, Typography } from "@mui/material";

interface NavbarProps {
  children?: React.ReactElement<unknown>;
}

const pages = ["Products", "Pricing", "Blog"];

function HideOnScroll(props: NavbarProps) {
  const { children } = props;

  return (
    <Slide appear={false} direction="down">
      {children ?? <div />}
    </Slide>
  );
}

const Navbar: React.FC = (props: NavbarProps) => {
  return (
    <HideOnScroll {...props}>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" component="div">
            Scroll to hide App bar
          </Typography>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Navbar;
