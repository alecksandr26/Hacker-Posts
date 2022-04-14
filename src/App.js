
/* Another react modules  */
import { Route, Routes } from 'react-router-dom';

/* These are my components */
import Layout from './components/layout/Layout.js';
import AllhackerPosts from './components/pages/AllhackerPosts.js';
import Addpost from './components/pages/AddPost.js';
import Favorites from './components/pages/Favorites.js';

function App ()
{
		return (
				<Layout>
						<Routes>
								<Route path='/' element={
													 <AllhackerPosts />
											 } exact>
								</Route>
								<Route path='/addpost' element={
													 <Addpost />
											 }>
								</Route>
								<Route path='/favorites' element={
													 <Favorites />
											 }>
								</Route>
						</Routes>
				</Layout>
		);
}

export default App;
