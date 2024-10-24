import {
  AppBar,
  Toolbar,
  Typography,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import { useTheme, Theme } from "@mui/material/styles";
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement<unknown>;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

export default function HideAppBar(props: Props) {
  const theme: Theme = useTheme();
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: `${theme.palette.background.paper}99`,
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5.9px)",
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div">
              Scroll to hide App bar
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
}
