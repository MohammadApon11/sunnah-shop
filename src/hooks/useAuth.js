const { default: AuthContext } = require("@/contexts/AuthContext");
const { useContext } = require("react");

const useAuth = () => {
  const auth = useContext(AuthContext);
  const isClient = typeof window !== "undefined";
  if (!isClient && !auth) return {};
  if (!auth) {
    throw new Error(
      "You must Wrap up your application with authCotext or use the useAuth"
    );
  }
  return auth;
};

export default useAuth;
