import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding: 12px;
`;

export const HeaderButton = styled.TouchableOpacity.attrs({
  hitsSlop: { top: 20, bottom: 20, left: 20, right: 20 },
  activeOpacity: 0.8,
})`
  justify-content: center;
`;

export const RowWrapper = styled.View`
  flex-direction: row;
`;
