import { Link } from "react-router-dom";

export default function WebLayout({ children }) {
  return (
    <>
      <div>
        <header>
          <ul style={{ display: "flex", listStyle: "none",justifyContent:"space-around" }}>
            <li>
              <Link to="/webhome">Home Page</Link>
            </li>

            <li>
              <Link to="/webcontact">Contact Page</Link>
            </li>
            <li>
              <Link to="/webabout">About Page</Link>
            </li>
          </ul>
        </header>
        <main>{children}</main>
        <footer style={{marginTop:"300px"}}>Web footer</footer>
      </div>
    </>
  );
}
