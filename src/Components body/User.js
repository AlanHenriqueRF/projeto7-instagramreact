import { useState } from "react";

export default function User() {
    let [nome,setNome] = useState('catanacomics');
    let [link, setLink] = useState('assets/img/catanacomics.svg')
    
    function mudanome(){
        let novoNome  = prompt('Qual o seu nome ?');
        if (novoNome){
            setNome(novoNome);
        }
    }

    function mudalink(){
        let novoLink= prompt('Digite a url da imagem que gostaria de colocar ?');
        if (novoLink && novoLink.slice(0,5)==='https'){
            setLink(novoLink)
        }
    }
    return (
        <div class="usuario">
            <img src={link} onClick={mudalink} alt="imagem de perfil" />
            <div class="texto" onClick={mudanome}>
                <span>
                    <strong>{nome}</strong>
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    );
}