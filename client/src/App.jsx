import { HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  About,
  How,
  Necrology,
  Team,
  Bylaws,
  HomeLayout,
  Landing,
  Error,
  Login,
  Register,
  Updates,
  Contact,
  ResetPassword,
  ForgotPassword,
  DashboardLayout,
  AddMembers,
  AllMembers,
  Announcement,
  Stats,
  Profile,
  Admin,
  EditMember,
  AdminAllMembers,
  AdminAllDeceased,
  AdminEditMember,
  DeathAnnouncement,
  SingleNecrology,
  AdminEditDeceased,
  PrivacyPolicy,
  LegalNotice,
  TermOfService,
} from './pages';

import { ErrorElement } from './components';

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { loader as dashboardLoader } from './pages/DashboardLayout';
import { loader as allMembersLoader } from './pages/AllMembers';
import { loader as announcementLoader } from './pages/AllMembers';
import { loader as adminAllMembersLoader } from './pages/AdminAllMembers';
import { action as addMemberAction } from './pages/AddMembers';
import { loader as editMemberLoader } from './pages/EditMember';
import { action as editMemberAction } from './pages/EditMember';
import { loader as adminEditMemberLoader } from './pages/AdminEditMember';
import { action as adminEditMemberAction } from './pages/AdminEditMember';
import { action as deleteMemberAction } from './pages/DeleteMember';
import { loader as deleteMemberLoader } from './pages/DeleteMember';
import { loader as adminLoader } from './pages/Admin';
import { loader as statLoader } from './pages/Stats';
import { action as profileAction } from './pages/Profile';
import { loader as deathAnnouncementLoader } from './pages/DeathAnnouncement';
import { action as deathAnnouncementAction } from './pages/DeathAnnouncement';
import { loader as necrologyLoader } from './pages/Necrology';
import { loader as singleNecrologyLoader } from './pages/SingleNecrology';
import { action as forgotAction } from './pages/ForgotPassword';
import { action as resetAction } from './pages/ResetPassword';
import { loader as adminAllDeceasedLoader } from './pages/AdminAllDeceased';
import { loader as adminEditDeceasedLoader } from './pages/AdminEditDeceased';
import { action as adminEditDeceasedAction } from './pages/AdminEditDeceased';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },

      {
        path: 'team',
        element: <Team />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'bylaws',
        element: <Bylaws />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'how',
        element: <How />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'updates',
        element: <Updates />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'necrology',
        element: <Necrology />,
        errorElement: <ErrorElement />,
        loader: necrologyLoader,
      },
      {
        path: 'necrology/:id',
        element: <SingleNecrology />,
        errorElement: <ErrorElement />,
        loader: singleNecrologyLoader,
      },

      {
        path: 'contact',
        element: <Contact />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'term-of-service',
        element: <TermOfService />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'legal-notice',
        element: <LegalNotice />,
        errorElement: <ErrorElement />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction,
  },
  {
    path: '/reset',
    element: <ResetPassword />,
    errorElement: <Error />,
    action: resetAction,
  },
  {
    path: '/forgot',
    element: <ForgotPassword />,
    errorElement: <Error />,
    action: forgotAction,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    errorElement: <Error />,
    loader: dashboardLoader,
    children: [
      {
        path: 'add-member',
        element: <AddMembers />,
        errorElement: <ErrorElement />,
        action: addMemberAction,
      },
      {
        index: true,
        element: <AllMembers />,
        errorElement: <ErrorElement />,
        loader: allMembersLoader,
      },
      {
        path: 'stats',
        element: <Stats />,
        errorElement: <ErrorElement />,
        loader: statLoader(queryClient),
      },
      {
        path: 'announcement',
        element: <Announcement />,
        errorElement: <ErrorElement />,
        loader: announcementLoader,
      },
      {
        path: 'profile',
        element: <Profile />,
        errorElement: <ErrorElement />,
        action: profileAction,
      },

      {
        path: 'admin',
        element: <Admin />,
        errorElement: <ErrorElement />,
        loader: adminLoader,
      },
      {
        path: 'all-members-admin',
        element: <AdminAllMembers />,
        errorElement: <ErrorElement />,
        loader: adminAllMembersLoader,
      },
      {
        path: 'edit-member/:id',
        element: <EditMember />,
        errorElement: <ErrorElement />,
        action: editMemberAction,
        loader: editMemberLoader,
      },
      {
        path: 'admin-edit-member/:id',
        element: <AdminEditMember />,
        errorElement: <ErrorElement />,
        action: adminEditMemberAction,
        loader: adminEditMemberLoader,
      },
      {
        path: 'delete-member/:id',
        action: deleteMemberAction,
        loader: deleteMemberLoader,
      },
      {
        path: 'death-announcement/:id',
        element: <DeathAnnouncement />,
        action: deathAnnouncementAction,
        loader: deathAnnouncementLoader,
      },
      {
        path: 'all-deceased-admin',
        element: <AdminAllDeceased />,
        errorElement: <ErrorElement />,
        loader: adminAllDeceasedLoader,
      },
      {
        path: 'admin-edit-deceased/:id',
        element: <AdminEditDeceased />,
        errorElement: <ErrorElement />,
        action: adminEditDeceasedAction,
        loader: adminEditDeceasedLoader,
      },
      {
        path: 'register',
        element: <Register />,
        errorElement: <Error />,
        action: registerAction,
      },
    ],
  },
]);

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </HelmetProvider>
  );
};
export default App;
