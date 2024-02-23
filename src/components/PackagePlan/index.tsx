import * as React from "react";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function PackagePlan() {
  const [alignment, setAlignment] = React.useState("left");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  const children = [
    <ToggleButton
      sx={{
        backgroundColor:
          alignment === "justify" ? "#yourSelectedColor" : "#yourDefaultColor",
        "&:hover": {
          backgroundColor: "#yourHoverColor",
        },
      }}
      className="w-full h-full"
      value="right"
      key="right"
    ></ToggleButton>,
    <ToggleButton
      className="w-full h-full"
      value="justify"
      key="justify"
    ></ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <Stack spacing={2} alignItems="center" className="w-full">
      <ToggleButtonGroup
        className="w-full h-48 "
        size="large"
        {...control}
        aria-label="Large sizes"
      >
        {children}
      </ToggleButtonGroup>
    </Stack>
  );
}
