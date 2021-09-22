import { lazy } from 'react';

export const path = {
  HOME: { url: '/', label: 'Home' },
  DETAILS: { url: '/details', label: 'Details' },
};

export default [
  {
    path: path.HOME.url,
    label: path.HOME.label,
    exact: true,
    Component: lazy(() => import('../views/HomePage/index.tsx')),
  },
];
