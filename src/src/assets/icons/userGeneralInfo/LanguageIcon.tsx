import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const LanguageIcon = (props: SvgProps) => (
  <Svg width={16} height={18} fill="none" {...props}>
    <Path
      fill="#000"
      d="M3 0h10c1.375 0 2.5 1.157 2.5 2.571v9c0 1.415-1.125 2.572-2.5 2.572H4.25L.5 18V2.571C.5 1.157 1.625 0 3 0Zm1.713 12.857 1.062-2.893h4.45l1.05 2.893h1.875L8.937 1.286H7.063L2.838 12.857h1.875Zm3.287-9L6.475 8.036h3.037L8 3.857Z"
    />
  </Svg>
);
export default LanguageIcon;
