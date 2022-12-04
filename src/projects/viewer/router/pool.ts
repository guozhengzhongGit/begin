import Welcome from "../views/Welcome";

export const RouteIds = {
  welcome: 'welcome',
  sys: 'sys',
  role: 'role',
  user: 'user',
  reactDnd: 'reactDnd',
  datePicker: 'datePicker',
};

// 结构映射
export const routesStructMap = [
  {
    id: RouteIds.welcome,
  },
  {
    id: RouteIds.sys,
    children: [{ id: RouteIds.role }, { id: RouteIds.user }],
  },
];
