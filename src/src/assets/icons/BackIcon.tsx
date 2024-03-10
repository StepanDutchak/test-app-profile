import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const BackIcon = (props: SvgProps) => (
  <Svg width={11} height={18} fill="none" {...props}>
    <Path
      fill="#000"
      d="M11 15.87 4.201 9 11 2.115 8.907 0 0 9l8.907 9L11 15.87Z"
    />
  </Svg>
);
export default BackIcon;
