import React, { useState } from 'react';
import { Paper, Table, TableContainer, TableRow, TableHead, TableBody, TableCell, Typography, Alert, Snackbar } from '@mui/material';
import { useGetPasswordQuery, useDeletePasswordMutation } from '../../__generated/schema';
import { styles } from './index.styles';

const defaultAlert = {
  visibility: false,
  type: '',
  message: '',
};

const PasswordList = () => {
    const {data, loading} = useGetPasswordQuery();
    const [alert, setAlert] = useState(defaultAlert);
    const [deletePasswordMutation] = useDeletePasswordMutation();
    const remove = async (p) => {
        try {
            await deletePasswordMutation({
                variables: {
                    domain: p.domain,
                    email: p.email,
                    pwd: p.pwd,
                },
                refetchQueries: [
                    'getPassword'
                ]
            });
            setAlert({
                visibility: true,
                type: 'success',
                message: 'Successfully removed',
            });
        } catch(e) {
            setAlert({
                visibility: true,
                type: 'error',
                message: 'Failed to remove',
            });
        }
    }

    return (
        <div style={styles.container}>
        {loading ? (
            <Typography variant="h1" gutterBottom>Loading...</Typography>
        ) : (
            <TableContainer component={Paper}>
                <Table>
                    <TableHead >
                        <TableRow>
                            <TableCell style={styles.bolder}>Domain</TableCell>
                            <TableCell style={styles.bolder}>Email</TableCell>
                            <TableCell style={styles.bolder}>Password</TableCell>
                            <TableCell style={styles.bolder}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.password && data.password.map(p => (
                            <TableRow>
                                <TableCell>{p.domain}</TableCell>
                                <TableCell>{p.email}</TableCell>
                                <TableCell>{p.pwd}</TableCell>
                                <TableCell style={styles.icon} onClick={() => remove(p)}>X</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Snackbar 
                    open={alert.visibility}
                    autoHideDuration={3000}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                    onClose={() => setAlert(defaultAlert)}
                >
                    <Alert variant="outlined" severity={alert.type}>
                    {alert.message}
                    </Alert>
                </Snackbar>
            </TableContainer>     
        )}
        </div>
    )
};

export default PasswordList;
  