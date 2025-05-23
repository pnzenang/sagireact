import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaSquarespace,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socialLinks = [
  {
    id: 1,
    site: 'http://facebook.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    site: 'http://instagram.com',
    icon: <FaInstagram />,
  },
  {
    id: 3,
    site: 'http://linkedin.com',
    icon: <FaLinkedin />,
  },

  {
    id: 4,
    site: 'http://squarespace.com',
    icon: <FaSquarespace />,
  },
  {
    id: 5,
    site: 'http://twitter.com',
    icon: <FaXTwitter />,
  },
];
export default socialLinks;
