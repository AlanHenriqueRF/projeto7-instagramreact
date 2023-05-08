import { useState } from "react";

export default function Post(props) {
    let [salva, setSalva] = useState('bookmark-outline')
    let [curtida, setCurtida] = useState("heart-outline")
    let [classe_cur, setClasse_cur] = useState('noliked')
    let [num_likes, setNum_likes] = useState(props.item.num_curtida)
    let likes = props.item.num_curtida;


    function salva_img() {
        if (salva === 'bookmark-outline') {
            salva = 'bookmark';
            setSalva(salva);
        } else {
            salva = 'bookmark-outline';
            setSalva(salva);
        }
    }

    function curti_foto() {
        if (curtida === "heart-outline") {
            curtida = 'heart';
            classe_cur = 'liked';
            setCurtida(curtida);
            setClasse_cur(classe_cur);
            console.log(num_likes!==likes+1)
            if (num_likes !== likes+1 ){
                num_likes++;
                setNum_likes(num_likes);
            }
        }
        else {
            curtida = 'heart-outline';
            classe_cur = 'noliked';
            setCurtida(curtida);
            setClasse_cur(classe_cur);
            if (num_likes !== likes-1 ){
                num_likes--;
                setNum_likes(num_likes);
            }
        }
        
    }

    function clica_foto(){
        curtida = 'heart';
        classe_cur = 'liked';
        setCurtida(curtida);
        setClasse_cur(classe_cur);
        if (num_likes !== likes+1 ){
            num_likes++;
            setNum_likes(num_likes);
        }
    }


    return (
        <div class="post" data-test="post">
            <div class="topo">
                <div class="usuario">
                    <img src={`assets/img/${props.item.perfil}.svg`} alt={props.item.perfil} />
                    {props.item.perfil}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo" >
                <img src={props.item.link_img} alt={props.item.nome_img} onClick={clica_foto} data-test="post-image" />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon onClick={() => curti_foto()} name={curtida} data-test="like-post" class={classe_cur}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div onClick={salva_img} data-test="save-post">
                        <ion-icon name={salva}></ion-icon>
                    </div>
                </div>

                <div class="curtidas" >
                    <img src={`assets/img/${props.item.curtida_nome}.svg`} alt={props.item.curtida_nome} />
                    <div class="texto" data-test="likes-number">
                        Curtido por <strong>{props.item.curtida_nome}</strong> e <strong>outras {num_likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
}