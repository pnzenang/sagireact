import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Navbar, Sidebar, Loading } from '../components';
import { createContext, useContext, useState } from 'react';
import Footer from '../components/Footer';

const HomeContext = createContext();

const HomeLayout = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <HomeContext.Provider value={{ showSidebar, toggleSidebar }}>
      {/* <Header /> */}
      <Navbar />
      <Sidebar />
      <section className=''>{isPageLoading ? <Loading /> : <Outlet />}</section>
      <Footer />
    </HomeContext.Provider>
  );
};
export const useHomeContext = () => useContext(HomeContext);
export default HomeLayout;
