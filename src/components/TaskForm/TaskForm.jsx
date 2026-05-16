import s from "./TaskForm.module.css";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/operations"
import Button from "../Button/Button";


const TaskForm = () => {
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
      const text = form.elements.text.value.trim();
      console.log(text);
      
        dispatch(addTask(text)); 
        form.reset();   
    }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        New Task:
        <input
          type="text"
          name="text"
          placeholder="Task Name"
          className={s.field}
        />
      </label>
      <Button type="submit">Add</Button>
    </form>
  );
};

export default TaskForm;
