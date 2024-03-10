import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const ThreeDots = (props: SvgProps) => (
  <Svg width={16} height={4} fill="none" {...props}>
    <Path
      fill="#000"
      d="M12 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM6 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM0 2a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    />
  </Svg>
);
export default ThreeDots;
