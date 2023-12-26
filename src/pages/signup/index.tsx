import { useState } from 'react';
import { Button } from '../../components/auth/button';
import { Input } from '../../components/auth/input';
import { LayoutAuth } from '../../template/Auth';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { toast } from 'react-toastify';

export function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setError('As senhas não coincidem');
      return;
    }
    try {
      const response = await api.post('/auth/signup', { name, email, password });
      console.log('Resposta da API:', response);

      setName('');
      setEmail('');
      setPassword('');
      setPasswordConfirm('');
      setError('');
      toast.success('Conta criada');
    } catch (error) {
      console.error('Erro ao cadastrar:', error.message);
      setError('Erro ao cadastrar. Verifique suas informações e tente novamente.');
    }
  };

  return (
    <LayoutAuth title="Cadastrar" descritpion="Crie sua conta e começe a trabalhar">
      <form className="mt-8" onSubmit={handleLogin}>
        <Input type="text" label="Nome" value={name} onChange={(e) => setName(e.target.value)} />
        <Input type="email" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" label="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input
          type="password"
          label="Confirmar sua senha"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />
        {error && <div className="text-red-700 mt-2">{error}</div>}
        <Button label="Cadastrar" />
      </form>
      <span className="mt-4 block text-sm text-gray-600">
        Já possui uma conta?{' '}
        <Link to="/auth/signin" className="text-blue-500 hover:underline">
          Fazer Login
        </Link>
      </span>
    </LayoutAuth>
  );
}
