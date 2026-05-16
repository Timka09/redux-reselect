import styles from "./TaskList.module.css";
import { useSelector } from "react-redux";
import Task from "../Task/Task";
import { getTask } from "../../redux/selectors";

const TaskList = () => {
  const tasks = useSelector(getTask);
  // console.log(tasks);

  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <li key={task.id} className={styles.listItem}>
          <Task  task={task}/>
        </li>
      ))}
    </ul>
  )
};

export default TaskList;