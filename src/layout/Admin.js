import { Link } from "react-router-dom";


export default function AdminLayout({ children }) {
  return (
    <>
      <div>
        <header>
          <ul style={{ display: "flex", listStyle: "none", justifyContent:"space-around" }}>
            <li>
              <Link to="/adminhome">Home Page</Link>
            </li>
            <li>
              <Link to="/adminproducts">Products Page</Link>
            </li>
            <li>
              <Link to="/admincontact">Contact Page</Link>
            </li>
          </ul>
        </header>
        <main>{children}</main>
        <footer style={{marginTop:"300px"}}>Admin footer</footer>
      </div>
    </>
  );
}
