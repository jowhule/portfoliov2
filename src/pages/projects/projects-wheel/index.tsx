import { useEffect, useRef, useState } from "react";
import { Box } from "@mui/material";
import { NUM_PROJECTS, projectInformation } from "./projects";
import {
  ProjectWheelBanner,
  ProjectWheelItem,
  ProjectWheelSlider,
} from "./styles";
import CyberWindow from "../../../components/cyber-window";
import CodeOffRoundedIcon from "@mui/icons-material/CodeOffRounded";
import { CoverImage } from "../../../components/styled-components";

interface ProjectsWheelProps {
  children?: React.ReactNode;
}

const TAPER_SPEED = 10;
const VELOCITY_TAPER = 0.95;
const MILLI_SECS_PER_FRAME = 16;
const PASSIVE_ROTATION_SPEED = 0.1;
const ITEM_ANGLE = 360 / NUM_PROJECTS;

const ProjectsWheel: React.FC<ProjectsWheelProps> = ({ children }) => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [rotation, setRotation] = useState<number>(0);
  const [startX, setStartX] = useState<number>(0);
  const [velocity, setVelocity] = useState<number>(0);
  const lastTime = useRef(0);
  const autoRotateInterval = useRef<ReturnType<typeof setInterval> | null>(
    null
  );

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setVelocity(0);
    lastTime.current = Date.now();

    // clear auto-rotation while dragging
    if (autoRotateInterval.current) {
      clearInterval(autoRotateInterval.current);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isDragging) {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime.current || 1;

      const delta = e.clientX - startX;
      // calculate velocity based on distance and time
      const newVelocity = (delta * 0.1) / deltaTime;
      setVelocity(newVelocity);

      setRotation((prev) => (prev + delta * 0.1) % 360);
      setStartX(e.clientX);
      lastTime.current = currentTime;
    }
  };

  useEffect(() => {
    // apply inertia on rotation tapering off after drag ends
    let inertia: number | undefined;
    if (!isDragging && Math.abs(velocity) > 0.01) {
      inertia = setInterval(() => {
        setRotation((prev) => (prev + velocity * TAPER_SPEED) % 360);
        setVelocity((v) => v * VELOCITY_TAPER);

        if (Math.abs(velocity) < 0.01) {
          clearInterval(inertia);
        }
      }, MILLI_SECS_PER_FRAME);
    }
    return () => clearInterval(inertia);
  }, [isDragging, velocity]);

  useEffect(() => {
    // auto-rotate when not dragging
    if (!isDragging && autoRotateInterval.current === null) {
      autoRotateInterval.current = setInterval(() => {
        setRotation((prev) => prev + PASSIVE_ROTATION_SPEED);
      }, MILLI_SECS_PER_FRAME);
    }
    return () => {
      if (autoRotateInterval.current) {
        clearInterval(autoRotateInterval.current);
        autoRotateInterval.current = null;
      }
    };
  }, [isDragging]);
  useEffect(() => {
    // console.log(rotation);
  }, [rotation]);
  return (
    <ProjectWheelBanner
      sx={{ cursor: isDragging ? "grabbing" : "auto" }}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <ProjectWheelSlider
        sx={{
          transform: `perspective(1000px) rotateX(-15deg) rotateY(${rotation}deg)`,
        }}
      >
        <>
          {projectInformation.map((info, i) => (
            <ProjectWheelItem
              onMouseDown={handleMouseDown}
              sx={{
                cursor: isDragging ? "grabbing" : "grab",
                transform: `rotateY(calc( ${i} * ${ITEM_ANGLE}deg)) translateZ(clamp(100px, 35vw, 550px))`,
              }}
              key={i}
            >
              {info.thumbnail ? (
                <CyberWindow title={info.name}>
                  <CoverImage
                    src={info.thumbnail ?? ""}
                    alt=""
                    draggable={false}
                  />
                </CyberWindow>
              ) : (
                <CyberWindow>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <CodeOffRoundedIcon
                      sx={{
                        fontSize: {
                          sm: "40px",
                          md: "80px",
                        },
                      }}
                    />
                  </Box>
                </CyberWindow>
              )}
            </ProjectWheelItem>
          ))}
          <Box>{children}</Box>
        </>
      </ProjectWheelSlider>
    </ProjectWheelBanner>
  );
};

export default ProjectsWheel;
