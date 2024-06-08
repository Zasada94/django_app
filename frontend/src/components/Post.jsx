// import "../styles/Post.css";
import { Link } from "react-router-dom";

function Post({ post, onDelete }) {
	const formattedDate = new Date(post.created_at).toLocaleDateString("pl-PL");

	return (
		<div className="post-container">
			<div className="post-element-wrapper">
				<div className="post-title-title">ID: {post.id}, Title: </div>{" "}
				<div className="post-title">{post.title}</div>
			</div>
			<div className="post-element-wrapper">
				<div className="post-title-title">Content:</div>{" "}
				<div className="post-content">{post.content}</div>
			</div>
			<div className="post-date">Post added: {formattedDate}</div>
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
