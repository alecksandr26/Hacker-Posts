
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const FIREBASE_URL = "https://fir-react-project-9520a-default-rtdb.firebaseio.com/posts.json"

function Card (props)
{
		return (<div className="card">{props.children}</div>);
}


function Post (props)
{

		const [liked, setLike] = useState(props.likes);
		const [flagLike, setFlagLike] = useState(false);
		const navi = useNavigate();

		/* To give like to a post */
		async function likeHandler ()
		{
				let request;
				let data = {};
				
				if (flagLike) {
						setLike(liked - 1);
						data[props.id + '/likes'] = liked - 1;
				}
				else {
						setLike(liked + 1);
						data[props.id + '/likes'] = liked + 1;
				}

				setFlagLike(!flagLike);

				/* Here I do a path to update the data */
				request = await fetch(FIREBASE_URL, {
						method: 'PATCH',
						body: JSON.stringify(data),
						headers: {
								'Content-Type': 'application/json'
						}
				});
		}

		/* To delete an element from the data base */
		async function deleteHandler ()
		{
				let request, url;

				url = "https://fir-react-project-9520a-default-rtdb.firebaseio.com/posts/" + props.id + '.json'
				request = await fetch(url, {
						method: "DELETE"
				});

				/* Here we refresh the page */
				if (request.ok)
						window.location.reload();

		}

		/* To put a post into the favorite list */
		async function favoritehandler ()
		{
				let request, data = {};
				data[props.id + "/fav"] = !props.fav;

				/* Here I do a path to update the data */
				request = await fetch(FIREBASE_URL, {
						method: 'PATCH',
						body: JSON.stringify(data),
						headers: {
								'Content-Type': 'application/json'
						}
				});

				if (request.ok)
						window.location.reload();
		}
		
		return (
				<li>
					 <Card>
							 <div>
									 <div className="postTitle">
											 <h3>{props.title}</h3>
											 <span>{props.author}</span>
									 </div>
									 <div className="postContent">
											 <p>{props.desc}</p>
									 </div>
									 <div className="postActions">
											 <div>{liked}</div>
											 <button onClick={likeHandler}>Like</button>
											 <button onClick={deleteHandler}>Delete</button>
											 <button onClick={favoritehandler}>{(props.fav) ? "Remove fav" : "Add fav"}</button>
									 </div>
							 </div>
					 </Card>
				</li>
		);
}

export default Post;
