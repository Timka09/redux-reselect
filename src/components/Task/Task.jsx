import s from "./Task.module.css";
import { useDispatch } from "react-redux";
import { toggleCompleted, deleteTask } from "../../redux/actions";
import { MdClose } from "react-icons/md";

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleCompleted(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
console.log(task);

  return (
    <div className={s.wrapper}>
      <input
        type="checkbox"
        className={s.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={s.text}>{task.text}</p>
      <button className={s.button} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

export default Task;


