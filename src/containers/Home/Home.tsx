import * as React from 'react';

import AppIntro from '../../components/app-intro/app-intro';
import AppTitle from '../../components/app-title/app-title';

interface IHomeProps { }

export const Home: React.FC<IHomeProps> = () => (
  <div>
    <AppTitle />
    <AppIntro />
  </div>
);

