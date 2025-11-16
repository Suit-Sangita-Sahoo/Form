import { useState } from "react"

const SimpleControlledForm=()=>{
    const [formdata,setFormdata]=useState({
        username:"",    
        email:"",
        password:"",
        btn:"",
        date:"",
        time:""
    })
    const {username,email,password,btn,date,time}=formdata
    const handleForm=(e)=>{
        e.preventDefault();
        console.log(formdata)
    }
    const handleInput=(e)=>{
        const {name,value}=e.target
        setFormdata({...formdata,[name]:value})
    }
    return(
        <form action="" onSubmit={handleForm}>

            <input type="text" placeholder="Enter your name" name="username" onChange={handleInput} value={username} /><br/>
            <input type="email" placeholder="Enter your email" name="email"   onChange={handleInput} value={email}/><br/>
            <input type="password" placeholder="Enter your password" name="password"   onChange={handleInput} value={password}/><br/>
            <input type="radio" name="btn" onChange={handleInput} value={btn}/>
            <input type="date" name="date" placeholder="Enter date" onChange={handleInput} value={date}/>
            <input type="time" name="time" placeholder="Enter current time" onChange={handleInput} value={time}/>

            <button>Submit</button>
        </form>

    )
}
export default SimpleControlledForm