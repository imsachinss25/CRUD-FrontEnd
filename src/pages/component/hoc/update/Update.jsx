import React,{Fragment, useState, useEffect} from 'react'



const Update = (props) => {
   
    console.log(props.location.state[0].Name);
    const [userRegistration, setUserRegistration] = useState({
        firstname: props.location.state[0].Name,
        lastname: props.location.state[0].LastName,
        phone: props.location.state[0].Phone,
        roll: props.location.state[0].Roll,
        address: props.location.state[0].Address
    });
   
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value);
        
        setUserRegistration({ ...userRegistration, [name]: value });    
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url="http://localhost:8000/students/"+ props.location.state[0].Key;
        const res= await fetch(url,{
            method: "PATCH",
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
           
            window.alert("Successfully Updated");
            document.location="/Display";
         
        }
 };


 
              
    return (
        <Fragment>
         <h2> Updation Form </h2>
            <form method ="POST" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="firstname">Firstname</label>
                    <input type="text" autoComplete="off" 
                      value={userRegistration.firstname}  
                      onChange={handleInput}
                     name="firstname" id="firstname"/>
                </div>

                <div className="field">
                    <label htmlFor="lastname">Lastname</label>
                    <input type="text" autoComplete="off" 
                      value={userRegistration.lastname}  
                      onChange={handleInput}
                     name="lastname" id="lastname"/>
                </div>

                <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input type="number" autoComplete="off" 
                      value={userRegistration.phone}  
                      onChange={handleInput}
                     name="phone" id="phone"/>
                </div>

                <div className="field">
                    <label htmlFor="roll">Roll no.</label>
                    <input type="number" autoComplete="off" 
                      value={userRegistration.roll}  
                      onChange={handleInput}
                     name="roll" id="roll"/>
                </div>
                <div className="field">
                    <label htmlFor="address">Address</label>
                    <input type="text" autoComplete="off" 
                      value={userRegistration.address}  
                      onChange={handleInput}
                     name="address" id="address"/>
                </div>
                <div>
                <button type="submit" >update</button>
                </div>
            </form>
 
        </Fragment>
    )   
}

export default Update