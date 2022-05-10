import { Paper, Table, TableContainer, TableRow, TableHead, TableBody, TableCell, Typography } from '@mui/material';
import React from 'react';
import { useGetPasswordQuery } from '../../__generated/schema';


const PasswordList = () => {
    const {data, loading} = useGetPasswordQuery();

    return (
        <>
        {loading ? (
            <Typography variant="h1" gutterBottom>Loading...</Typography>
        ) : (
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Domain</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Password</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.password && data.password.map(p => (
                            <TableRow>
                                <TableCell>{p.domain}</TableCell>
                                <TableCell>{p.email}</TableCell>
                                <TableCell>{p.pwd}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                
            </TableContainer>     
        )}
        </>
    )
};

export default PasswordList;
  