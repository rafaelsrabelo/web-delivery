import { Link } from 'react-router-dom';
import { Button } from '../../components/auth/button';
import { Input } from '../../components/auth/input';
import { LayoutAuth } from '../../template/Auth';
import { useState } from 'react';

export function SignIn() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name);
    console.log(password);
  };

  return (
    <LayoutAuth title="Entrar" descritpion="Faça login na sua conta">
      <form className="mt-8" onSubmit={handleLogin}>
        <Input
          type="text"
          label="Nome"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />
        <Input
          type="password"
          label="Senha"
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        <Button label="Entrar" onClick={() => handleLogin} />
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
