import React, {useState, lazy, Suspense, useEffect} from 'react';
import { useNavigate, Routes, Route, useLocation } from 'react-router-dom';
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
  const navigate = useNavigate();
  const location = useLocation();
    const [collapsed, setCollapsed] = useState(false);
  const [currentPage, setCurrentPage] = useState('/');
  const [menus, setMenus] = useState<MyMenuItem[]>(baseMenus);
  const [c, setC] = useState(0);
  const add = () => {
    setC((c) => c + 1);
    console.log(11);
  };

  const handleMenuClick = (item) => {
    console.log(item)
    navigate(item.key);
    setCurrentPage(item.key)
  }

  useEffect(() => {
    setCurrentPage(location.pathname)
  }, [location.pathname])
  return (
    <div className="rootOuter">
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div>logo</div>
          <Menu
              theme="dark"
              mode="inline"
              items={menus}
              onClick={handleMenuClick}
              selectedKeys={[currentPage]}
          />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content
              className="site-layout-background"
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
              }}
          >
            hello 9998
            <button onClick={add}>add</button>
            <h1 className={styles.count}>{c}</h1>
            <div className="imgBox">
              <img
                  src={img1}
                  alt=""
              />
            </div>
            <Suspense
                fallback={
                  <Button
                      shape="circle"
                      loading
                  />
                }
            >
              <Routes>
                <Route
                    path="/"
                    element={Welcome}
                />
                <Route
                    path="/reactdnd"
                    element={ReactDndComp}
                />
                <Route
                    path="/datepicker"
                    element={DatePickerComp}
                />
              </Routes>
            </Suspense>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
