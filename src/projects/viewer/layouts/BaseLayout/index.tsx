import React, { useState } from "react";
import { Outlet } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

import styles from './style.module.less';

const { Header, Sider, Content, Footer } = Layout;
const BaseLayout = () => {
  const [count, setCount] = useState(0);
  const [collapsed, setCollapsed] = useState(false);
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
                defaultSelectedKeys={['1']}
                items={[
                  {
                    key: '1',
                    icon: <UserOutlined />,
                    label: 'nav 1',
                  },
                  {
                    key: '2',
                    icon: <VideoCameraOutlined />,
                    label: 'nav 2',
                  },
                  {
                    key: '3',
                    icon: <UploadOutlined />,
                    label: 'nav 3',
                  },
                  {
                    key: '4',
                    icon: <UploadOutlined />,
                    label: 'nav 3',
                  },
                  {
                    key: '5',
                    icon: <UploadOutlined />,
                    label: 'nav 3',
                  },
                  {
                    key: '6',
                    icon: <UploadOutlined />,
                    label: 'nav 3',
                  },
                  {
                    key: '7',
                    icon: <UploadOutlined />,
                    label: 'nav 3',
                  },
                  {
                    key: '8',
                    icon: <UploadOutlined />,
                    label: 'nav 3',
                  },
                  {
                    key: '9',
                    icon: <UploadOutlined />,
                    label: 'nav 3',
                  },
                ]}
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
                  Content
                  布局
                  这里才是挂载子路由视图的地方
                  <Outlet />
                </div>
              </Content>
            </Layout>
          </Layout>
        </div>
    )
}


export default BaseLayout;
