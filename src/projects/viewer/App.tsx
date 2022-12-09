import React, { useState, lazy, useEffect, Suspense } from 'react';
import {
  useNavigate,
  Routes,
  Route,
  useLocation,
  useRoutes,
} from 'react-router-dom';
import { Button } from "antd";
import { PoweroffOutlined } from '@ant-design/icons';

import { routerCompMap } from './router';

import './app.css';
import img1 from '@assets/p1.png';
import styles from './app.module.less';
import './app.less';


function App() {
  const routerApp = useRoutes(routerCompMap);
  return (
    <div className="rootOuter">
        {routerApp}
    </div>
  );
}

export default App;
