import { useState } from "react";

const Form1 = () => {
const [name, setName]=useState("");
const [email, setEmail]=useState("");
const [password, setPassword]=useState("");
const [error, setError] =useState("");
const [success, setSuccess]=useState("");

    const handleSubmit = (e)=>{
     e.preventDefault();
     
     
     if(validateForm()){
     setName("");
     setEmail("");
     setPassword("");
     setSuccess(true);
     }
     else{
       setSuccess(false);
     }
     
    }
    const validateForm =()=>{
        const newErrors={};
        if(!name) newErrors.name='Please enter a valid name';
        if(!email) newErrors.email='Please enter a valid email';
        if(!password || password.length<6)
            newErrors.password ='Please enter a valid password';
        setError(newErrors);
      return Object.keys(newErrors).length ===0;


    }
  return (
    <div className="mx-auto pb-3">
      <h1 className="text-3xl mb-5 mt-10 font-bold text-green-600 text-center ">
        Form Validation
      </h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-11 px-5 py-5  space-y-4">
        {/* form start*/}

        <div className="card bg-base-100 shadow-2xl py-8">
          <div className="card-body">
            <fieldset className="fieldset">
              {/*Name Area */}
              <label className="label">Name</label>
              <input value={name} onChange={(e)=> setName(e.target.value)} type="text" className="input w-full" placeholder="Name" />
                {
                    error.name && <p className="text-sm italic text-red-600">{error.name}</p>
                }
              {/* Email Area */}
              <label className="label">Email</label>
              <input value={email} onChange={(e)=>setEmail(e.target.value)}
                type="email"
                className="input w-full"
                placeholder="Email"
                required
              />
                {
                    error.email && <p className="text-sm italic text-red-600">{error.email}</p>
                }
              {/* Password Area */}
              <label className="label">Password</label>
              <input value={password} onChange={(e)=>setPassword(e.target.value)}
                type="password"
                className="input w-full"
                placeholder="Password"
                required
              />
                {
                    error.password && <p className="text-sm italic text-red-600">{error.password}</p>
                }
              <button className="btn btn-primary mt-4">Login</button>
             <div>
                {
                    success && <p className="text-xl italic text-green-600 text-center pt-4">Submitted successfully!</p>
                }
             </div>
            </fieldset>
          </div>
        </div>
      </form>
      {/* Form end */}
    </div>
  );
};

export default Form1;
