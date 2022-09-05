import { useContext } from "react";

import { AuthContext } from "./AuthContext";

/**
 * This hook providers the current user's authentication state and loading state.
 * It will update when user logs in or out depending on their Firebase auth state.
 * @returns an object with the current user data (if logged in) and a boolean
 * denoting the loading state
 */
const useAuth = () => useContext(AuthContext);

export { useAuth };
