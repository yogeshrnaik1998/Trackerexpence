import { useRef} from "react";
import Signup from "./Signup";
import { useNavigate,Link } from "react-router-dom";

const Login = () => {

    let username = useRef();
    let pass = useRef();

   let nav =useNavigate();
    
    let handellogin = (e)=>{
         e.preventDefault();
        let users = JSON.parse(localStorage.getItem("expenseuserdata"));
        let user= users.find((user)=>{return user.username==username.current.value});
        console.log(user);
        
        if(user!=null){
            if(user.password==pass.current.value)
            {
                console.log(user);
                localStorage.setItem("singleuser",JSON.stringify(user));
                console.log(user[0]);
                nav("/home");
            }
            else{
                alert("password incorrect");
            }
            
        }
        else{
            alert("user not found");
        }


        // fetch('https://api.myjson.online/v1/records/cca4c1dd-7e34-427d-a959-f1daf8d34c42')
        // .then((res)=>{return res.json()})
        // .then((data)=>{
        //       let user = data.data.users.find((user)=>{ return user.username==username.current.value});
        //     console.log(data.data);
        // })
      
    }
    return ( 
        <div className="login">
            <h1 align="center">Login</h1>
            <form action="" id="login" onSubmit={handellogin}>
                <input type="text" placeholder="username" ref={username} />
                <input type="text" placeholder="password" ref={pass}/>
                <input type="submit" />
                <p align="center"> do you want to sign in<Link to="/"> Sign in</Link></p>
            </form>
        </div>
     );
}
 
export default Login;
