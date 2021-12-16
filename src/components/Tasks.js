import Task from "./Task";

function Tasks({ tasks, handleToggle }) {
	return (
		<div className="card">
			<div className="row">
				{tasks.map((task) => (
					<div className="col-12" key={task.id}>
						<Task task={task} handleToggle={handleToggle} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Tasks;
