import React from 'react';

const Form4 = () => {
    return (
        <div className="mx-auto pb-3">
      <h1 className="text-3xl mb-5 mt-10 font-bold text-green-600 text-center ">
        Form Validation
      </h1>

      <form className="max-w-lg mx-auto mt-11 px-5 py-5  space-y-4">
        {/* form start*/}

        <div className="card bg-base-100 shadow-2xl py-8">
          <div className="card-body">
            <fieldset className="fieldset">
              {/*Name Area */}
              <label className="label">Name</label>
              <input type="text" className="input w-full" placeholder="Name" />

              {/* Email Area */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
                required
              />

              {/* Password Area */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input w-full"
                placeholder="Password"
                required
              />

              <button className="btn btn-primary mt-4">Login</button>
            </fieldset>
          </div>
        </div>
      </form>
      {/* Form end */}
    </div>
    );
};

export default Form4;