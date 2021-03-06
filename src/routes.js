import BasicLayout from '@/layouts/BasicLayout';
import UserLayout from '@/layouts/UserLayout';
import Vote from '@/pages/Vote';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Setting from '@/pages/Setting';
import VoteNotStarted from '@/pages/VoteNotStarted';
import VotePropose from '@/pages/VotePropose';
import VoteVote from '@/pages/VoteVote';
import UpdateVote from '@/pages/UpdateVote';
import QuickCreate from '@/pages/QuickCreate';
import Share from '@/pages/Share';
import Forget from '@/pages/Forget';
import Reset from '@/pages/Reset';
import Search from '@/pages/Search';

const routerConfig = [
  {
    path: '/user',
    component: UserLayout,
    children: [
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/forget',
        component: Forget,
      },
      {
        path: '/reset/:id',
        component: Reset,
      },
      {
        path: '/register/:id',
        component: Register,
      },
      {
        path: '/register',
        component: Register,
      },
      {
        path: '/',
        redirect: '/user/login',
      },
    ],
  },
  {
    path: '/vote',
    component: BasicLayout,
    children: [
      { path: '/notstarted/:id', exact: true, component: VoteNotStarted },
      { path: '/proposing/:id', exact: true, component: VotePropose },
      { path: '/voting/:id', exact: true, component: VoteVote },
      { path: '/end/:id', exact: true, component: VoteVote },
      { path: '/update/:id', exact: true, component: UpdateVote },
      { path: '/share/:id', component: Share },
      { path: '/search', component: Search },
      {
        path: '/',
        redirect: '/',
      },
    ],
  },
  {
    path: '/',
    component: BasicLayout,
    children: [
      {
        path: '/setting',
        component: Setting,
      },
      { path: '/quick', component: QuickCreate },
      {
        path: '/',
        component: Vote,
      },
    ],
  },
];
export default routerConfig;
