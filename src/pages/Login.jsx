import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"

const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate();

    const Login = (e) => {
        e.preventDefault();
        alert(`Bem-Vindo(a),${email}`);
        navigate("/");
    }

    return (
        <main>
            <div>
                <h2>
                    Login Gamer
                </h2>

                <form onSubmit={Login}>
                    <div>
                        <label>E-mail</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu@email.com"

                        />
                    </div>

                    <div>
                        <label>Senha</label>
                        <input
                            type="password"
                            required
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="••••••••"

                        />
                    </div>

                    <button
                        type="submit"

                    >
                        Entrar
                    </button>
                </form>

                <p >
                    Ainda não tem conta? <Link to="/contato">Fale conosco</Link>
                </p>
            </div>
        </main>
    )
}

export default Login