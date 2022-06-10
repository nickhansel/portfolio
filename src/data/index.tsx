import React from 'react';
import Greeter from '../views/Greeter';
import Diploma from '../views/Diploma';
import { PageLink, TabLink } from '../models';
import { jsOrange, midBlue, green, pink, pyYellow } from '../theme/colors';

import staticData from './json/static.json';
import contactData from './json/contact.json';
import sweData from './json/swe.json';
import baData from './json/ba.json';
import pkg from '../../package.json';

export const pages: PageLink[] = [
  {
    name: 'Home',
    url: '/',
    icon: 'home',
    isInternal: true,
    comp: () => (
      <Greeter
        staticData={staticData}
        contactData={contactData}
        repoUrl={pkg.repository.url}
      />
    ),
  },
  
];

export const tabs: TabLink[] = [
  {
    name: 'experience.py',
    url: '/projects-config',
    icon: ['fab', 'python'],
    color: pyYellow,
    mdFileName: 'experience',
  },
  {
    name: 'skills.js',
    url: '/skills',
    icon: ['fab', 'js'],
    color: jsOrange,
    mdFileName: 'skills',
  },
  {
    name: '.educationrc',
    url: '/education',
    icon: 'university',
    color: midBlue,
    mdFileName: 'education',
  },
  {
    name: 'projects.config',
    url: '/projects',
    icon: 'sliders-h',
    color: green,
    mdFileName: 'projects',
  },
];
