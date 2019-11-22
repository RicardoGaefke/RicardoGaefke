import React from 'react';
import Button from '@material-ui/core/Button';

const LucasNeves = (): React.ReactElement<any> => {
    return(
        <>
            <h1>My Name is Lucas Neves!</h1>
            <Button onClick={() => alert('Lucas Neves I am!')}>What?</Button>
        </>
    );
}

export default LucasNeves;