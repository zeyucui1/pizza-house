import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';
import { useDispatch } from 'react-redux';
const DeleteItem = ({pizzaId}) => {
  const dispatch = useDispatch();
  return (
    <Button
      type="small"
      onClick={() => {
        dispatch(deleteItem(pizzaId));
      }}
    >
      Delete
    </Button>
  );
};

export default DeleteItem;
