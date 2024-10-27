import { Box, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import CropSquareRoundedIcon from "@mui/icons-material/CropSquareRounded";
import MinimizeRoundedIcon from "@mui/icons-material/MinimizeRounded";

interface CyberWindowProps {
  active?: boolean;
  title?: string;
  children?: React.ReactElement<unknown>;
}

const CyberWindow: React.FC<CyberWindowProps> = ({
  active,
  title,
  children,
}) => {
  return (
    <Box width="100%" height="100%" display="flex" flexDirection="column">
      <Box
        sx={{
          position: "relative",
          height: "10%",
          background: "linear-gradient(135deg, transparent 8px, white 8px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "10px",
        }}
      >
        <Typography noWrap color="black">
          {title ?? "WIP"}
        </Typography>
        <Box color="black" marginTop="3px">
          <MinimizeRoundedIcon sx={{ marginBottom: "2px", height: "15px" }} />
          <CropSquareRoundedIcon
            sx={{
              padding: "1px",
              height: "15px",
              color: active ? "blue" : "black",
            }}
          />
          <CloseRoundedIcon sx={{ height: "15px" }} />
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          border: "1px solid white",
          display: "inline-block",
          position: "relative",
          overflow: "hidden",
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%)",
          flex: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
export default CyberWindow;
