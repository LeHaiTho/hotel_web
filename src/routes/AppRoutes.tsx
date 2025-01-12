import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from '../layouts';
import {
  HomePage, RegisterManager, ContactInfoManager, CreatePasswordManager, VerifyAccountManager
} from '../pages';
const AppRoutes = () => {
    return (
      <Router>
          <Routes>
            {/* Route chung  */}
            <Route path='/' element={<DefaultLayout><HomePage /></DefaultLayout>} />

            {/* Route cho quản lý  */}
            <Route path='/manage'>
                <Route index element={<DefaultLayout><RegisterManager/></DefaultLayout>} />
                <Route path='register' element={<DefaultLayout><RegisterManager/></DefaultLayout>} />
                <Route path='contact-info' element={<DefaultLayout><ContactInfoManager/></DefaultLayout>} />
                <Route path='create-password' element={<DefaultLayout><CreatePasswordManager /></DefaultLayout>} />
                <Route path='verify-account' element={<DefaultLayout><VerifyAccountManager /></DefaultLayout>} />
            </Route>

          </Routes>
      </Router>
    );
  };
  
  export default AppRoutes;