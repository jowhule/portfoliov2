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
  position: "relative",
};

export const sliderStyle: SxProps<Theme> = {
  position: "absolute",
  width: "200px",
  height: "250px",
  top: "10%",
  left: "calc(50% - 100px)",
  transformStyle: "preserve-3d",
  transform: "perspective(1000px)",
  animation: `${spin} 20s linear infinite`,
};

export const itemStyle = (position: number): SxProps<Theme> => {
  return {
    position: "absolute",
    inset: "0 0 0 0",
    transform: `rotateY(calc( ${position} * (360deg / ${NUM_PROJECTS}))) translateZ(550px)`,
  };
};

export const itemImageStyle: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};
