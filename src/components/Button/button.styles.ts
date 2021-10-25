import styled from 'styled-components/native';

import { proportion } from '@utils/proportion';

export const MainButton = styled.TouchableOpacity`
  height: ${proportion(6)}px;
  width: 100%;
  background: ${({ theme }) => theme.secondaryColor};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;
