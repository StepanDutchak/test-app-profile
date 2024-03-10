import {
  ClockIcon,
  EmailIcon,
  LanguageIcon,
  LinkIcon,
  PhoneIcon,
} from 'assets/icons/userGeneralInfo';
import {IGeneralUserConfig} from 'types/components';

export const UserGeneralInfo = [
  {
    id: 1,
    title: 'AWM host since 2023',
    icon: ClockIcon,
  },
  {
    id: 2,
    title: 'Speaks English, German, French',
    icon: LanguageIcon,
  },
  {
    id: 3,
    title: 'Phone number verified',
    icon: PhoneIcon,
  },
  {
    id: 4,
    title: 'Email verified',
    icon: EmailIcon,
  },
  {
    id: 5,
    title: 'Instagram, Linkedin, visitphuket.com +5',
    icon: LinkIcon,
    customTextStyle: {
      textDecorationLine: 'underline',
    },
  },
] as IGeneralUserConfig[];
