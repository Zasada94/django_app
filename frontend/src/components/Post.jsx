// import "../styles/Post.css";
import { Link } from "react-router-dom";

function Post({ post, onDelete }) {
	const formattedDate = new Date(post.created_at).toLocaleDateString("pl-PL");

	return (
		<div className="post-container">
			<p className="post-title">{post.title}</p>
			<p className="post-content">{post.content}</p>
			<p className="post-date">{formattedDate}</p>
			<button className="delete-button" onClick={() => onDelete(post.id)}>
				Delete
			</button>
			<Link to={`/posts/${post.id}/edit`}>
				<button className="edit-button"> Edit</button>
			</Link>
		</div>
	);
}

export default Post;
