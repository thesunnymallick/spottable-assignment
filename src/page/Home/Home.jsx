import ShowTask from '../../components/ShowTask/ShowTask';
import SideBar from '../../components/SideBar/SideBar';
import './home.css';
const Home = () => {
  return (
    <div className="landing_Page">
      <SideBar />
      <ShowTask />
    </div>
  );
};

export default Home;
