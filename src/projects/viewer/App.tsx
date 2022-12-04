import React, { useState, lazy, Suspense, useEffect } from 'react';
import {
  useNavigate,
  Routes,
  Route,
  useLocation,
  useRoutes,
} from 'react-router-dom';
import BaseLayout from './layouts/BaseLayout';
import { BASE_ROUTER_CONFIG } from './router';
import {
  EditOutlined,
  StrikethroughOutlined,
  RadiusSettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { Layout, Menu, Button } from 'antd';
import Welcome from './views/Welcome';
import FormComp from './views/Form';

import './app.css';
import img1 from '@assets/p1.png';
import styles from './app.module.less';
import './app.less';

const { Header, Sider, Content } = Layout;

type MyMenuItem = {
  key: string;
  icon: string;
  label: string;
  sort: number;
};

const ReactDndComp = lazy(() => import('./views/react-dnd'));
const DatePickerComp = lazy(() => import('./views/date-picker'));

const baseMenus = [
  {
    key: '/',
    icon: <EditOutlined />,
    label: 'welcome',
    sort: 1,
  },
  {
    key: '/reactdnd',
    icon: <StrikethroughOutlined />,
    label: 'ReactDndComp',
    sort: 2,
  },
  {
    key: '/datepicker',
    icon: <RadiusSettingOutlined />,
    label: 'DatePickerComp',
    sort: 3,
  },
];
function App() {
  return (
    <div className="rootOuter">
      <Routes>
        <Route
          path="/"
          element={Welcome}
        />
        <Route
            path="/features"
            element={BaseLayout}
        >
          <Route
              path={'form'}
              element={FormComp}
          />
        </Route>
        <Route
          path="/reactdnd"
          element={ReactDndComp}
        />
        <Route
          path="/datepicker"
          element={DatePickerComp}
        />
      </Routes>
    </div>
  );
}

export default App;
