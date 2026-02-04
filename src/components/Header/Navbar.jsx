import { Space } from "antd"
import { Button } from "antd"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../Context/Auth"


const Navbar = () => {


  const { isAuth, handleLogout } = useAuth()

  const navigate = useNavigate()

  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">CoDev</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
            <div className="d-flex">
              <Space>

                {isAuth ? <>
                  <Button type="primary" className="bg-success" onClick={() => navigate("/dashboard")} >Dashboard</Button>
                  <Button type="primary" className="bg-danger" onClick={handleLogout} >Logout</Button>
                </>
                  : <>
                    <Button type="primary" className="bg-success" onClick={() => navigate("/auth/login")} >Login</Button>
                    <Button type="primary" className="bg-danger" onClick={() => navigate("/auth/register")} >Register</Button>
                  </>
                }
              </Space>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar