import { Routes, Route } from 'react-router-dom';
import { SignIn } from '../pages/signin';
import { SignUp } from '../pages/signup';

export function Router() {
  return (
    <Routes>
      <Route path="/auth/signin" element={<SignIn />} />
      <Route path="/auth/signup" element={<SignUp />} />
    </Routes>
  );
}
