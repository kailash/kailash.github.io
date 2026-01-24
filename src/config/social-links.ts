import type { SocialLink } from '@/data/types';

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/kailash',
    icon: 'github',
    bgColor: 'bg-gray-800',
    hoverColor: 'hover:bg-purple-600',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://in.linkedin.com/in/kailashadhikari',
    icon: 'linkedin',
    bgColor: 'bg-blue-700',
    hoverColor: 'hover:bg-purple-600',
  },
  {
    id: 'twitter',
    label: 'Twitter',
    url: 'https://twitter.com/kailash',
    icon: 'twitter',
    bgColor: 'bg-blue-500',
    hoverColor: 'hover:bg-purple-600',
  },
];
