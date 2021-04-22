import React,{Fragment, useState, useEffect} from 'react'
import useHistory from 'react-router-dom';

import { Form, Input, Button, Radio } from 'antd';



const Registration = () => {

    
        const [form] = Form.useForm();
        const formLayout = 'horizontal';
      
    
        const layout = {
            labelCol: {
              span: 2,
            },
            wrapperCol: {
              span: 10,
            },
          };
          const tailLayout = {
            wrapperCol: {
              offset: 2,
              span: 16,
            },
          };
        

    const [userRegistration, setUserRegistration] = useState({
        firstname: "",
        lastname: "",
        phone: "",
        roll: "",
        address: ""
    });
   
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        
        setUserRegistration({ ...userRegistration, [name]: value });    
    }

    const handleSubmit = async (e) => {
        
        const res= await fetch("http://localhost:8000/students",{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                Name: userRegistration.firstname, 
                LastName: userRegistration.lastname, 
                Phone: userRegistration.phone, 
                Roll: userRegistration.roll, 
                Address: userRegistration.address

            })     
        });

        
       
        const data = await res.json();
        if(!data)
        {
            console.log("errrorrr");
        }
        else
        {
           
            window.alert("Successfully added");
            document.location="/Display";
         
        }
 };


 
              
    return (
        <Fragment>
         <h2> Registration Form </h2>
            
          
            <Form  form={form} method ="POST" onFinish={handleSubmit} {...layout} >
        <Form.Item label="Registration Form" name="layout" {...layout}>
          
        </Form.Item>
        <Form.Item label="First Name">
          <Input placeholder="First Name" autoComplete="off" 
                      value={userRegistration.firstname}  
                      onChange={handleInput}
                     name="firstname" id="firstname"/>
        </Form.Item>
        <Form.Item label="Last Name">
          <Input placeholder="Last Name" autoComplete="off" 
                      value={userRegistration.lastname}  
                      onChange={handleInput}
                     name="lastname" id="lastname"/>
        </Form.Item>
        <Form.Item label="Phone">
          <Input placeholder="Phone" type="number" autoComplete="off" 
                      value={userRegistration.phone}  
                      onChange={handleInput}
                     name="phone" id="phone"/>
        </Form.Item>
        <Form.Item label="Roll">
          <Input placeholder="Roll" type="number" autoComplete="off" 
                      value={userRegistration.roll}  
                      onChange={handleInput}
                     name="roll" id="roll"/>
        </Form.Item>
        <Form.Item label="Address">
          <Input placeholder="Address" ype="text" autoComplete="off" 
                      value={userRegistration.address}  
                      onChange={handleInput}
                     name="address" id="address"/>
        </Form.Item>
        
        <Form.Item {...tailLayout}>
          <Button htmlType="submit">Submit </Button>
          </Form.Item>
      </Form> 
            
        </Fragment>
    )   
}


export default Registration
