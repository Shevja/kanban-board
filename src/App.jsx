import { useEffect, useState } from 'react'
import './App.css'
import Board from './features/board/Board'
import { reorder, move } from './utils/arrayUtils'
import Controller from './features/controller/Controller'
import ShowTaskModal from './features/modals/ShowTaskModal'
import CreateTaskModal from './features/modals/CreateTaskModal'

function getTasks() {
	const data = [
		{ id: 0, title: 'Помыть кота', status: 'toDo', priority: 'high', body: 'Он стал чересчур пушится, и шерсть везде', createdAt: new Date(), deadline: new Date() },
		{ id: 1, title: 'Купить покушать', status: 'toDo', priority: 'regular', body: 'Колбаса, макарена, елка, стоп, я же не ем елки', createdAt: new Date(), deadline: new Date() },
		{ id: 2, title: 'Купить покушать', status: 'inProgress', priority: 'regular', body: 'Колбаса, макарена, елка, стоп, я же не ем елки', createdAt: new Date(), deadline: new Date() },
		{ id: 3, title: 'Прогуляться', status: 'toDo', priority: 'low', body: 'Говорят за стенами есть бескрайнее море, которого не вычерпать ни одному купцу. Есть реки огня, есть леса, которые не вырубить, и есть в них такие места, которые даже старейшины не могут объяснить. Мир за стенами огромен, и я хочу увидеть его. Я хочу понять, что это за мир.', createdAt: new Date(), deadline: new Date() },
		{ id: 4, title: 'Прогуляться', status: 'done', priority: 'low', body: 'Говорят за стенами есть бескрайнее море, которого не вычерпать ни одному купцу. Есть реки огня, есть леса, которые не вырубить, и есть в них такие места, которые даже старейшины не могут объяснить. Мир за стенами огромен, и я хочу увидеть его. Я хочу понять, что это за мир.', createdAt: new Date(), deadline: new Date() },
	]

	const taskInfo = {}

	data.forEach(task => {
		if (!taskInfo[task.status]) {
			taskInfo[task.status] = []
		}

		taskInfo[task.status].push({
			id: task.id,
			priority: task.priority,
			title: task.title,
			body: task.body,
			createdAt: task.createdAt,
			deadline: task.deadline,
			status: task.status,
		})
	});

	return taskInfo;
}

function App() {
	const [taskInfo, setTaskInfo] = useState(getTasks())
	const [modalShowTask, setModalShowTask] = useState(null)
	const [isShowTaskModalOpen, setIsShowTaskModalOpen] = useState(false)
	const [isShowCreateModalOpen, setIsShowCreateModalOpen] = useState(false)

	// task controll
	function onDragEnd(result) {
		const { source, destination } = result;

		// Если никуда не передвигали карточку
		if (!destination) return null
		if (
			source.droppableId === destination.droppableId &&
			source.index === destination.index
		) return null

		// id колонок
		const sourceID = source.droppableId
		const destinationID = destination.droppableId

		if (sourceID === destinationID) {
			const newTaskList = reorder(taskInfo[sourceID], source.index, destination.index)

			const newTaskInfo = {
				...taskInfo,
				[sourceID]: newTaskList
			}

			setTaskInfo(newTaskInfo)
		} else {
			const { newSrcList, newDistList } = move(taskInfo[sourceID], taskInfo[destinationID], source.index, destination.index)

			const newTaskInfo = {
				...taskInfo,
				[sourceID]: newSrcList,
				[destinationID]: newDistList
			}

			setTaskInfo(newTaskInfo)
		}

	}

	function onRemoveTask(columnKey, index) {
		const newTaskList = Array.from(taskInfo[columnKey])

		newTaskList.splice(index, 1)

		const newTaskInfo = {
			...taskInfo,
			[columnKey]: newTaskList
		}

		console.log(newTaskInfo)
		setTaskInfo(newTaskInfo)
	}

	function onChangeTaskPriority(columnKey, index) {
		console.log('Changing task priority')
	}

	// task modal
	function onShowTask(columnKey, index) {
		setModalShowTask({ ...taskInfo[columnKey][index], '_relative_index': index })
		setIsShowTaskModalOpen(true)
	}
	function onCreateTask() {
		setIsShowCreateModalOpen(true)
	}

	const onCloseShowTaskModal = () => {
		setIsShowTaskModalOpen(false)
	}

	const onCloseCreateTaskModal = () => {
		setIsShowCreateModalOpen(false)
	}

	return (
		<div className='App'>
			<Controller onCreateTask={onCreateTask} />
			<Board taskInfo={taskInfo} onDragEnd={onDragEnd} onRemoveTask={onRemoveTask} onOpenTask={onShowTask} />

			{/* modals */}
			<ShowTaskModal isOpen={isShowTaskModalOpen} onCloseModal={onCloseShowTaskModal} task={modalShowTask} onChangeTaskPriority={onChangeTaskPriority} />
			<CreateTaskModal isOpen={isShowCreateModalOpen} onCloseModal={onCloseCreateTaskModal} />
		</div>
	)
}

export default App
