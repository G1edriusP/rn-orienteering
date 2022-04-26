import React, { memo } from "react";

// Components
import Svg, { Path } from "react-native-svg";

// Constants
import colors from "constants/colors";

type Props = {
  size: number;
  color?: string;
};

const Bin: React.FC<Props> = ({ size, color = colors.BLACK }) => {
  return (
    <Svg width={size} height={size} strokeWidth='1.5' viewBox='0 0 24 24'>
      <Path
        stroke={color}
        d='M3.04 4.294a.496.496 0 01.191-.479C3.927 3.32 6.314 2 12 2s8.073 1.32 8.769 1.815a.496.496 0 01.192.479l-1.7 12.744a4 4 0 01-1.98 2.944l-.32.183a10 10 0 01-9.922 0l-.32-.183a4 4 0 01-1.98-2.944l-1.7-12.744zM3 5c2.571 2.667 15.429 2.667 18 0'
      />
    </Svg>
  );
};

export default memo(Bin);
