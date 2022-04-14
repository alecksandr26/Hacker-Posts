
/* Modules that we need */
import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';


const FIREBASE_URL = "https://fir-react-project-9520a-default-rtdb.firebaseio.com/posts.json"

function Addpost ()
{
		const titlePost = useRef();
		const authorPost = useRef();
		const descPost = useRef();
		const navi = useNavigate();

		
		/* AddnewPost: Makes a request to the data base */
		async function AddnewPost (event)
		{
				/* To prevent a reload page */
				event.preventDefault();
				let request;

				const data = {
						title: titlePost.current.value,
						author: authorPost.current.value,
						desc: descPost.current.value,
						likes: 0,
						fav: false
				};
				
				request = await fetch(FIREBASE_URL, {
						method: 'POST',
						body: JSON.stringify(data),
						headers: {
								'Content-Type': 'application/json'
						}
				});

				if (request.ok)
						navi('/');
		}
		
		return (
				<>
						<div className="contentPage">
								<div className="pageTitle">
										Add Post:
								</div>
								<div className="postForm">
										<form onSubmit={AddnewPost}>
												<div className="formTitle">
														<label htmlFor="title">Post title:</label>
														<input type='text' required id='title' ref={titlePost}/>
												</div>
												<div className="formAuthor">
														<label htmlFor="author">Author:</label>
														<input type='text' required id='author' ref={authorPost}/>
												</div>
												<div className="formDesc">
														<label htmlFor='desc'>Content: </label>
														<textarea id='desc' required rows='5' ref={descPost}></textarea>
												</div>
												<div className="formActions">
														<button>Add Post</button>
												</div>
										</form>
								</div>
						</div>
				</>
		);
}

export default Addpost;
