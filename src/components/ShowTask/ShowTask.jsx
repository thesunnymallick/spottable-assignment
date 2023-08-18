import { useParams } from 'react-router-dom';

const ShowTask = () => {
  const { id } = useParams();
  return <div style={{ color: 'red' }}>{id}</div>;
};

export default ShowTask;
