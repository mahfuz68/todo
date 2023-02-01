/* eslint-disable consistent-return */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Loader from "./Loader";

export default function RegisterInput() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { signUp } = useAuth();
  const navigate = useNavigate();

  async function register(e) {
    e.preventDefault();

    // password validation
    if (password !== confirmPassword) {
      return setError("Password does not match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(email, password, userName);
      navigate("/dashboard");
    } catch (err) {
      setError("register failed");
      setLoading(false);
      console.log(err);
    }
  }

  return (
    <div>
      <label htmlFor="name">
        <input
          value={userName}
          type="text"
          name="name"
          placeholder="Name"
          required
          className="input-login"
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>
      <label htmlFor="email">
        <input
          value={email}
          type="email"
          name="email"
          placeholder="Email"
          required
          className="input-login"
          autoComplete="new-password"
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        <input
          value={password}
          type="password"
          name="password"
          placeholder="Password"
          required
          className="input-login"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label htmlFor="confirmPassword">
        <input
          value={confirmPassword}
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          required
          className="input-login"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>

      <button
        disabled={loading}
        type="submit"
        className="login-btn bg-gradient-to-r from-purple-500 to-pink-500  hover:bg-gradient-to-l hover:from-indigo-500 hover:to-purple-500 focus:ring-2 focus: ring-indigo-600 flex justify-center items-center shadow-lg"
        onClick={register}
      >
        {loading && <Loader />}
        Sign up
      </button>
      <div className="my-2 text-red-500 text-sm">{error && <p>{error}</p>}</div>
    </div>
  );
}
