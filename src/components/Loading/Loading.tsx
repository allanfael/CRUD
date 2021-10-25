import React from 'react';
import { ViewStyle } from 'react-native';

import { Loading as Load } from './loading.styles';

interface LoadingProps {
  style: ViewStyle;
}

const Loading = (props: LoadingProps) => {
  return <Load style={props.style} />;
};

export default Loading;
