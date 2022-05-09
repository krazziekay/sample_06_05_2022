import React from 'react';
import { useGetPasswordQuery } from '../../__generated/schema';


const PasswordList = () => {
    const {data, loading} = useGetPasswordQuery();

    return (
        <>
        {loading ? (
            <div>Loading...</div>
        ) : (
            <>
            {data.password.map(p => (
                <div>{p.domain} - {p.email} - {p.pwd}</div>
            ))}
            </>     
        )}
        </>
    )
};

export default PasswordList;
  