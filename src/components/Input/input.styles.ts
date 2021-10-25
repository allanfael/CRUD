import styled from 'styled-components/native';

export const Container = styled.View``;

export const Input = styled.TextInput`
  width: 100%;
  min-height: 20px;
  background-color: transparent;
  padding: 4px;
  font-family: Muli_400Regular;
  font-size: 14px;
  color: ${({ theme }) => theme.primaryColor};
`;

export const Line = styled.View`
  width: 100%;
  height: 0.4px;
  background-color: ${({ theme }) => theme.primaryColor};
  margin-bottom: 2px;
`;
