import { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await doRequest();
  };

  return (
    <div  style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
    <form   style={{ backgroundColor: "blue", height: "300px", width: "500px" , marginTop:"60px" }} onSubmit={onSubmit}>
      <h1 style={{ textAlign: "center" }}>Sign Up</h1>
      <div className="form-group" style={{ textAlign: "center" }}>
        <label htmlFor="">Email Address</label>
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="form-control"
          placeholder="Enter Email"
        />
      </div>
      <br />
      <div className="form-group" style={{ textAlign: "center" }}>
        <label htmlFor="">Password</label>
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="Password"
        />
      </div>
      <br />
      {errors}
         <div style={{ textAlign: "center" }}>
      <button className="btn btn-primary">Sing Up</button>
      </div>
      <br />
    </form>
      </div>
  );
};
