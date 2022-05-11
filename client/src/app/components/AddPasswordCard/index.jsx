import React, { useState } from 'react';
import { useAddPasswordMutation } from '../../__generated/schema';
import { useForm, Controller } from 'react-hook-form'; 
import { Button, Card, CardContent, TextField, Alert, Snackbar } from '@mui/material';
import { styles } from './index.styles';

const defaultAlert = {
  visibility: false,
  type: '',
  message: '',
};

const AddPasswordCard = () => {
    const [addNewPassword, setAddNewPassword] = useState(false);
    const [alert, setAlert] = useState(defaultAlert);
    const { handleSubmit, reset, control, formState: { errors } } = useForm();
    const [addPassword, {loading}] = useAddPasswordMutation();
  
    const onSubmit = async (data) => {
      try {
        await addPassword({
          variables: {
            domain: data.domain,
            pwd: data.password,
            email: data.email
          },
          refetchQueries: [
            'getPassword'
          ]
        });
        setAlert({
          visibility: true,
          type: 'success',
          message: 'Successfully Added',
        });
      } catch(e) {
        setAlert({
          visibility: true,
          type: 'error',
          message: 'Failed to add',
        });
      }
    
      setAddNewPassword(false);
      reset();
    };
  
    return (
        <>
          {addNewPassword ? (
              <Card>
                <CardContent style={styles.container}>
                  <Button style={styles.closeBtn} variant="text" onClick={() => setAddNewPassword(false)}>x</Button>
                  <form style={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
                      <Controller
                      control={control}
                      name="domain"
                      label="Domain"
                      rules={{ required: true }}
                      render={({ field }) => (
                          <div>
                            <TextField label="Domain" variant="standard" {...field} />
                          </div>
                      )}
                      />
                      <Controller
                      control={control}
                      name="email"
                      label="Email"
                      rules={{ required: true }}
                      render={({ field }) => (
                          <div>
                            <TextField label="Email" variant="standard" {...field} />
                          </div>
                      )}
                      />
                      <Controller
                      control={control}
                      name="password"
                      label="Password"
                      rules={{ required: true }}
                      render={({ field }) => (
                          <div>
                           <TextField label="Password" type="password" variant="standard" {...field} />
                          </div>
                      )}
                      />
                      <br />
                      <br />
                      <Button type="submit" variant="contained">Save</Button>
                  </form>
                </CardContent>
              </Card>
          ) : (
            <Button variant="contained" onClick={() => {
                setAddNewPassword(true);
                }}>
                Add Password
            </Button>
          )}
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
        </>
    );
};
  

export default AddPasswordCard;