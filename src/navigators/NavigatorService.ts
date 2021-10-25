import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(routeName: string, params?: any) {
  navigationRef.current?.navigate(routeName, params);
}

export function goBack(): void {
  navigationRef.current?.goBack();
}
