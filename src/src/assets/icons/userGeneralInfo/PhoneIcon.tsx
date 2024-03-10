import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const PhoneIcon = (props: SvgProps) => (
  <Svg width={16} height={20} fill="none" {...props}>
    <Path
      fill="#000"
      d="M8.722 20H1.83A1.823 1.823 0 0 1 0 18.182V1.818C0 .81.814 0 1.829 0h9.142C11.977 0 12.8.81 12.8 1.818v9.091c-.64 0-1.253.118-1.829.318v-7.59H1.83v12.727h5.485c0 1.4.53 2.672 1.408 3.636Zm2.935-.764L9.143 16.51l1.06-1.055 1.454 1.446 3.282-3.264L16 14.918l-4.343 4.318Z"
    />
  </Svg>
);
export default PhoneIcon;
