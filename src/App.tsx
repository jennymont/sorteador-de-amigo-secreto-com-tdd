import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Settings from './screens/settings';
import Raffle from './screens/raffle';

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Routes>
            <Route path='/' element={<Settings />} />
            <Route path='/raffle' element={<Raffle />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
