import React, { createContext, useContext, useState } from "react";

interface User {
  email: string;
  password: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  signup: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const INITIAL_USERS: User[] = [
  { email: "demo@example.com", password: "password123" },
  { email: "test@user.com", password: "testpass" },
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [users, setUsers] = useState<User[]>(INITIAL_USERS);

  const login = (email: string, password: string) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      setAuthenticated(true);
      return true;
    }
    return false;
  };

  const signup = (email: string, password: string) => {
    setUsers([...users, { email, password }]);
    setAuthenticated(true);
  };

  const logout = () => setAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext)!;
