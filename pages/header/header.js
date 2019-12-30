import Link from 'next/link'
function Header() {
    return (
        <nav className="navbar navbar-expand-lg header-container">
            <a className="navbar-brand menu-nav-white">Code Fun</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active header-nav-item">
                        <Link href="/">
                            <a className="nav-link menu-nav-white">Home <span className="sr-only">(current)</span></a>
                        </Link>
                    </li>
                    <li className="nav-item active header-nav-item">
                        <Link href="topic">
                            <a className="nav-link menu-nav-white">Topics <span className="sr-only">(current)</span></a>
                        </Link>
                    </li>
                    {/* <li className="nav-item active header-nav-item">
                        <a className="nav-link menu-nav-white">Pricing</a>
                    </li>
                    <li className="nav-item active header-nav-item">
                        <a className="nav-link menu-nav-white">Disabled</a>
                    </li> */}
                </ul>
            </div>

            <style jsx>
                {`
        .header-container{
            background-color: #222437;
        }

        .menu-nav-white{
            color: white;
            font-size: 18px;
        }

        .header-nav-item{
            padding 0.25rem;
        }
        .header-nav-item:hover{
            background-color: #8862e0
        }

        .navbar{
            padding: 0px !important
        }
      `}
            </style>
        </nav>
    )
}


export default Header