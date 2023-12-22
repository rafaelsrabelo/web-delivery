import { Button } from '../../components/auth/button';
import { Input } from '../../components/auth/input';
import { LayoutAuth } from '../../template/Auth';
import { Link } from 'react-router-dom';

export function SignUp() {
  return (
    <LayoutAuth title="Cadastrar" descritpion="Crie sua conta e começe a trabalhar">
      <form className="mt-8">
        <Input type="text" label="Nome" onChange={() => {}} />
        <Input type="password" label="Senha" onChange={() => {}} />
        <Input type="password" label="Confirmar sua senha" onChange={() => {}} />
        <Button label="Cadastrar" onClick={() => {}} />
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
