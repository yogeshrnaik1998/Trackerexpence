import { useEffect, useRef, useState } from "react";
import{Link} from "react-router-dom";

const Home = () => {

    let amount = useRef();
    let reson = useRef();
    let [savings,setsavings]=useState(0);
    let [expense,setexpense]=useState(0);
    let [balance,setbalance]=useState(0);
    let [table, settable]=useState(null);
   

    useEffect(()=>{
     let user =   JSON.parse(localStorage.getItem("singleuser"));
     console.log(user.balance);
     setbalance(user.balance);
     setexpense(user.expense);
     setsavings(user.savings);
     settable(user.historydata);
    },[])
    let handeldata =(e)=>{
        e.preventDefault();
        // fetch('https://run.mocky.io/v3/fcc57981-ac59-4fdc-bd28-b4a8cecef999')
        // .then(response => response.json())
        // .then(json => console.log(json))
            let amount = document.getElementById("amount").value;
            console.log(amount);
            let type = document.getElementsByClassName("type");
            // let expense = document.getElementById("exp").innerText;
            // let Savings = document.getElementById("sav").innerText;
            // let balance = document.getElementById("balance").innerText;
            let settype = null;
            let dbamount=null;
                for (let i = 0; i < type.length ; i++) {
                if(type[i].checked){
                    settype=type[i].value;
                    // console.log(settype);
                }
                    
                }
                if(settype=="expense"){
                  
                   expense=Number(expense)-Number(amount);
                   setexpense(expense);
                   dbamount=-amount;
                }
                else{
                   
                    savings=Number(savings)+Number(amount);
                   setsavings(savings);
                   dbamount=+amount;

                }
               
                balance=Number(savings)+Number(expense);
                setbalance(balance);
                    
               let reson =  document.getElementById("reson").value;
                console.log(reson);
                let single = JSON.parse(localStorage.getItem("singleuser"));
                let user=JSON.parse(localStorage.getItem("expenseuserdata"));
                let index=0;
                 for(let i=0; i<user.length; i++){
                    if(user[i].username==single.username){
                        
                        let historydata={
                            data:dbamount,
                            dbreson:reson
                        }
                        user[i].historydata.push(historydata);
                        user[i].balance=balance;
                        user[i].expense=expense;
                        user[i].savings=savings;
                        localStorage.setItem("expenseuserdata",JSON.stringify(user));
                        localStorage.setItem("singleuser",JSON.stringify(user[i]));
                    }
                 }
               
               
                
             console.log(user[0]);
              settable(user[0].historydata);
            //   setnumber(user[0].historynumber);
            //   console.log(table);
            //   console.log(number);
               
                 
    }
    return ( 
        <div className="home" >
            <div className="navbar">
                <div className="profile">
                    <Link to="/profile">Profile</Link>
                </div>
               
            </div>
            <h1 align="center">Expense Tracker</h1>
            <div className="expensetracker">
                <section className="section1">
                   <div className="accounts">
                        <div className="expense">
                            <h5>Expence</h5>
                            <h2 id="exp"> ₹{expense}</h2>
                        </div>
                        <div className="savings">
                            <h5>Savings</h5>
                            <h2 id="sav">₹{savings}</h2>
                        </div>
                   </div>
                   
                    <div className="balance-container">
                        <div className="balance">
                            <h5>Balance</h5>
                            <h2 id="balance">₹{balance}</h2>
                        </div>
                    </div>
                    <div className="add-container">
                    <div className="add">
                        <h3 className="add">Add</h3>
                        <form className="calculation" onSubmit={handeldata}>
                        <input type="number" id="amount" placeholder="Enter the amount" className="inputs" ref={amount} required /><br /><br />
                        <input type="text"  id="reson" placeholder="Note"  className="inputs" ref={reson} required/>
                        <div >
                            <input type="radio" name="type" value="Savings" id="xs" className="type" required/>
                            <label for="xs">Savings</label>
                        </div>
                        <div>
                            <input type="radio" name="type" value="expense" id="s" className="type" required/>
                            <label for="s">expense</label>
                        </div>
                        <input type="submit" className="submit" />
                        </form>
                    </div>
                    </div>
                </section>
                <section className="section2">
                <div className="records">
                    <table border="0px" cellPadding="0px" cellSpacing="60px">
                        <thead>
                            <th>NOTE</th>
                            <th>AMOUNT</th>
                        </thead>
                    <tbody>
                        {table!==null &&
                          table.map((e)=>{
                            if(e.data<0){
                                return(
                                    <tr>
                                    <td id="negative" color="red" >{e.data}</td>
                                    <td>{e.dbreson}</td>
    
                                </tr>)
                            }
                            return(
                                <tr>
                                <td id="positive" color="red" >{e.data}</td>
                                <td>{e.dbreson}</td>

                            </tr>
                            );

                           
                           
                          })
                          
                           
                        }
                    </tbody>
                    </table>
                </div>
                </section>
            </div>
        </div>
        
     );
}
 
export default Home;