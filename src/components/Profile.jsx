import { useEffect, useState } from "react";

const Profile = () => {
    
    let [profile,setprofile]=useState(null);
    useEffect(()=>{
       let user = JSON.parse(localStorage.getItem("singleuser"));
       setprofile(user);
    },[])
    
    return ( 
        <div className="profile-container">
            {profile && 
            
            <div className="profile">
                <h2>PROFILE</h2>
                <h1>Name: {profile.username}</h1>
                <h2>Email: {profile.email}</h2>
                <h2>Phno:{profile.phone}</h2>
                <h2>Balance:{profile.balance}</h2>
                <h2>Expence:{profile.expense}</h2>
            </div>
            
            }
        </div>
     );
}
 
export default Profile;