import { keyframes, SxProps, Theme } from "@mui/material";
import { NUM_PROJECTS } from "./projects";

export const spin = keyframes`
  from {
    transform: perspective(1000px) rotateX(-15deg) rotateY(0deg)
  } to {
    transform: perspective(1000px) rotateX(-15deg) rotateY(360deg)
  }
`;

export const bannerStyle: SxProps<Theme> = {
  width: "100%",
  height: "100vh",
  textAlign: "center",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
};

export const sliderStyle: SxProps<Theme> = {
  position: "relative",
  width: `min(calc(100% / ${NUM_PROJECTS} + 50px), 400px)`,
  height: "min(calc(100vw / 3), 220px)",
  top: "-30%",
  transformStyle: "preserve-3d",
  transform: "perspective(1000px)",
  animation: `${spin} 20s linear infinite`,
};

export const itemStyle = (position: number): SxProps<Theme> => {
  return {
    position: "absolute",
    inset: "0 0 0 0",
    transform: `rotateY(calc( ${position} * (360deg / ${NUM_PROJECTS}))) translateZ(clamp(100px, 35vw, 550px))`,
  };
};

export const itemImageStyle: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "10px",
};

export const defaultitemImageSytle: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  bgcolor: "primary.main",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
};
