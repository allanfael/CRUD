import styled from 'styled-components/native';

import { proportion } from '@utils/proportion';

export const Container = styled.View`
  flex: 1;
  padding: ${proportion(2)}px;
  padding-top: ${proportion(4)}px;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs({
  behavior: 'position',
  enabled: true,
})`
  flex: 1;
`;
