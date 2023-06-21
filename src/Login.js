import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

function Login(props) {
  return (
    <div className="login">
      <div className="login__header">
        <div className="login__logo">
          <Link>
            <img
              src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
              alt=""
            />
          </Link>
        </div>
        <div className="login__language">
          <LanguageOutlinedIcon /> <span>Ar-IQ</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
