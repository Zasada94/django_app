import { useState, useEffect } from "react";
import api from "../api";
import Post from "../components/Post";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
	const navigate = useNavigate();
	const [posts, setPosts] = useState([]);
	const [content, setContent] = useState("");
	const [title, setTitle] = useState("");

	useEffect(() => {
		getPosts();
	}, []);

	const getPosts = () => {
		api
			.get("/api/posts/")
			.then((res) => res.data)
			.then((data) => {
				setPosts(data);
				console.log(data);
			})
			.catch((err) => alert(err));
	};

	const deletePost = (id) => {
		api
			.delete(`/api/posts/delete/${id}/`)
			.then((res) => {
				if (res.status === 204) alert("Post deleted.");
				else alert("Failed to delete post.");
				getPosts();
			})
			.catch((error) => alert(error));
	};

	const createPost = (e) => {
		e.preventDefault();

		api
			.post("/api/posts/", { content, title })
			.then((res) => {
				if (res.status === 201) alert("post created.");
				else alert("Failed to create post.");
				getPosts();
			})
			.catch((err) => alert(err));
	};

	const handleLogout = () => {
		navigate("/logout");
	};

	return (
		<div>
			<div>
				<h2>Posts</h2>
				<button onClick={handleLogout}>Logout</button>
				{posts.map((post) => (
					<Post post={post} onDelete={deletePost} key={post.id} />
				))}
			</div>
			<h2>Create a post</h2>
			<form onSubmit={createPost}>
				<label htmlFor="title">Title:</label>
				<br />
				<input
					type="text"
					id="title"
					name="title"
					required
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
				<label htmlFor="content">Content:</label>
				<br />
				<textarea
					name="content"
					id="content"
					required
					value={content}
					onChange={(e) => setContent(e.target.value)}
				></textarea>
				<br />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
}

export default Home;
