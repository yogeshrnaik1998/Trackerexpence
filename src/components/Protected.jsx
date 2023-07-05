import { Navigate } from "react-router-dom";

const Protected = ({Child}) => {


    let verify = ()=>{
        if(localStorage.getItem("expenseuserdata")==null){
            return false;
        }
        else{
            return true;
        }
    }
    return ( 
        <>
        {verify() ? <Child/> : <Navigate to="/login"/>};
        </>
     );
}
 
export default Protected;