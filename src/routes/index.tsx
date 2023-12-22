import { Routes, Route } from 'react-router-dom';
import { SignIn } from '../pages/signin';
import { SignUp } from '../pages/signup';
import { Orders } from '../pages/orders';
import { Home } from '../pages/home';

export function Router() {
  return (
    <Routes>
      <Route path="/auth/signin" element={<SignIn />} />
      <Route path="/auth/signup" element={<SignUp />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
