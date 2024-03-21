"use client";
import Link from "next/link";

const Navbar = () => {
  const hideAdminNavbar = () => {
    document.getElementById("userNavbarClose").click();
    // window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth'
    // });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top py-3 ">
        <div className="container ">
          <button
            className="d-lg-none border-0 py-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <i className="bi bi-list fs-1 primary-color "></i>
          </button>
          <Link className="navbar-brand fs-3 fw-bold text-white" href="/">
            Shivani <span className="text-info">Chouksey</span>
          </Link>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header bg-black">
              <span className="text-info"> Shivani Chouksey</span>
              <button
                id="userNavbarClose"
                type="button"
                className="btn-close text-white mb-2  d-flex align-middle justify-center"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              >
                {" "}
                <i class="bi bi-x-circle fs-3"></i>
              </button>
            </div>
            <div className="offcanvas-body bg-black d-md-none">
              <ul className="navbar-nav primary-color flex-grow-1 ms-lg-5 text-uppercase gap-3 justify-content-end ">
                <li className="nav-item">
                  <Link
                    className="nav-link secondary-color fw-semibold text-white  "
                    href="#about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link secondary-color fw-semibold text-white"
                    href="#skill"
                  >
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link secondary-color fw-semibold text-white"
                    href="#project"
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link secondary-color fw-semibold text-white"
                    smooth
                    href="#contact"
                  >
                    Contact
                  </Link>
                </li>
                <Link
                  className="btn btn-info px-3 text-white rounded-pill"
                  href="/RESUME.pdf"
                  target="_blank"
                  download={"Shivani Chouksey Resume"}
                >
                  GET My CV<i className="bi bi-download ms-2 fw-bold"></i>
                </Link>
              </ul>
            </div>
            <div className="offcanvas-body d-none d-md-block ">
              <ul className="navbar-nav primary-color flex-grow-1 ms-lg-5 text-uppercase gap-3 justify-content-end ">
                <li className="nav-item">
                  <Link
                    className="nav-link secondary-color fw-semibold text-white  "
                    href="#about"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link secondary-color fw-semibold text-white"
                    href="#skill"
                  >
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link secondary-color fw-semibold text-white"
                    href="#project"
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link secondary-color fw-semibold text-white"
                    smooth
                    href="#contact"
                  >
                    Contact
                  </Link>
                </li>
                <Link
                  className="btn btn-info px-3 text-white rounded-pill"
                  href="/RESUME.pdf"
                  target="_blank"
                  download={"Shivani Chouksey Resume"}
                >
                  GET My CV<i className="bi bi-download ms-2 fw-bold"></i>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
