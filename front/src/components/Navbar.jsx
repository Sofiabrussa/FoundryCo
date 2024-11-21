import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "../index.css" 

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary py-4">
            <div class="container-fluid">
                <Link class="navbar-brand lacquer-regular" to="#">FCo</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto nav-underline">
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="#">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">Products</Link>
                        </li>
                        <li class="nav-item navbar-item ">
                            <Link class="nav-link" to="#">Contact us</Link>
                        </li>
  
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar