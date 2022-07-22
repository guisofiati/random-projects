import "./styles.css";

export function Card(props) {
    return (
        <>
            <div className="card">
                <strong>CEP: </strong>
                <span>{props.cep}</span>
                <strong>Logradouro: </strong>
                <span>{props.logradouro}</span>
                <strong>Complemento: </strong>
                <span>{props.complemento}</span>
                <strong>Bairro: </strong>
                <span>{props.bairro}</span>
                <strong>Cidade: </strong>
                <span>{props.cidade}</span>
                <strong>Estado: </strong>
                <span>{props.estado}</span>
                <strong>DDD: </strong>
                <span>{props.ddd}</span>
            </div>
        </>
    );
}
