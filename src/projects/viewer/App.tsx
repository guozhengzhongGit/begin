import React, { useState, lazy, Suspense, useEffect } from 'react';
import {
  useNavigate,
  Routes,
  Route,
  useLocation,
  useRoutes,
} from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';

import Welcome from './views/Welcome';
import FormComp from './views/Form';

import './app.css';
import img1 from '@assets/p1.png';
import styles from './app.module.less';
import './app.less';


type MyMenuItem = {
  key: string;
  icon: string;
  label: string;
  sort: number;
};

const ReactDndComp = lazy(() => import('./views/react-dnd'));
const DatePickerComp = lazy(() => import('./views/date-picker'));

function App() {
  return (
    <div className="rootOuter">
      <Routes>
        <Route
          path="/"
          element={<Welcome />}
        />
        <Route
            path="/features"
            element={<BaseLayout />}
        >
          <Route
              path={'form'}
              element={<FormComp />}
          />
        </Route>
        <Route
          path="/reactdnd"
          element={<ReactDndComp />}
        />
        <Route
          path="/datepicker"
          element={<DatePickerComp />}
        />
      </Routes>
    </div>
  );
}

export default App;
