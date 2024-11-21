import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary py-4">
            <div class="container-fluid">
                <Link class="navbar-brand" to="#">FoundryCo</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ms-auto nav-underline">
                        <li class="nav-item">
                            <Link class="nav-link" aria-current="page" to="#">About Us</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">Services</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="#">Products</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown link
                            </Link>
                            <ul class="dropdown-menu">
                                <li><Link class="dropdown-item" to="#">Action</Link></li>
                                <li><Link class="dropdown-item" to="#">Another action</Link></li>
                                <li><Link class="dropdown-item" to="#">Something else here</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar