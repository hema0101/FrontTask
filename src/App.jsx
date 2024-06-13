import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import CreateGroub from './Component/CreateGroub/CreateGroub';
import GroupList from './Component/GroupList/GroupList';
import ViewGroup from './Component/ViewGroup/ViewGroup';

function App() {




  return (
    <>
      <Routes>
        <Route
          path='/'
          element={(
            <>
              <CreateGroub />
              <GroupList />
            </>
          )}
        />
        <Route path='/:id' element={<ViewGroup />} />
        <Route path='*' element={<h1>Error</h1>} />
      </Routes>
    </>
  );
}

export default App;
