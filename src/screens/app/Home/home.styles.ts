import styled from 'styled-components/native';

export const Container = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: 12,
  },
})`
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
