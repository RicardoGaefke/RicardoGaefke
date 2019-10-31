import React, { Component } from 'react';
import MyError from './MyError';

export interface IMyComponentProps {
  children?: JSX.Element
}

export interface IMyComponentState {
  hasError: boolean
}

export default class MyErrorBoundary extends Component<IMyComponentProps, IMyComponentState, any> {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): any {
    return { hasError: true };
  }

  clearError = (): void => {
    this.setState({
      hasError: false,
    });
  };

  conponentDidCatch = (error, info): void => {
    // eslint-disable-next-line no-console
    console.log(error, info);
  }

  render(): any {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) return <MyError clearError={this.clearError} />;
    return children;
  }
}
