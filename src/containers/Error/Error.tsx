import React from 'react';

import AppIntro from '../../components/app-intro/app-intro';
import AppTitle from '../../components/app-title/app-title';

import { logException } from '../../utils/analytics';

type ErrorPageProps = {
  statusCode?: number;
};

const DEFAULT_ERROR_TEXT = 'Упс, что-то не так 😓';
const DEFAULT_ERROR_LINK_TITLE = 'На главную';

const ErrorPage: React.FC<ErrorPageProps> = ({ statusCode }: ErrorPageProps) => {
  const errorDescription = statusCode === undefined ? '' : ` ${statusCode} `;

  React.useEffect(() => {
    logException(errorDescription, true);
  });

  return (
    <div>
      <AppTitle title={DEFAULT_ERROR_TEXT} />
      <AppIntro
        description={errorDescription}
        link={{
          href: '/',
          target: '_self',
          title: DEFAULT_ERROR_LINK_TITLE
        }}
      />
    </div>
  );
};

export default ErrorPage;
