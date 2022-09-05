import React, {
  useContext,
  createContext,
  useState,
  useMemo,
  PropsWithChildren,
  useEffect,
} from "react";
import {
  getAuth,
  onAuthStateChanged,
  User as FirebaseUser,
} from "firebase/auth";
import { FirebaseApp } from "firebase/app";

const initialState = {
  user: null,
  loading: true,
};

const AuthContext =
  createContext<{ user: FirebaseUser | null; loading: boolean }>(initialState);

interface AuthProviderProps {
  app: FirebaseApp;
}

/**
 * Main auth provider that handles the user state and loading state. It subscribes
 * to a Firebase auth observer that will update the current user value on login/logout.
 * Use this provider to provide user state to the rest of the application.
 * @param app the Firebase app to use for authentication
 * @returns the auth provider
 */
const AuthProvider: React.FC<PropsWithChildren<AuthProviderProps>> = ({
  app,
  children,
}) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [loading, setLoading] = useState(true);

  const auth = useMemo(() => getAuth(app), [app]);
  const value = useMemo(() => ({ user, loading }), [user, loading]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return unsubscribe;
  }, [auth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
