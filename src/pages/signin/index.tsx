import { Link } from 'react-router-dom';
import { Button } from '../../components/auth/button';
import { Input } from '../../components/auth/input';
import { LayoutAuth } from '../../template/auth';

export function SignIn() {
  return (
    <LayoutAuth title="Entrar" descritpion="Faça login na sua conta">
      <form className="mt-8">
        <Input type="text" label="Nome" onChange={() => {}} />
        <Input type="password" label="Senha" onChange={() => {}} />
        <Button label="Entrar" onClick={() => {}} />
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
