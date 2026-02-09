import { useState } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ position: "relative", width: "250px" }}>
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        style={{ width: "100%", paddingRight: "40px" }}
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        style={{
          position: "absolute",
          right: "8px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer"
        }}
      >
        {showPassword ? "🙈" : "👁️"}
      </button>
    </div>
  );
}

export default Login;
    