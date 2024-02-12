import React, { useState } from "react";
import "./style.css"; // Import your CSS file here

function Chatbot() {
  const [collapsed, setCollapsed] = useState(true);

  const handleToggleClick = () => {
    if (collapsed) {
      setCollapsed(false);
      const addResponseMsg = () => {
        document.querySelector(".welcometochat").innerHTML = " Welcome To Chat";
      };
      setTimeout(addResponseMsg, 1000);
    } else {
      setCollapsed(true);
    }
  };

  return (
    <div className="title">
      {/* <svg viewBox="0 0 640 512" title="robot">
        <path
          fill="currentColor"
          d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"
        />
      </svg> */}
      {/* <h3>Your Company Name</h3> */}
      <div className=" ">
        <div
          id="chatbot"
          className={`${collapsed ? "main-card collapsed" : "main-card"}`}
        >
          <button id="chatbot_toggle" onClick={handleToggleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M15 4v7H5.17l-.59.59-.58.58V4h11m1-2H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm5 4h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              style={{ display: collapsed ? "none" : "inline" }}
              className="w-6 -translate-x-7 translate-y-4"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </button>
          <div className="main-title">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEX_n6SJFLKzCeMRtiMKgBk-RgalxuLEVOg&usqp=CAU"
                style={{ paddingTop: "5px", height: "2.5rem", width: "13rem" }}
                alt=""
              />
            </div>
            <span style={{ color: "black" }}>Your Plan Name</span>
          </div>
          <div className="chat-area" id="message-box">
            <h1 className="fa-brands fa-rocketchat text-lg welcometochat text-yellow-500 px-3 h-14"></h1>
            <iframe
              className="streamlitbot"
              src="https://api.cyberbriefs.org/bot/"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
