import {IUserPersonalData} from 'types/store';

export const fetchUserData = async () => {
  const result = {
    id: 1,
    name: 'Kate',
    fullName: 'Kate Jamezi-Liamson',
    rating: 4.98,
    reviews: 402,
    followers: 555,
    following: 113,
  };
  return result as IUserPersonalData;
};
