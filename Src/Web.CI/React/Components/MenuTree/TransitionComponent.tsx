import React from 'react';
// eslint-disable-next-line no-unused-vars
import { TransitionProps } from '@material-ui/core/transitions/transition';
import { useSpring, animated } from 'react-spring';
import Collapse from '@material-ui/core/Collapse';

const TransitionComponent = (props: TransitionProps): React.ReactElement<any> => {
  const style = useSpring({
    from: { opacity: 0, transform: 'translate3d(20px,0,0)' },
    // eslint-disable-next-line react/destructuring-assignment
    to: { opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)` },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
};

export default TransitionComponent;
