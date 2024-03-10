import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const StarIcon = (props: SvgProps) => (
  <Svg width={20} height={18} fill="none" {...props}>
    <Path
      fill="#000"
      d="M10 14.466 15.871 18l-1.558-6.66L19.5 6.859l-6.83-.587L10 0 7.33 6.272.5 6.859l5.178 4.481L4.129 18 10 14.466Z"
    />
  </Svg>
);
export default StarIcon;
