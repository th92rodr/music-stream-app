import React, { createContext, ReactNode, useCallback, useContext, useState } from 'react';

import { api } from '../services/api';
import { User } from '../types';

type AuthContextData = {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): Promise<void>;
  updateUser(user: User): void;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

type AuthState = {
  token: string;
  user: User;
};

type SignInCredentials = {
  email: string;
  password: string;
};

const AuthContext = createContext({} as AuthContextData);

// prettier-ignore
export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@App:token');
    const user = localStorage.getItem('@App:user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', { email, password });

    const { token, user } = response.data;

    localStorage.setItem('@App:token', token);
    localStorage.setItem('@App:user', JSON.stringify(user));

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    localStorage.removeItem('@App:token');
    localStorage.removeItem('@App:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback((user: User) => {
    setData({
      token: data.token,
      user,
    });

    localStorage.setItem('@App:user', JSON.stringify(user));
  }, [setData, data.token]);

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
