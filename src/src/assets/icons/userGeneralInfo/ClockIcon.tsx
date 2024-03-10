import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const ClockIcon = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      fill="#000"
      d="M9 0C4.05 0 0 4.05 0 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9Zm3.87 11.88L8.1 9.27V4.5h1.35v3.96l4.05 2.25-.63 1.17Z"
    />
  </Svg>
);
export default ClockIcon;
