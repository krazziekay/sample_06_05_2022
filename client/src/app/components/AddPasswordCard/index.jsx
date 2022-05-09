import React, { useState } from 'react';
import { useAddPasswordMutation } from '../../__generated/schema';
import { useForm, Controller } from 'react-hook-form'; 


const AddPasswordCard = () => {
    const [addNewPassword, setAddNewPassword] = useState(false);
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
        alert('Successfully Added');
      } catch(e) {
        alert('Failed to Add', JSON.stringify(e));
      }
    
      setAddNewPassword(false);
      reset();
    };
  
    return (
        <>
        <div onClick={() => {
            setAddNewPassword(true);
            }}>
            Add Password
        </div>
        <hr />
        {addNewPassword && (
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                control={control}
                name="domain"
                label="Domain"
                rules={{ required: true }}
                render={({ field }) => (
                    <div>
                    <label>Domain</label>
                    <input type="text" {...field}/>
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
                    <label>Email</label>
                    <input type="email" {...field}/>
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
                    <label>Password</label>
                    <input type="text" {...field}/>
                    </div>
                )}
                />
                <input type="submit" value="Save" />
            </form>
        )}
        </>
    );
};
  

export default AddPasswordCard;