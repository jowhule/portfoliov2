import { Box } from "@mui/material";
import { projectInformation } from "./projects";
import { bannerStyle, itemImageStyle, itemStyle, sliderStyle } from "./styles";

interface ProjectsWheelProps {
  children?: React.ReactNode;
}

const ProjectsWheel: React.FC<ProjectsWheelProps> = ({ children }) => {
  return (
    <Box sx={bannerStyle}>
      <Box sx={sliderStyle}>
        <>
          {projectInformation.map((info, i) => (
            <Box sx={itemStyle(i)} key={i}>
              <Box
                sx={itemImageStyle}
                src={info.thumbnail}
                component="img"
                alt=""
              />
            </Box>
          ))}
          <Box>{children}</Box>
        </>
      </Box>
    </Box>
  );
};

export default ProjectsWheel;
