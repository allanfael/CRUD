import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  height: 120px;
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.primaryColor};
`;

export const RowWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 6px;
`;
