import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const LinkIcon = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      fill="#000"
      d="M2.96 15.04a3.271 3.271 0 0 1 0-4.623l2.983-2.983-1.417-1.416L1.544 9A5.272 5.272 0 1 0 9 16.456l2.982-2.982-1.416-1.417-2.983 2.982a3.271 3.271 0 0 1-4.622 0Zm3.803-2.312 5.965-5.965-1.491-1.49-5.965 5.964 1.491 1.49ZM9 1.544 6.018 4.526l1.416 1.417 2.983-2.982a3.271 3.271 0 0 1 4.622 0 3.271 3.271 0 0 1 0 4.622l-2.982 2.983 1.416 1.416L16.456 9A5.272 5.272 0 1 0 9 1.544Z"
    />
  </Svg>
);
export default LinkIcon;
