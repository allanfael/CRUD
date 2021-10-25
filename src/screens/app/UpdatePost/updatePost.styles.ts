import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 12px;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

export const HeaderButton = styled.TouchableOpacity.attrs({
  hitsSlop: { top: 20, bottom: 20, left: 20, right: 20 },
  activeOpacity: 0.8,
})`
  justify-content: center;
`;
