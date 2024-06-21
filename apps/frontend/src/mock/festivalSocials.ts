export type MockSocialLinks = {
  platform: string;
  url: string;
  icon: any;
};

import facebookIcon from '../assets/facebook.svg';
import twitterIcon from '../assets/twitter.svg';
import instagramIcon from '../assets/instagram.svg';

export const socialLinks: MockSocialLinks[] = [
  { platform: 'Facebook', url: 'https://facebook.com', icon: facebookIcon },
  { platform: 'Twitter', url: 'https://twitter.com', icon: twitterIcon },
  { platform: 'Instagram', url: 'https://instagram.com', icon: instagramIcon },
];
