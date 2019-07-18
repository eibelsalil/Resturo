import {useState} from "react"

const useForm = (callback) =>{
  const [values,setValues] = useState({})

 const handelSubmit = (event) =>{
     if(event) event.preventDefault()
     callback()
 }
   const handelChange = (event) =>{
      event.persist()
      
      setValues(values =>({...values,[event.target.name]: event.target.value}))
   }
  const restvalue = (event) =>{
    for(let item in values){
      setValues(delete values[item])
    }
  }

   return{
       handelChange,
       handelSubmit,
       restvalue,
       values
   }
}

export default useForm