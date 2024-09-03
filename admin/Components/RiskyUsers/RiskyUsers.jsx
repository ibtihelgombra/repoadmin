import React from 'react'
import { useState , useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RiskyUsers = () => {
    const [allusers, setAllUsers] = useState([]);
    const CONSUMPTION_THRESHOLD = 500; 

   
    const fetchUsers = async () => {
        try {
            const resp = await fetch('http://localhost:4000/users');
            const data = await resp.json();
            setAllUsers(data);
        } catch (error) {
            toast.error('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    
    const riskyUsers = allusers.filter(user => user.consommation > CONSUMPTION_THRESHOLD);

    return (
        <div className='list-user'>
            <h1>Utilisateurs à risque</h1>
            <div className='listproduct-format-main'>
                <p>Nom</p>
                <p>Email</p>
                <p>Consommation</p>
               
            </div>
            <div className='listproduct-allproducts'>
                <hr />
                {riskyUsers.map((user) => (
                    <React.Fragment key={user._id}>
                        <div className='listproduct-format-main listproduct-format'>
                            <p>{user.name}</p>
                            <p>{user.email}</p>
                            <p>~{user.consommation}kWh</p>
                            
                        </div>
                        <hr />
                    </React.Fragment>
                ))}
            </div>
            <ToastContainer/>
        </div>
    );
};

export default RiskyUsers