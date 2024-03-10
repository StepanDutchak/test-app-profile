export interface IUserPersonalData {
  id: number;
  name: string;
  fullName: string;
  rating: number;
  reviews: number;
  followers: number;
  following: number;
}

export interface IUserData {
  user: IUserPersonalData;
}

export interface IUserDataResponse {
  user: IUserPersonalData;
}

export interface IStore {
  user: IUserDataResponse;
}

export interface RootStateUser {
  user: IUserData;
}
