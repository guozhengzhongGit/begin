import React, { lazy, Suspense } from "react";

import Welcome from "../views/Welcome";
import BaseLayout from '../layouts/BaseLayout';
import FormComp from '../views/Form';
import { UserOutlined } from "@ant-design/icons";

const ReactDndComp = lazy(() => import('../views/react-dnd'));
const DatePickerComp = lazy(() => import('../views/date-picker'));
const IamgeComp = lazy(() => import('../views/img'));
const MediaComp = lazy(() => import('../views/media'));
import VueComp from "@viewer/views/vue";
import ReactComp from '../views/react';
import FrameWorkComp from '../views/framework'


export const routerCompMap = [
  {
    path: "/",
    element: <Welcome />,
    label: '欢迎',
    icon: <UserOutlined />,
    key: '/',
  },
  {
    path: '/features',
    element: <BaseLayout />,
    label: '功能分区',
    icon: <UserOutlined />,
    key: '/features',
    children: [
      {
        path: 'form',
        element: <Suspense><FormComp /></Suspense>,
        label: '表单',
        icon: <UserOutlined />,
        key: 'form',
      },
      {
        path: 'img',
        element: <Suspense><IamgeComp /></Suspense>,
        label: '图片',
        icon: <UserOutlined />,
        key: 'img',
      },
      {
        path: 'media',
        element: <Suspense><MediaComp /></Suspense>,
        label: '多媒体',
        icon: <UserOutlined />,
        key: 'media',
      },
      {
        path: 'framework',
        element: <Suspense><FrameWorkComp /></Suspense>,
        label: '框架',
        icon: <UserOutlined />,
        key: 'framework',
        children: [
          {
            path: 'vue',
            element: <Suspense><VueComp /></Suspense>,
            label: 'vue',
            icon: <UserOutlined />,
            key: 'vue',
          },
          {
            path: 'react',
            element: <Suspense><ReactComp /></Suspense>,
            label: 'react',
            icon: <UserOutlined />,
            key: 'react',
          },
        ]
      }
    ],
  },
  {
    path: '/reactdnd',
    element: <Suspense><ReactDndComp /></Suspense>,
    label: 'dnd',
    icon: <UserOutlined />,
    key: '/reactdnd',
  },
  {
    path: '/datepicker',
    element: <Suspense><DatePickerComp /></Suspense>,
    label: '日期',
    icon: <UserOutlined />,
    key: '/datepicker',
  },
];
