import "./App.css";
import  Layout  from "./components/Layout/Layout";
import TaskForm from "./components/TaskForm/TaskForm";
import TaskList from "./components/TaskList/TaskList";
import { useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { getError , getIsLoading } from "./redux/selectors";
import { fetchTasks } from "./redux/operations";

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const loading = useSelector(getIsLoading);

  useEffect(() => {
  dispatch(fetchTasks())
}, [dispatch])

  return (
    <>
      <Layout>
        <TaskForm />
        {loading && error && <p>АБВГД</p>}
        <TaskList />
     </Layout>
    </>
  );
}

export default App;