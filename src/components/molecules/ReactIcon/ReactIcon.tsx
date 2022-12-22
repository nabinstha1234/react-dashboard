import React from 'react';
import { Box } from '@mui/material';

type Props = {
  icon: string;
  sx?: object;
  other?: object;
  width?: number;
  height?: number;
};

const Icon = (props: any) => {
  console.log(props);
  return <img src={props.icon} {...props} alt="" />;
};
const ReactIcon = ({ icon, width, height, sx, ...other }: Props) => {
  return (
    <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} width={width} height={height} />
  );
};

export default ReactIcon;
