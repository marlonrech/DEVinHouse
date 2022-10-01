import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import React from "react";

export default function Content() {

//   const [login, setLogin] = useState({
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   function Logar(e) {
//     e.preventDefault();
//     alert("usuario logado");
//     navigate("/home");
//   }

  return (
      <div className="main">
        <h1>Como construir meu primeiro site</h1>
        <p>A arte de fazer paginas personalizaveis</p>
        {/* <div className="position-absolute top-50 start-50 translate-middle">
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
                onChange={(e) =>
                  setLogin({ ...login, password: e.target.value })
                }
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Entrar
            </Button>
          </Form>
        </div> */}
        <Form.Group>
            <Form>
                <Button>Clique aqui</Button>
            </Form>
        </Form.Group>
      </div>
  );
}
