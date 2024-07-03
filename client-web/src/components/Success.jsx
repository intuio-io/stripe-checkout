import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Success = () => {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const sessionId = queryParams.get("session_id");

    if (sessionId) {
      // Redirect back to the app
      window.location.href = `exp://192.168.2.47:8081/--/success`;
    }
  }, [location]);

  return <div>Payment Successful! Redirecting...</div>;
};

export default Success;
