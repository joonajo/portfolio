import React, { useContext } from 'react';

export type TAuthState = {
  signedIn: boolean;
  email?: string;
  password?: string;
  idToken?: string;
};

export type TAuthActions =
  | { type: 'signin'; payload: { email: string; password: string; idToken: string } }
  | { type: 'signout' };

export const initialAuthState: TAuthState = {
  signedIn: false,
};

const signIn = (state: TAuthState, action: TAuthActions): TAuthState => {
  if (action.type !== 'signin') {
    return { ...state };
  }

  const updatedState: TAuthState = {
    ...state,
    signedIn: true,
    email: action.payload?.email,
    password: action.payload?.password,
    idToken: action.payload?.idToken,
  };

  return {
    ...updatedState,
  };
};

const authReducer = (state: TAuthState = initialAuthState, action: TAuthActions): TAuthState => {
  switch (action.type) {
    case 'signin':
      return signIn(state, action);

    case 'signout':
      return {
        signedIn: false,
      };

    default:
      return { ...state };
  }
};

export type IAuthContext = {
  state: TAuthState;
  dispatch?: React.Dispatch<any>;
};

const authContextState: IAuthContext = {
  state: initialAuthState,
};

export const AuthContext = React.createContext<IAuthContext>(authContextState);

type IAuthProvider = {
  children: any;
};

export const AuthProvider: React.FunctionComponent<IAuthProvider> = ({ children }) => {
  const [state, dispatch] = React.useReducer(authReducer, initialAuthState);

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  if (!authContext.state || !authContext.dispatch) {
    throw new Error('useAuthContext used outside of AuthContext!');
  }

  return { state: authContext.state, dispatch: authContext.dispatch };
};
