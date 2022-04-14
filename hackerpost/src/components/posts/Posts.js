
/* Here I import the modules that i need */
import {useState, useEffect} from 'react';

import Post from './Post.js';

const FIREBASE_URL = "https://fir-react-project-9520a-default-rtdb.firebaseio.com/posts.json"

function Posts ()
{
		/* To know if we are feaching the data */
    const [isLoading, setLoading] = useState(true);
		
		/* To load the data */
    const [loadedPosts, setLoadedPosts] = useState([]);
		let returnedTags;

		useEffect(() => {
				setLoading(true);
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
								posts.push(post);
						}
						/* Here we catch the data */
						setLoadedPosts(posts);
				});
		}, []);
		
		if (isLoading)
        return (<section className="postsMessage">
                    <p>Is loading the posts ...</p>
                </section>);

		console.log(loadedPosts);
		if (loadedPosts.length === 0)
				return (<section className="postsMessage">
                    <p>There are not posts yet !!!</p>
                </section>);
		
		return (
				<>
						<div className="contentPage">
								<div className="pageTitle">
										All Posts:
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

export default Posts;
