import React from 'react';
import { TextInputProps, ViewStyle } from 'react-native';

import Typography from '../Typography';

import { Container, Input as TextInput, Line } from './input.styles';

interface InputProps extends TextInputProps {
  label?: string;
  containerStyle?: ViewStyle;
  error?: string;
}

const Input = (props: InputProps) => {
  const { label, containerStyle, error, ...restProps } = props;

  return (
    <Container style={containerStyle}>
      <Typography variant='Label'>{label}</Typography>
      <TextInput {...restProps} />
      <Line />
      {!!error && (
        <Typography color='danger' variant='Label'>
          {error}
        </Typography>
      )}
    </Container>
  );
};

export default Input;
