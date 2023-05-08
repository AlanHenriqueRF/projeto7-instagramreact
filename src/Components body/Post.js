import { useState } from "react";

export default function Post() {
    let [salva,setSalva] = useState('bookmark-outline')
    let [curtida,setCurtida] = useState("heart-outline")
    let [classe_cur, setClasse_cur] = useState('noliked')

    const objeto_post = [
        { perfil: 'meowed', link_img: "assets/img/gato-telefone.svg", nome_img: "gato-telefone", curtida_nome: 'respondeai', num_curtida: 101523 },
        { perfil: 'barked', link_img: "assets/img/dog.svg", nome_img: "dog", curtida_nome: 'adorable_animals', num_curtida: 99159 },
        { perfil: 'meowed', link_img: "assets/img/gato-telefone.svg", nome_img: "gato-telefone", curtida_nome: '9gag', num_curtida: 203580 }
    ]

    function salva_img() {
        if (salva === 'bookmark-outline') {
            salva = 'bookmark';
            setSalva(salva);
        } else {
            salva = 'bookmark-outline';
            setSalva(salva);
        }
    }

    function curti_foto(index) {        
        if (curtida === "heart-outline") {
            curtida = 'heart';
            classe_cur = 'liked';
            setCurtida(curtida);
            setClasse_cur(classe_cur);}
        else{
            curtida = 'heart-outline';
            classe_cur = 'noliked';
            setCurtida(curtida);
            setClasse_cur(classe_cur);}
        console.log(classe_cur,index);
        console.log(curtida, index);
        }

        
        return (
            <ul>
                {objeto_post.map((item, index) =>
                    <li key={index}><div class="post">
                        <div class="topo">
                            <div class="usuario">
                                <img src={`assets/img/${item.perfil}.svg`} alt={item.perfil} />
                                {item.perfil}
                            </div>
                            <div class="acoes">
                                <ion-icon name="ellipsis-horizontal"></ion-icon>
                            </div>
                        </div>

                        <div class="conteudo">
                            <img src={item.link_img} alt={item.nome_img} />
                        </div>

                        <div class="fundo">
                            <div class="acoes">
                                <div>
                                    <ion-icon onClick={() => curti_foto(index)} name={curtida} className={classe_cur}></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <div onClick={salva_img}>
                                    <ion-icon name={salva}></ion-icon>
                                </div>
                            </div>

                            <div class="curtidas">
                                <img src={`assets/img/${item.curtida_nome}.svg`} alt={item.curtida_nome} />
                                <div class="texto">
                                    Curtido por <strong>curtida_nome</strong> e <strong>outras {item.num_curtida} pessoas</strong>
                                </div>
                            </div>
                        </div>
                    </div></li>)}</ul>
        );
    }