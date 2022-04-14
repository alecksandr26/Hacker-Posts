
import {Link} from 'react-router-dom';

/* Main navigation component */
function MainNavi ()
{
		return (
				<>
						<header className="headerLayoutPage">
								<section>
										<Link to='/'>
												<div className="titleLayoutPage">HackerPost</div>
										</Link>
								</section>
								<nav>
										<ul>
												<li>
														<Link to="/">All Posts</Link>
												</li>
												<li>
														<Link to="/addpost">Add post</Link>
												</li>
												<li>
														<Link to="/favorites">Favorites</Link>
												</li>
										</ul>
								</nav>
						</header>
				</>
		);
}


/* This is the layout component */
function Layout (props)
{
		return (
				<>
						<MainNavi />
						<main>
								{props.children}
						</main>
				</>
		);
}

export default Layout;



