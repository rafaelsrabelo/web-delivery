import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../components/auth/input';
import { LayoutAuth } from '../../template/Auth';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../features/userSlice';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userCredential = {
      email,
      password,
    };

    try {
      const result = await dispatch(loginUser(userCredential));
      
      if (loginUser.fulfilled.match(result)) {
        const user = result.payload; // Obtenha o usuário do resultado da ação
        localStorage.setItem('user', JSON.stringify(user));
        setEmail('');
        setPassword('');
        navigate('/');
      } else {
        console.error('Erro ao fazer login:', result.error.message);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
    }
  };

  return (
    <LayoutAuth title="Entrar" descritpion="Faça login na sua conta">
      <form className="mt-8" onSubmit={handleLogin}>
        <Input
          type="text"
          label="Email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          label="Senha"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 w-full h-12 font-bold text-white p-2.5 rounded-lg mt-4 transition duration-300 hover:bg-blue-600"
        >
          {loading ? 'Entrando...' : 'Entrar'}
        </button>
        {error && (<div className="mt-2 text-red-700" role='alert'>{error}</div>)}
      </form>
      <span className="mt-4 block text-sm text-gray-600">
        Não possui uma conta?{' '}
        <Link to="/auth/signup" className="text-blue-500 hover:underline">
          Criar conta
        </Link>
      </span>
    </LayoutAuth>
  );
}
