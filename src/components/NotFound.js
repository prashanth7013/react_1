import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const err = useRouteError();

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>{err.status}</h1>
      <h2>{err.statusText}</h2>
      <p>{err.data}</p>
    </div>
  );
};

export default NotFound;
