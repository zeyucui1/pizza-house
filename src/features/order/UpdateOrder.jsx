import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import { updateOrder } from '../../services/apiRestaurant';
const UpdateOrder = () => {
  const fetcher = useFetcher();
  // 这里fetcher.Form用法同理于 react router 中 Form的用法，包裹住的元素将和action连接
  return (
    <fetcher.Form method="patch" className="text-right">
      <Button type="primary">Make order priority</Button>
    </fetcher.Form>
  );
};

export default UpdateOrder;

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
