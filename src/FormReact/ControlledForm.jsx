import { Fragment, useState } from "react";

const ControlledForm=()=>
    {
        const [user,setUser]=useState("")
        const [email,setEmail]=useState("");
        const[pass,setPass]=useState("");
        const[btn,setBtn]=useState("");


        const radiobtn=["Male","Female"];
    const handleForm=(e)=>{
        e.preventDefault();
        console.log("first");
        console.log("email");
        console.log("password")
    }
     const handledButton=(e)=>{
        if(e.target.checked){
            setBtn(e.target.value)
        }

     }
     console.log(btn)

    const handedInput=(e)=>{
        
        setUser(e.target.value)
    }
    console.log(user)
    const handleemail=(e)=>{
        setEmail(e.target.value)
    }
     console.log(email)
    const handlepassword=(e)=>{
        setPass(e.target.value)
    }
     console.log(pass)
    return(
        <div>
            <form action="" onSubmit={handleForm}>
                {/* <input type="text" placeholder="Enter your name" onChange={handedInput}/><br/>
                <input type="email" placeholder="Enter email" onChange={handleemail}/><br/>
                <input type="text" placeholder="Enter password" onChange={handlepassword}/> */}
                {/* {
                    radiobtn.map((ele,index)=>{
                        return(
                            <Fragment key={index+1}>
                                <label htmlFor={ele}>
                                    <input type="radio" name="gender" value={ele} id={ele} onChange={handledButton} />
                                </label>

                            </Fragment>
                        )
                    })
                } */}
                {/* <input type="radio" name="btn" id="" value="male" onChange={handledButton} />Male<br/>
                 <input type="radio" name="btn" id="" value="female" onChange={handledButton} />FeMale<br/>
                 <br/> */}
                 <datalist id="select">
                    <option value="item1" className="value"></option>
                    <option value="item2" className="value"></option>
                    <option value="item3" className="value"></option>
                    <option value="item4" className="value"></option>
                    <option value="item5" className="value"></option>
                 </datalist>
                <br/>
                <button >Submit</button>

            </form>


        </div>
    )
}
export default ControlledForm