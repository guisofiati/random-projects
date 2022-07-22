import React, { useState } from "react";

import { Card } from "../../components/Card";
import "./styles.css";

export function Home() {
    const obj = {
        cep: "",
        logradouro: "",
        complemento: "",
        bairro: "",
        localidade: "",
        uf: "",
        ddd: "",
    };

    const [cepResult, setCepResult] = useState({ obj });

    function handleGetCep() {
        const userCepTyped = document.getElementById("cep-number").value;
        const userCepTypedConverted = userCepTyped.replace("-", "");

        fetch(`https://viacep.com.br/ws/${userCepTypedConverted}/json`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCepResult({
                    cep: data.cep,
                    logradouro: data.logradouro,
                    complemento: data.complemento,
                    bairro: data.bairro,
                    localidade: data.localidade,
                    uf: data.uf,
                    ddd: data.ddd,
                });
            });
    }

    return (
        <>
            <div className="container">
                <h1>
                    VIA <abbr title="Código de Endereçamento Postal">CEP</abbr>{" "}
                    API
                </h1>
                <p>
                    Consulte seu <strong>C</strong>ódigo de <strong>E</strong>
                    ndereçamento <strong>P</strong>ostal e obtenha os dados de
                    endereço.
                </p>
                <label htmlFor="cep-number">Digite seu CEP</label>
                <input
                    name="cep-number"
                    id="cep-number"
                    type="text"
                    placeholder="Ex: 00000-000"
                    // minLength={8}
                    // maxLength={8}
                    pattern="[0-9]{5}-[0-9]{3}"
                    title="Seu CEP deve ter 8 numeros"
                />
                <button type="button" onClick={handleGetCep}>
                    Pesquisar
                </button>
                <Card
                    key={cepResult.cep}
                    cep={cepResult.cep}
                    logradouro={cepResult.logradouro}
                    complemento={cepResult.complemento}
                    bairro={cepResult.bairro}
                    cidade={cepResult.localidade}
                    estado={cepResult.uf}
                    ddd={cepResult.ddd}
                />
            </div>
        </>
    );
}
