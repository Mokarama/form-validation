import { useState } from "react";

const Form = () => {
   const [name, setName]=useState("");
   const [email, setEmail]=useState("");
   const [password, setPassword]=useState("");
//    console.log({name, email, password})
   const [error, setError]=useState("");

   const handleSubmit = (e)=>{
        e.preventDefault();
        setName("");
        setEmail("");
        setPassword("");
   }
  return (
    <div className="mx-auto pb-3">
      <h1 className="text-3xl mb-5 font-bold text-green-600 text-center">
        Form Validation
      </h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-11 px-5 py-5 border border-gray-400 rounded shadow-lg space-y-4">
        {/* form start*/}

        <div className="card bg-base-100 shadow-2xl py-8">
          <div className="card-body">
         
            <fieldset className="fieldset">
                  {/*Name Area */}
                  <label className="label">Name</label>
              <input  value={name} onChange={(e)=>setName(e.target.value)} type="text" className="input" placeholder="Name"/>
                  {/* Email Area */}
              <label className="label">Email</label>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="input" placeholder="Email" required />
                {/* Password Area */}
              <label className="label">Password</label>
              <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" className="input" placeholder="Password" required />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-primary mt-4">Login</button>
            </fieldset>
          </div>
        </div>
      </form>
      {/* Form end */}
    </div>
  );
};

export default Form;
