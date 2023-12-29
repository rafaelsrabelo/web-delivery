import { Routes, Route } from 'react-router-dom';
import { SignIn } from '../pages/signin';
import { SignUp } from '../pages/signup';
import { Orders } from '../pages/orders';
import { Home } from '../pages/home';
import { PrivateRoute } from './privateRouters';
import { Contact } from '../pages/contact';
import { Settings } from '../pages/settings';

export function Router() {
  return (
    <Routes>
      <Route path="/auth/signin" element={<SignIn />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
      <Route path="/contact" element={<PrivateRoute><Contact /></PrivateRoute>} />
      <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
      <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
    </Routes>
  );
}
