import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";

function User(){
    const [userList, setUsersList] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const fetchData = await fetch(`https://reqres.in/api/users?page=1`);
            const response = await fetchData.json();
            setUsersList(response.data);
        }
        fetchUser()
    }, []);

    return (
        <>
            <h1>Users</h1>
            <div>
                {userList.map((item) => (
                    <div key={item.id}>
                        <h2>{item.first_name}</h2>
                        <h3>{item.email}</h3>
                        <Link to={`/user/${item.id}`}>
                            <img src={item.avatar} alt='Individual User'></img>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
};

export default User;


