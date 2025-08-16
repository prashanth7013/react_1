import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("PRASHANTH");
    }, 1000);

    // cleanup function
    return () => {
      console.log("cleanup called");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Contact Page</h1>
      <p>Email: prashanthps7013@gmail.com</p>
      <p>Phone: +91-9676255233</p>
    </div>
  );
};

export default Contact;
