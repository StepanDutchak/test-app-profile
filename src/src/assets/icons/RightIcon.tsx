import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const RightIcon = (props: SvgProps) => (
  <Svg width={8} height={12} fill="none" {...props}>
    <Path
      fill="#D2D2D7"
      d="M.817 11.342a1.038 1.038 0 0 1 .002-1.52L4.945 6 .818 2.17A1.035 1.035 0 0 1 2.226.65L8 6l-5.77 5.344c-.399.37-1.016.369-1.413-.002Z"
    />
  </Svg>
);
export default RightIcon;
