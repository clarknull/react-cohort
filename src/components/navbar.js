import { NavLink } from "react-router-dom";


const links = ['Home', 'About', 'Blog', 'Services']
export default function NavBar() {

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px" }}>
      <div>
        <h2>Cohort Blog </h2>
      </div>
      <div>
        <ul style={{ display: "flex", gap: "calc(20px + 3vw)", listStyleType: 'none' }}>
          {
            links.map(item => (
              <li key={item}> <NavLink to={"/"} style={{ color: "inherit", textDecoration: "none" }}> {item} </NavLink>  </li>

            ))
          }
        </ul>
      </div>
      <div>
        <button style={{ boxShadow: "0 0 1px black" }} className="primary-btn"> Contact Us </button>
      </div>
    </div>
  )
}