import React, { useState } from 'react';
import Navigate from './components/navigate'

export const AuthContext = React.createContext();

export default function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  return (
    <AuthContext.Provider value={{users, setUsers, user, setUser}}>
      <Navigate />
    </AuthContext.Provider>
    
  );
}
