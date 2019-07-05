import React from 'react';
import MyPolicyPT from '../../Components/MyPolicy/MyPolicyPT';
import MyPolicyENG from '../../Components/MyPolicy/MyPolicyENG';
import { useStateValue } from '../../Utils/StateProvider';


const MyPolicy = (): any => {
  const [{ language }] = useStateValue();

  return (
    <div>
      { (language === 'PT') ? <MyPolicyPT /> : <MyPolicyENG /> }
    </div>
  );
};

export default MyPolicy;
