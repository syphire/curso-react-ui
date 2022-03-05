import Image from 'next/image';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

import { container, GlobalStyles, wrapper, logoContainer, form, field, button } from './styles';

export const Index = () => {
  const [nickname, setNickname] = useState('');

  return (
    <>
      <GlobalStyles />
      <div css={container}>
        <div css={wrapper}>
          <div css={logoContainer}>
            <Image src="/logo.svg" width={200} height={200} alt="" />
          </div>

          <form css={form} action="/api/sign-in">
            <TextInput css={field} name="nickname" value={nickname} onChange={setNickname} />
            <Button css={button} variant="primary">
              <FormattedMessage id="landing.sign-in" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
