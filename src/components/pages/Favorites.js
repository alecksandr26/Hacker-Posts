
/* Here I import the modules that i need */
import {useState, useEffect} from 'react';


import Post from '../posts/Post.js';

const FIREBASE_URL = "https://fir-react-project-9520a-default-rtdb.firebaseio.com/posts.json"

/* Is the same code from posts.js */
function Favorites ()
{
		/* To know if we are feaching the data */
    const [isLoading, setLoading] = useState(true);
		
		/* To load the data */
    const [loadedPosts, setLoadedPosts] = useState([]);
		let returnedTags;

		useEffect(() => {
				setLoading(true);
				/* Doing this simple request I can separte the favorites posts */
				fetch(FIREBASE_URL, {
						method: 'GET'
				}).then((response) => {
						return response.json();
				}).then((data) => { /* Here we fetch the data */
						setLoading(false);
						const posts = [];
						for (const key in data) {
								const post = {
										id: key,
										...data[key]
								};
								if (post.fav)
										posts.push(post);
						}
						/* Here we catch the data */
						setLoadedPosts(posts);
				});
		}, []);
		
		if (isLoading)
        return (<section className="postsMessage">
                    <p>Is loading the favorites posts ...</p>
                </section>);

		if (loadedPosts.length === 0)
				return (<section className="postsMessage">
                    <p>You are not added any post to favorites !!!</p>
                </section>);
		
		return (
				<>
						<div className="contentPage">
								<div className="pageTitle">
										All Favorites:
								</div>
						</div>
						<ul>
										{loadedPosts.map((item) => {
												return <Post
																	 key={item.id}
																	 id={item.id}
																	 title={item.title}
																	 author={item.author}
																	 desc={item.desc}
																	 likes={item.likes}
																	 fav={item.fav}
															 />
										})}
						</ul>
				</>
		);
}

export default Favorites;
