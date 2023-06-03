import { createContext,useState ,useEffect} from "react";
import { createUserDocumentFromAuth,onAuthStateChangedListener} from "../utils/firebase/Firebase";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChangedListener((user) => {
      if (user) {
         createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return () => unsubscribeFromAuth();
  }, []);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  )
}