import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
    const [user, setUser] = useState("");
    const {id} = useParams();

    useEffect(() => {
        const fetchSingle = async() => {
            const response = await fetch(`https://reqres.in/api/users/${id}`);
            const fetchData = await response.json();
            setUser(fetchData.data);
        }
        fetchSingle()
    }, [id]);

    return(
        <>
            <h2>{user.first_name}</h2>
            <h3>{user.email}</h3>
            <img src={user.avatar} alt="Profile"></img>
        </>
    )
};

export default Profile;





