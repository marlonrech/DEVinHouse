// Construir dois componentes (páginas), uma para a home e outra de login. Adicionar um formulário de login que redirecione o usuário para a rota /home quando o e-mail for válido e a senha for maior que 8 caracteres.

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import './Login.css'

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function Logar(e) {
    e.preventDefault();
    alert("usuario logado");
    navigate("/home");
  }

  return (
    <div className="main">
        <div className="position-absolute top-50 start-50 translate-middle">
            <Form onSubmit={Logar}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                type="email"
                placeholder="Enter email"
                required
                value={login.email}
                onChange={(e) => setLogin({ ...login, email: e.target.value })}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                minLength={8}
                type="password"
                placeholder="Password"
                required
                value={login.password}
                onChange={(e) => setLogin({ ...login, password: e.target.value })} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Entrar
            </Button>
            </Form>
        </div>
    </div>
  );
}
