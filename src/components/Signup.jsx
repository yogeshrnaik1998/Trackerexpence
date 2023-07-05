import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Signup = () => {
    let username=useRef();
    let email = useRef();
    let phno = useRef();
    let pass = useRef();
   let nav= useNavigate();
  
    
    let handlesignup = (e)=>{
        e.preventDefault();
        let userdetails={
            username:username.current.value,
            email:email.current.value,
            password:pass.current.value,
            phone:phno.current.value,
            balance:0,
            expense:0,
            savings:0,
            historydata: []
            
        }
       
        let data = localStorage.getItem("expenseuserdata");
        
        if(data == null){
            let users = [];
            users.push(userdetails);
            let user = JSON.stringify(users);
            localStorage.setItem("expenseuserdata", user);
            nav("/login");
        }
        else{

            let users=JSON.parse(data);
            users.push(userdetails);
            localStorage.setItem("expenseuserdata",JSON.stringify(users) );
            nav("/login");
        }

        
        // var requestOptions = {
        //     method: 'POST',
        //     headers: {"Content-Type":"application/json"},
        //     body: JSON.stringify(userdetails),
            
        //                         };

        // fetch("https://api.myjson.online/v1/records/cca4c1dd-7e34-427d-a959-f1daf8d34c42/data", {
        //                                                                             method : "POST",
        //                                                                             headers : {"Content-Type" : "application/json"},
        //                                                                             body : JSON.stringify(userdetails)
        // })
        // .then(()=>{
        //     alert("data added");
        // })
        
    }


    return ( 
        <div className="signup">
            <h1 align="center">Signup</h1>
            <form id="signupform" onSubmit={handlesignup}>
                <input type="text" placeholder="username" ref={username}/>
                <input type="email" placeholder="email" ref={email}/>
                <input type="tel" placeholder="Phone Number"ref={phno} />
                <input type="password" placeholder="Password" ref={pass}/>
                <input type="password" placeholder="Confirm Password" />
                <input type="submit" id="submit"/>
                <p align="center">Already have an account ? <Link to="/login">Sign in</Link></p>
            </form>
        </div>
     );
}
 
export default Signup;