import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";

function EditPost() {
	const { postId } = useParams(); 
	const navigate = useNavigate();
	const [post, setPost] = useState({ title: "", content: "" });

	useEffect(() => {
		api
			.get(`/api/posts/${postId}/`)
			.then((res) => setPost(res.data))
			.catch((error) => console.error("Error fetching post:", error));
	}, [postId]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setPost((prevPost) => ({ ...prevPost, [name]: value }));
	};

	const handleSave = (e) => {
		e.preventDefault();
		api
			.put(`/api/posts/${postId}/`, post)
			.then(() => {
				console.log("Post updated successfully.");
				navigate("/"); 
			})
			.catch((error) => console.error("Error updating post:", error));
	};

	return (
		<div>
			<h2>Edit Post</h2>
			<form onSubmit={handleSave}>
				<label htmlFor="title">Title:</label>
				<input
					type="text"
					id="title"
					name="title"
					value={post.title}
					onChange={handleInputChange}
				/>
				<label htmlFor="content">Content:</label>
				<textarea
					id="content"
					name="content"
					value={post.content}
					onChange={handleInputChange}
				></textarea>
				<button type="submit">Save</button>
			</form>
		</div>
	);
}

export default EditPost;
