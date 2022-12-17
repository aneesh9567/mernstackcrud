import React from 'react'
import {FormGroup,FormControl,InputLabel,Input,Typography,styled,Button} from'@mui/material';
import { useState } from 'react';
import { addUser } from '../service/api';


const Container=styled(FormGroup)`
width:50%;
margin:5% auto 0 auto;
& > div{
    margin-top:20px;
}
`;
//margin 5%-means top,,auto means margin right auto(auto will align it center),,bottom zero,,left auto
const defaultValue={
    name:'',
    username:'',
    email:'',
    phone:''
}
const AddUser = () => {
    const[user,setUser]=useState(defaultValue)
    
    const onValueChange = (e) =>{
        setUser({...user,[e.target.name]:e.target.value});
    }

    const addUserDetails= async ()=>{
       await addUser(user);
    }

  return (
    <Container>
        <Typography variant='h4'>Add User</Typography>
        <FormControl>
            <InputLabel>Name</InputLabel>
            <Input name='name' onChange={(e)=>onValueChange(e)} />
        </FormControl>
        <FormControl>
            <InputLabel>UserName</InputLabel>
            <Input name='username' onChange={(e)=>onValueChange(e)} />
        </FormControl>
        <FormControl>
            <InputLabel>Email</InputLabel>
            <Input name='email' onChange={(e)=>onValueChange(e)} />
        </FormControl>
        <FormControl>
            <InputLabel>Phone</InputLabel>
            <Input name='phone'onChange={(e)=>onValueChange(e)} />
        </FormControl>
        <FormControl>
            <Button variant='contained' onClick={()=>addUserDetails()}>Add User</Button>
        </FormControl>
    </Container>
  )
}

export default AddUser