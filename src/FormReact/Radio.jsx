import { Fragment, useRef } from "react"

const Radio=()=>{

    const maleref=useRef();
    const Femaleref=useRef();
    const otherref=useRef();
    const input1=useRef();
    const htmlref=useRef();
    const cssref=useRef();
    const reactref=useRef();
    const bookstrapref=useRef();
    const skills=useRef([]);
    const myskill=useRef([]);

    const skillvalue=["html","javascript","react","bootstrap","english","git","github","node js","docker","english"];
    const selectedvalue=["html","javascript","react","bootstrap","english","git","github","node js","docker","english"];
    const handleSubmit = (e) => 
        {
    e.preventDefault();


    const gender=maleref.current.checked?"male":Femaleref.current.checked?"female":otherref.current.checked?"other":"";
    console.log(gender)
    maleref.current.checked=false
    Femaleref.current.checked=false
    otherref.current.checked=false
    const username=input1.current.value

    const skill=[]
    if(htmlref.current.checked)
        
        skill.push(htmlref.current.value)
    
    if(cssref.current.checked)
    
        skill.push(cssref.current.value)
    
    if(reactref.current.checked)
        skill.push(reactref.current.value)
    
    if(bookstrapref.current.checked)
        skill.push(bookstrapref.current.value)

    const selectedvalues=skills.current.filter((ele)=>(ele && ele.checked)).map((ele)=>ele.value)
    console.log(selectedvalues)
    skills.current.map((ele)=>ele.checked=false)

    const radiovalue =
  (myskill.current.filter(ele => ele && ele.checked)[0] || {}).value || "";
console.log(radiovalue);

    


    htmlref.current.checked=false;
    cssref.current.checked=false;
    reactref.current.checkede=false;
    bookstrapref.current.checked=false;
    console.log(skill)
}

    return(
        <div id="form">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your name"/>
            <input type="radio" value="male" name="gender" ref={maleref}/>Male
              <input type="radio" value="female" name="gender" ref={Femaleref}/>FeMale
                <input type="radio" value="other" name="gender" ref={otherref}/>Others

               <input type="checkbox" name="skill" value="html" ref={htmlref} />HTML
            <input type="checkbox" name="skill" value="css" ref={cssref} />CSS
            <input type="checkbox" name="skill" value="react"ref={reactref} />JS
            <input type="checkbox" name="skill" value="boostrap" ref={bookstrapref} />REACT

            
                {
                    skillvalue.map((ele,index)=>{
                        return(
                            <Fragment key={index+1}>
                                <label htmlFor={ele}>
                                    <input type="checkbox"  value={ele} id={ele} ref={(val)=>skills.current[index]=val} />
                                    

                                    {ele.toUpperCase()}
                                </label>
                                <br/>
                            </Fragment>
                        )
                    })
                }
                {
                    selectedvalue.map((ele,index)=>{
                        return(
                            <Fragment key={index}>
                                <label htmlFor={ele}>
                                    <input type="radio" name="myskill" value={ele} id={ele} ref={(val)=>myskill.current[index]=val} />
                                    {ele.toUpperCase()}
                                </label>
                                <br/>
                            </Fragment>
                        )
                    })
                }
                <button type="submit">Submit</button> 
                </form>
        </div>
    )

}
export default Radio