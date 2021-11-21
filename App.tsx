import React, {useState} from 'react';
import Navigation from './src/components/navigation/Navigation';

import {AppContext} from './src/utils/hooks/AppContext/AppContext';
import {useUserData} from './src/utils/hooks/CustomHooks/UseEffect/useUserData';

const App = () => {
  const [user, setUser] = useState(useUserData());

  return (
    <AppContext.Provider
      value={{
        user: user,
        setUser: setUser,
      }}>
      <Navigation />
    </AppContext.Provider>
  );
};

export default App;
