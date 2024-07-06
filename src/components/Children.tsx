import { Box, Checkbox, FormControlLabel } from "@mui/material";
import React, { FC } from "react";

interface Props {
  id: string;
  name: string;
  handleParentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: boolean;
}

const Children: React.FC<Props> = ({ id, name, handleParentChange, value }) => {
  return (
    <FormControlLabel
      label={name}
      control={
        <Checkbox checked={value} id={id} onChange={handleParentChange} />
      }
    />
  );
};

export default Children;
