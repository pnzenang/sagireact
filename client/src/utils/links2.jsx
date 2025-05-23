import { TbUsersGroup } from 'react-icons/tb';
import { TbUsersPlus } from 'react-icons/tb';
import { RiUserSettingsLine } from 'react-icons/ri';
import { MdOutlineAnnouncement } from 'react-icons/md';
import { MdOutlineAdminPanelSettings } from 'react-icons/md';
import { TfiStatsUp } from 'react-icons/tfi';
import { PiUsersFourLight, PiExcludeSquareDuotone } from 'react-icons/pi';
import { SiGnuprivacyguard } from 'react-icons/si';

const links2 = [
  {
    text: 'add member',
    path: 'add-member',
    icon: <TbUsersPlus />,
  },
  {
    text: 'all members',
    path: '.',
    icon: <TbUsersGroup />,
  },

  {
    text: 'delegate profile',
    path: 'profile',
    icon: <RiUserSettingsLine />,
  },
  {
    text: 'death announcement',
    path: 'announcement',
    icon: <MdOutlineAnnouncement />,
  },

  {
    text: 'stats',
    path: 'stats',
    icon: <TfiStatsUp />,
  },

  {
    text: 'admin',
    path: 'admin',
    icon: <MdOutlineAdminPanelSettings />,
  },
  {
    text: 'all members-admin',
    path: 'all-members-admin',
    icon: <PiUsersFourLight />,
  },

  {
    text: 'all deceased-admin',
    path: 'all-deceased-admin',
    icon: <PiExcludeSquareDuotone />,
  },
  {
    text: 'register',
    path: 'register',
    icon: <SiGnuprivacyguard />,
  },
];
export default links2;
