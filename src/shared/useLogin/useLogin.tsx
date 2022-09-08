import axios from "axios";
import { FirebaseApp } from "firebase/app";
import { getAuth, signInWithCustomToken } from "firebase/auth";
import { useState, useEffect, useMemo } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { apiUrl, Service } from "../apiUrl/apiUrl";

/**
 * This is the main login hook that logs a user into an application. It takes
 * in the Firebase app and retrieves a custom token from the api auth service. It
 * also handles a callback from the login frontend through the idToken search
 * parameter.
 * @param app the Firebase app to use for authentication
 * @returns an array with the first element being a boolean if the user status
 * is current loading, the second element an error if there was one, and the
 * last element a boolean if the user is logged in or not
 */
const useLogin = (
  app: FirebaseApp
): [loading: boolean, error: any, loggedIn: boolean] => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const auth = useMemo(() => getAuth(app), [app]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const login = async () => {
      try {
        if (searchParams.get("idToken")) {
          await axios.post(apiUrl(Service.AUTH, "/auth/login"), {
            idToken: searchParams.get("idToken"),
          });
        }

        const response = await axios.get(apiUrl(Service.AUTH, "/auth/status"));
        await signInWithCustomToken(auth, response.data.customToken);

        setLoggedIn(true);
        setLoading(false);

        // Remove idToken from URL after we use it
        searchParams.delete("idToken");
        navigate(`${location.pathname}?${searchParams.toString()}`);
      } catch (err: any) {
        setError(err);
        setLoading(false);
      }
    };

    login();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return [loading, error, loggedIn];
};

export { useLogin };
