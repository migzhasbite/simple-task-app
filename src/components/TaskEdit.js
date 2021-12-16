import { useState } from "react";

function TaskEdit({ task, onSaveTask }) {
	//Create a new state variale local to TaskEdit and initiates it to ""
	const [description, setDescription] = useState("");
	const [date, setDate] = useState("");

	const saveTask = (e) => {
		e.preventDefault();
		onSaveTask({ description: description, date: date });

		setDescription("");
		setDate("");
	};
	return (
		<div className="card">
			<h3>Add Task</h3>
			<form>
				<label htmlFor="description">Description</label>
				<input
					type="text"
					name="description"
					id="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>

				<label htmlFor="date">Date</label>
				<input
					type="text"
					name="date"
					id="date"
					value={date}
					onChange={(e) => setDate(e.target.value)}
				/>

				<div className="text-right">
					<button className="button dark" onClick={saveTask}>
						Save
					</button>
				</div>
			</form>
		</div>
	);
}

export default TaskEdit;
