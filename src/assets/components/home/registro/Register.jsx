import { useState } from "react";
import "./Registro.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación más robusta
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !password || !confirmPassword) {
      setErrorMessage("Todos los campos son obligatorios");
    } else if (!emailRegex.test(email)) {
      setErrorMessage("Por favor, ingresa un correo electrónico válido");
    } else if (password.length < 8) {
      setErrorMessage("La contraseña debe tener al menos 8 caracteres");
    } else if (!/[A-Z]/.test(password)) {
      setErrorMessage("La contraseña debe contener al menos una mayúscula");
    } else if (!/[a-z]/.test(password)) {
      setErrorMessage("La contraseña debe contener al menos una minúscula");
    } else if (!/\d/.test(password)) {
      setErrorMessage("La contraseña debe contener al menos un número");
    } else if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden");
    } else {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            password,
          }),
        });

        if (!response.ok) {
          throw new Error("Error al registrarse");
        }

        console.log("Registro exitoso");
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="Container">
  {errorMessage && <p className="error">{errorMessage}</p>}
  <form className="Handle" onSubmit={handleSubmit}>
    <label className="Email">
      Email:
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    </label>

    <label className="Contra">
      Contraseña:
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </label>

    <label className="confirmacion">
      Confirmar contraseña:
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
    </label>

    <button className="boton" type="submit" disabled={isLoading}>
      {isLoading ? "Registrando..." : "Registrarse"}
    </button>
  </form>
</div>
  );
};

export default Register;
