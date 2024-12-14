/*

import { useState } from "react";
import './app.css'
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, },
  } = useForm();
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    })
  }
  const onSubmit = async (data) => {
    await delay(2)
   // let r = await fetch("http://localhost:3000/")
   // let res = await r.text()
    console.log(data);
    // if(data.username  !== "syama"){
    //  setError("myf",{message:"yuor username not match please try "})
    // }
  }
 
  
  return (
    <>
    <h1>Job Form Login</h1>
      {isSubmitting && <div className="h1">Lodding...</div>}
      <div className="con">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <label>Username *</label>
          <input className="input"{...register("username", { required: { value: true, message: "this filed is reqired" }, minLength: { value: 4, message: "min leangth reqired is 4" }, maxLength: { value: 8, message: "max leangth is reqired 8" } })} type="text" placeholder="enrter your name" /><br /><br />
          {errors.username && <div className="red">{errors.username.message}</div>}
          <label>Possword *</label>
          <input className="input"{...register("password", { required: { value: true, message: "job is reqired" }, minLength: { value: 5, message: "min leangth  of password" }, maxLength: { value: 12, message: "max length 12 only" } })} type="password" placeholder="password" /><br /><br />
          {errors.password && <div className="red">{errors.password.message}</div>}
          <label>Your Job *  </label>
          <input className="input" {...register("job", { required: { value: true, message: "this filed is reqired" }, minLength: { value: 2, message: "min leangth reqired is 4" }, maxLength: { value: 12, message: "max leangth is reqired 12" } })} type="text" placeholder="enrter yourjob name" /><br /><br />
          {errors.job && <div className="red">{errors.job.message}</div>}
          <label>Position *  </label>
          <input className="input" {...register("position", { required: { value: true, message: "position is reqired" }, minLength: { value: 4, message: "min leangth 8" }, maxLength: { value: 12, message: "max length 12 only" } })} type="text" placeholder="your position" /><br /><br />
          {errors.position && <div className="red">{errors.position.message}</div>}
          <label>Submit Your FIles *</label>
          <input disabled={isSubmitting} className="btn" type="submit" value="submit" />
        </form>
      </div>
    </>
  )
}
export default App;
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es',
  },
  plugins: [
    postcss({
      extract: true, // Extract CSS to a separate file
    }),
  ],
};


*/

import { useState } from "react";
import "./akk.css" ;// Adjust path based on actual file location

import { useForm } from "react-hook-form";

//import postcss from 'rollup-plugin-postcss';


function App() {
  
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, },
  } = useForm();
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    })
  }
  const onSubmit = async (data) => {
   // await delay(2)
   //const monURL = process.env.MONGO_URI || 'http://localhost:3000/job';
   let r = await fetch('http://localhost:3000/job',{method:"POST",headers:{"Content-Type":"application/json" ,},body:JSON.stringify(data)})
   // let r = await fetch('mongodb+srv://syama777:syama777>@cluster0.eisgw.mongodb.net/job',{method:"POST",headers:{"Content-Type":"application/json" ,},body:JSON.stringify(data)})
    let res = await r.text()
    console.log(data,res);
    // if(data.username  !== "syama"){
    //  setError("myf",{message:"yuor username not match please try "
  }
  
  return (
    <>
    
    <h1>Job Form Login</h1>
      {isSubmitting && <div className="h1">Lodding...</div>}
      <div className= "con">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <h3 > name *</h3>
          <input  className="input"{...register("name", { required: { value: true, message: "this filed is reqired" }, minLength: { value: 4, message: "min leangth reqired is 4" }, maxLength: { value: 14, message: "max leangth is reqired 14" } })} type="text" placeholder="enrter your name" /><br /><br />
          {errors.username && <div className="red">{errors.username.message}</div>}
          <h3 >Possword *</h3>
          <input className="input"{...register("password", { required: { value: true, message: "job is reqired" }, minLength: { value: 5, message: "min leangth  of password" }, maxLength: { value: 12, message: "max length 12 only" } })} type="password" placeholder="password" /><br /><br />
          {errors.password && <div className="red">{errors.password.message}</div>}
          <h3 >  Job *  </h3>
          <input className="input" {...register("job", { required: { value: true, message: "this filed is reqired" }, minLength: { value: 2, message: "min leangth reqired is 4" }, maxLength: { value: 12, message: "max leangth is reqired 12" } })} type="text" placeholder="enrter yourjob name" /><br /><br />
          {errors.job && <div className="red">{errors.job.message}</div>}
          <h3 >  salary *      </h3>
          <input className="input" {...register("salary", { required: { value: true, message: "salary is reqired" }, minLength: { value: 4, message: "min leangth 4" }, maxLength: { value: 6, message: "max length 6 only" } })} type="number" placeholder=" get your salary" /><br /><br />
          {errors.position && <div className="red" >{errors.position.message}</div>}
          <label>Submit Your FIles *</label>
          <input disabled={isSubmitting} className="btn "  type="submit" value="Submit" />
        </form>
      </div>
      
    </>
  )
}
export default App;

