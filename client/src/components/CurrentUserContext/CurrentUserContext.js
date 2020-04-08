import React, { useState, useEffect } from 'react'
export const CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {

    setStatus('loading');
    fetch('/api/me/profile')
      .then(res => res.json())
      .then(data => setCurrentUser(data))
      .then(setStatus('idle'))

    }, []);

  return (
    <CurrentUserContext.Provider 
      value={{currentUser, status}}>
      {children}
    </CurrentUserContext.Provider>
  )
}

