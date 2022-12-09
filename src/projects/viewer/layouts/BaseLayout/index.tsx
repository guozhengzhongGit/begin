import React, { useState, useEffect, Suspense } from "react";
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined, PoweroffOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { routerCompMap } from '../../router';

import styles from './style.module.less';

const { Header, Sider, Content, Footer } = Layout;
const BaseLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [selectKey, setSelectKey] = useState([])
  const [openKey, setOpenKey] = useState(() => {
    const { pathname } = location;
    const _temp = pathname.split('/').filter(item => item);
    let result = _temp.slice(0, _temp.length - 1);
    if (_temp.length > 1) {
      result = result.map(item => '/' + item)
    }
    return result;
  });
  useEffect(() => {
    const { pathname } = location;
    const _temp = pathname.split('/').filter(item => item)
    setSelectKey([_temp[_temp.length-1]])
  }, [location.pathname]);

  const handleMenuClick = ({key, keyPath}) => {
    const deep = keyPath.length;
    const url = keyPath.reduceRight((pre, next) => {
      return pre + '/' + next;
    });
    navigate(key)
  }
    return (
        <div className={styles.basicLayoutOuter}>
          <Layout className={styles.antLayout}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <div className={styles.logoOuter}>
                <div className={styles.logo}>
                  logo
                </div>
              </div>
              <Menu
                theme="dark"
                mode="inline"
                selectedKeys={selectKey}
                defaultOpenKeys={openKey}
                items={routerCompMap}
                onClick={handleMenuClick}
              />
            </Sider>
            <Layout>
              <Header
                className={styles.headerOuter}
              >
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  style:{fontSize: 16, marginLeft: 12},
                  onClick: () => setCollapsed(!collapsed),
                })}
              </Header>
              <Content
                className={styles.contentOuter}
              >
                <div style={{height: 1000}}>
                  <Suspense fallback={<Button type="primary" icon={<PoweroffOutlined />} loading />}>
                  Content
                  布局
                  这里才是挂载子路由视图的地方
                  <Outlet />
                  </Suspense>
                </div>
              </Content>
            </Layout>
          </Layout>
        </div>
    )
}


export default BaseLayout;
