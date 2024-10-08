// assets
import { IconDashboard } from '@tabler/icons-react';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'registeation',
      title: 'Reg',
      type: 'item',
      url: '/registeation',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'contrl',
      title: 'contrl',
      type: 'item',
      url: '/contrl',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: 'maink',
      title: 'maink',
      type: 'item',
      url: '/maink',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
  ]
};

export default dashboard;
