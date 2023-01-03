
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="">
          <a className="navbar-brand" href={{}}>
            <img
              src="/docs/5.2/assets/brand/bootstrap-logo.svg"
              alt=""
              width="20"
              height="14"
              className="d-inline-block align-text-top"
            />
            Interns
          </a>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="#science">
                Resources
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#science">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#science">
                Post internships
              </a>
            </li>
            
          </ul>
        </div>

        {/* <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success btn-light" type="submit">
            Search
          </button>
        </form> */}
        <div className="nav">
          <li className="nav-item">
            <a className="nav-link active" href={{}}>
              Account
            </a>
          </li>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;