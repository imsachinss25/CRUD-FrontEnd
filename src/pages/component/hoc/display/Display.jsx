import React, { Component, Fragment , useState, useEffect} from 'react';
import { Table, Tag, Space } from 'antd';
import { Form, Input, Button, Radio } from 'antd';
import { useHistory } from 'react-router-dom';
import getStudents from '../services/student';

const Display = ()=> {

    let history = useHistory();
    const columns = [
        {
          title: 'Name',
          dataIndex: 'Name',
          key: 'Name',
          
        },
        {
          title: 'LastName',
          dataIndex: 'LastName',
          key: 'LastName',
        },
        {
          title: 'Phone',
          dataIndex: 'Phone',
          key: 'Phone',
        },
        {
            title: 'Roll',
            dataIndex: 'Roll',
            key: 'Roll',
          },
          {
            title: 'Address',
            dataIndex: 'Address',
            key: 'Address',
          },
          
          {
            title: ' Action ',
            key: '_id',
            dataIndex: '_id',
            render: (text) => (
                <span>
                  <a onClick={() => handleEditBtnClick(text)}>
                    <Button> edit </Button>
                  </a>
                </span>
              ),       
               
          },
      ];

      const handleEditBtnClick =(index)=>{
          data.map((value)=>{
              if(value._id==index)
              {
                  
                history.push({
                    pathname: "/Display/"+value._id,
                state: [{Name: value.Name,
                LastName: value.LastName,
                Phone: value.Phone,
                Roll: value.Roll,
                Address: value.Address,
                Key: value._id }]

                });
              }
          })
      }
    


    
    const [data,setData]=useState([]) ;
    useEffect(()=>{ 
        fetch("http://localhost:8000/students")
      .then((response) => response.json())
      .then((data) => setData(data) );
        },[]) 
        
    

        
   return(

 <Fragment>

<h1> Students Data </h1>

<Table columns={columns} dataSource={data}/>

</Fragment>
                        

     

   )
}

export default Display;
