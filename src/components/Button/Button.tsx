import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import LottieView from 'lottie-react-native';

import Typography from '../Typography';

import { MainButton } from './button.styles';

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  loading?: boolean;
}

const Button = (props: ButtonProps) => {
  const { title, loading, ...restProps } = props;

  return (
    <MainButton {...restProps} activeOpacity={0.9} disabled={loading}>
      {loading ? (
        <LottieView
          loop
          autoPlay
          style={{
            width: 70,
            height: 70,
            backgroundColor: 'transparent',
          }}
          source={require('@assets/lottie/loading')}
        />
      ) : (
        <Typography variant='H6Headline' color='white'>
          {title}
        </Typography>
      )}
    </MainButton>
  );
};

export default Button;
