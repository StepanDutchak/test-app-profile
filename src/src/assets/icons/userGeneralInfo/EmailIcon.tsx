import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const EmailIcon = (props: SvgProps) => (
  <Svg width={20} height={18} fill="none" {...props}>
    <Path
      fill="#000"
      d="M10.732 14.868c0-.337.039-.664.088-.991H1.95V3.965L9.756 8.92l7.805-4.956V9.01a5.78 5.78 0 0 1 1.951.714V1.982C19.512.892 18.634 0 17.561 0H1.951C.878 0 0 .892 0 1.982v11.895c0 1.09.878 1.982 1.951 1.982h8.869a6.68 6.68 0 0 1-.088-.991ZM17.56 1.982 9.756 6.938 1.951 1.982h15.61ZM15.366 18l-2.683-2.974 1.132-1.15 1.55 1.577 3.503-3.559L20 13.292 15.366 18Z"
    />
  </Svg>
);
export default EmailIcon;
