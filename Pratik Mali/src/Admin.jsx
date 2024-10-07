import React, { useState } from 'react';
import './Admin.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import api from './utils/api';

export default function Admin() {
  const [messages, setMessages] = useState([]);
  const [access, setAccess] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const adminLogin = async (e) => {
    e.preventDefault();
    const credentials = { username, password };
    try {
      const response = await api.post("/admin/", credentials);
      localStorage.setItem("token", response.data.accessToken);
      setAccess(true);
      try {
        const response = await api.get("messages/get");
        setMessages(response.data);
        console.log(response.data);
      } catch (err) {
        Swal.fire(
          "Error",
          err.response ? err.response.data.message : "Unknown error"
        );
        console.error(
          "There was an error!",
          err.response ? err.response.data.message : err
        );
      }
    } catch (error) {
      Swal.fire("Error", error.response?.data?.message || "An error occurred");
    }
  };

  const deleteMessage = async (id) => {
    try {
      await api.delete(`messages/delete/${id}`);
      setMessages(messages.filter(message => message._id !== id));
      Swal.fire("Success", "Message deleted successfully", "success");
    } catch (error) {
      Swal.fire("Error", error.response?.data?.message || "An error occurred");
    }
  };

  const delAllMessage=async()=>{
    try {
      await api.delete(`messages/delAll`);
      setMessages([]);
      Swal.fire("Success", "Message deleted successfully");
    } catch (error) {
      console.log(error)
      Swal.fire("Error", error.response?.data?.message || "An error occurred");
    }
  }
  return (
    <div className='adminPage'>
      {access === false ? (
        <div className="login_page">
          <div className="form-floating mb-3 input-field">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <label htmlFor="floatingInput">UserName</label>
          </div>
          <div className="form-floating input-field">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="loginBtn" onClick={adminLogin}><strong>Login</strong></button>
        </div>
      ) : (
        
        <div className="messages">
          
          <button className="delBtn" onClick={delAllMessage}><strong>Delete All Messages</strong></button>
          <table className="custom_table">
            <thead>
              <tr>
                <th scope="col">Sr.No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Message</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {messages.length > 0 ? (
                messages.map((message, index) => (
                  <tr key={message._id}>
                    <td>{index + 1}</td>
                    <td>{message.name}</td>
                    <td>{message.email}</td>
                    <td>{message.message}</td>
                    <td>
                      <button
                        className="deleteOne"
                        onClick={() => deleteMessage(message._id)}
                      >
                        <strong>Delete</strong>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No messages found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
