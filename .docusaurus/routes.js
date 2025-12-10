import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '0aa'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '3fd'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '081'),
            routes: [
              {
                path: '/docs/introduction/docusaurus-setup',
                component: ComponentCreator('/docs/introduction/docusaurus-setup', '623'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/python-env',
                component: ComponentCreator('/docs/introduction/python-env', '940'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/ros2-install',
                component: ComponentCreator('/docs/introduction/ros2-install', '3f3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/rviz2-urdf',
                component: ComponentCreator('/docs/introduction/rviz2-urdf', 'f83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/introduction/urdf-concepts',
                component: ComponentCreator('/docs/introduction/urdf-concepts', '294'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1/gazebo-intro',
                component: ComponentCreator('/docs/module1/gazebo-intro', 'fa8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module1/ros2-nodes',
                component: ComponentCreator('/docs/module1/ros2-nodes', '08d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module2/isaac-sim-intro',
                component: ComponentCreator('/docs/module2/isaac-sim-intro', '71a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module2/virtual-sensors',
                component: ComponentCreator('/docs/module2/virtual-sensors', 'd9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module3/control-fundamentals',
                component: ComponentCreator('/docs/module3/control-fundamentals', '6ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module3/inverse-kinematics',
                component: ComponentCreator('/docs/module3/inverse-kinematics', 'f8c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module4/gpt-hri',
                component: ComponentCreator('/docs/module4/gpt-hri', '080'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/module4/whisper-stt',
                component: ComponentCreator('/docs/module4/whisper-stt', '79d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
