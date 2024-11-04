/* eslint-disable no-undef */
import "./Login.css";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (eso) => {
    eso.preventDefault();
    // Validacion mas compleja
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !password) {
      setErrorMessage("Todos los campos son obligatorios");
    } else if (!emailRegex.test(email)) {
      setErrorMessage("Por favor, ingresa un correo electrónico válido");
    } else {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          setErrorMessage(errorData.message || "Credenciales inválidas");
        }
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setErrorMessage("Error al iniciar sesión");
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="from">
      {errorMessage && <p className="error">{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <label className="Label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
