import "./App.scss";
import "./assets/styles.scss";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TaskEdit from "./components/TaskEdit";

import { useState } from "react";

function App() {
	const [tasks, setTasks] = useState([
		{
			description: "Learn React",
			id: 1,
			date: "2021-01-03",
			complete: false,
		},
		{ description: "Profit", id: 2, date: "2021-01-05", complete: false },
	]);

	const [showTaskEdit, setShowTaskEdit] = useState(false);

	const onSaveTask = ({ description, date }) => {
		console.log("saving tasks");
		setTasks([
			{ description: description, date: date, id: Date.now(), complete: false },
			//adding the existing array elemtns to the new variable
			...tasks,
		]);
	};

	const handleToggle = (task) => {
		console.log("completing task");
		setTasks(
			tasks.map((readTask) => {
				readTask.complete =
					task.id === readTask.id ? !readTask.complete : readTask.complete;
				return readTask;
			})
		);
	};
	return (
		<div className="App">
			<Header />
			<div className="container">
				<div className="col-12 text-right">
					<button
						className="button outline"
						onClick={() => setShowTaskEdit(!showTaskEdit)}
					>
						{!showTaskEdit && "New"}
						{showTaskEdit && "➖"}
					</button>
				</div>
				{showTaskEdit && <TaskEdit task={{}} onSaveTask={onSaveTask} />}
				<Tasks tasks={tasks} handleToggle={handleToggle}></Tasks>
			</div>
		</div>
	);
}

export default App;
