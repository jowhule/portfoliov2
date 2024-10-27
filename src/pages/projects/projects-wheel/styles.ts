import { styled } from "@mui/material";
import { NUM_PROJECTS } from "./projects";

export const ProjectWheelBanner = styled("div")({
  width: "100%",
  height: "100vh",
  textAlign: "center",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
});

export const ProjectWheelSlider = styled("div")({
  position: "relative",
  width: `min(calc(100% / ${NUM_PROJECTS} + 50px), 400px)`,
  height: "min(calc(100vw / 3), 220px)",
  top: "-30%",
  transformStyle: "preserve-3d",
});

export const ProjectWheelItem = styled("div")({
  position: "absolute",
  inset: "0 0 0 0",
  userSelect: "none",
});
