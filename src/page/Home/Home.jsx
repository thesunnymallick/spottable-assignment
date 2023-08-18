import TaskList from '../../components/TaskList/TaskList';
import SideBar from '../../components/SideBar/SideBar';
import './home.css';
import { useSelector } from 'react-redux';
import ShowTask from '../../components/ShowTask/ShowTask';
const Home = () => {
  const { Item } = useSelector((state) => state.task);

  return (
    <div className="landing_Page">
      <SideBar />
      <div className="landing_page_aside">
        <div className="allTask">
          {Item.map((item) => {
            const { id, date, title, desc, status } = item;
            return (
              <TaskList
                key={id}
                id={id}
                title={title}
                date={date}
                desc={desc}
                status={status}
              />
            );
          })}
        </div>
        <div className="showTask">
          <ShowTask />
        </div>
      </div>
    </div>
  );
};

export default Home;
