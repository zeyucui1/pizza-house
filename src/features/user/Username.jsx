import { useSelector } from 'react-redux';
import { getUser } from './userSlice';

const Username = () => {
  const userName = useSelector(getUser);
  if (!userName) return null;
  return (
    <div className="hidden text-sm font-semibold md:block">{userName}</div>
  );
};

export default Username;
