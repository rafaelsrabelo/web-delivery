import { Routes, Route } from 'react-router-dom';
import { Orders } from '../pages/Orders';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export function Router() {
  return (
    <Routes>
      <Route path="/auth/signin" element={<SignIn />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}
