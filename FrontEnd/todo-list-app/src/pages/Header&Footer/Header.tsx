export const Header = () => {
    return (
        <>
            <nav className='w-100 navbar navbar-expand-lg navbar-light bg-light p-3 border-bottom shadow'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='/'><strong>Todo List</strong></a>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav ms-auto mb-2 mb-lg-0 me-5'>
                            <li className='nav-item me-2'>
                                <a className='nav-link active' aria-current='page' href='/'>Your Todos</a>
                            </li>
                            <li className='nav-item me-2'>
                                <a className='nav-link active' aria-current='page' href='/todo'>Add Todo</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}