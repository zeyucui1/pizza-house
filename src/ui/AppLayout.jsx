import { Outlet, useNavigation } from 'react-router-dom';
import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import Loader from './Loader';

const AppLayout = () => {
  // 这个hook是用来判断页面是否在loading状态，里面的state属性分别为'loading'和'idle'
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <div className="overflow-auto ">
        <main className="max-h-3xl mx-auto">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
};

export default AppLayout;
