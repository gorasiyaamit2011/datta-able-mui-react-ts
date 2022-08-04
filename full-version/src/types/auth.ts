import { UserProfileProps } from './users';

// ------------------------| TYPES - AUTH  |------------------------ //

export interface AuthProps {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user: UserProfileProps | null;
  token?: string | null;
}

export interface AuthActionProps {
  type: string;
  payload?: AuthProps;
}
