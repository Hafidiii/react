import React, {useState} from 'react';
import SignIn from "../signin";
import Signup from "../signup";

const LoginComponent = () => {

    const [page, setPage] = useState('signIn');

    return (
        page === 'signIn' ? <SignIn setPage={setPage}/> : <Signup setPage={setPage}/>
    );
};

export default LoginComponent;
