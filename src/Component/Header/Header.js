import React from 'react';
import { Link } from "react-router-dom";
import { signOut} from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='bg-[green] py-2'> 
            <div className='container mx-auto text-[20px] space-x-3 text-white flex justify-center'>
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            {user?.email && <span>{user.displayName}</span>}
            {user?.email ? <button onClick={()=>signOut(auth)} className='bg-[red] text-white py-1 px-5'>sinout</button>:<Link to="/login">LogIn</Link>}
        </div>
        </div>
    );
};

export default Header;