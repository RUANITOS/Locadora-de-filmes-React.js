import { useState } from 'react';
import "../components/estilos gerais/Geral.css";
import "../components/estilos gerais/detalhes.css";
function Cadastro({ exibirBotaoCadastrar }) {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [plano, setPlano] = useState('free');
    const [nomeCartao, setNomeCartao] = useState('');
    const [numCartao, setNumCartao] = useState('');
    const [cvc, setCvc] = useState('');
    const [isAssinado, setIsAssinado] = useState(false);
    function handleAssinarClick() {
        setIsAssinado(true);
    }
    const handleNomeChange = (event) => {
        setNome(event.target.value);
    };

    const handleTelefoneChange = (event) => {
        setTelefone(event.target.value);
    };

    const handleEnderecoChange = (event) => {
        setEndereco(event.target.value);
    };

    const handlePlanClick = (event) => {
        const selectedPlan = event.target.value;
        setPlano(selectedPlan);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Nome: ${nome}, Telefone: ${telefone}, Endereço: ${endereco}, Plano: ${plano}, Nome do cartão: ${nomeCartao}, Numero do cartão: ${numCartao}, CVC: ${cvc}`);
        // Aqui você pode enviar os dados do formulário para o backend ou fazer outras operações
    };
    const handleNumCartaoChange = (e) => {
        const num = e.target.value.replace(/[^\d]/g, '');
        if (num.length > 20) return;
        setNumCartao(num);
    };

    return (
        <div className="cadastro">
            <h1 className='titulo'>CADASTRO DE USUÁRIO</h1>
            <form onSubmit={handleSubmit}>
                <div className='detalhes-container '>
                    <div className='detalhes-pessoa'>
                        <div className="form-group">
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" id="nome" value={nome} onChange={handleNomeChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefone">Telefone:</label>
                            <input type="text" id="telefone" value={telefone} onChange={handleTelefoneChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endereco">Endereço:</label>
                            <input type="text" id="endereco" value={endereco} onChange={handleEnderecoChange} required />
                        </div>
                    </div>
                    <div className='detalhes-card'>
                        <div className="form-group">
                            <label htmlFor="nome-cartao">Nome do Cartão:</label>
                            <input type="text" id="nome-cartao" value={nomeCartao} onChange={(e) => setNomeCartao(e.target.value)} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="num-cartao">Número do Cartão:</label>
                            <input type="text" id="num-cartao" value={numCartao} onChange={handleNumCartaoChange} maxLength="20" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cvc">CVC:</label>
                            <input type="password" id="cvc" value={cvc} onChange={(e) => setCvc(e.target.value)} minLength="3" maxLength="3" required />
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="plano">Plano escolhido:</label>
                    <div className="plan-buttons">
                        <button
                            type="button"
                            className={plano === 'free' ? 'selected' : ''}
                            value="free"
                            onClick={handlePlanClick}
                        >
                            Free
                        </button>
                        <button
                            type="button"
                            className={plano === 'plus' ? 'selected' : ''}
                            value="plus"
                            onClick={handlePlanClick}
                        >
                            Plus
                        </button>
                    </div>
                </div>
                <div className='botada'>
                    <button
                        type="submit"
                        className={isAssinado ? "assinar assinado" : "assinar"}
                        onClick={handleAssinarClick}
                    >
                        {isAssinado ? "Assinado" : "Assinar"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Cadastro;
