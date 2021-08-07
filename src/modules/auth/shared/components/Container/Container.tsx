import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { AuthModules, AuthView } from 'router/routes/auth';

import { useTranslation } from 'shared/utils/translation';

import { LanguageSwitcher } from '../../../../../shared/components/LanguageSwitcher';

import {
  SLink,
  SWelcome,
  SWrapper,
  SDescription,
  SImage,
  STitle,
  SForm,
  SFormTitle,
  SLanguageSwitcher,
} from './style';

export const Container: FC = ({ children }) => {
  const { t, ...r } = useTranslation();
  const { module = AuthModules.SIGHT_IN } = useParams<{ module: string }>();
  console.log(r);
  const to =
    module === AuthModules.SIGHT_UP ? AuthModules.SIGHT_IN : AuthModules.SIGHT_UP;

  const current =
    module === AuthModules.SIGHT_UP ? AuthModules.SIGHT_UP : AuthModules.SIGHT_IN;

  return (
    <SWrapper>
      <SWelcome>
        <STitle>{t('welcome')}</STitle>
        <SImage>Img</SImage>
        <SDescription>Title</SDescription>
        <SLink
          to={{
            pathname: `/${AuthView}/${to}`,
          }}
        >
          {t(to)}
        </SLink>
      </SWelcome>
      <SForm>
        <SFormTitle>{t(current)}</SFormTitle>
        <>{children}</>
      </SForm>
      <SLanguageSwitcher>
        <LanguageSwitcher />
      </SLanguageSwitcher>
    </SWrapper>
  );
};
