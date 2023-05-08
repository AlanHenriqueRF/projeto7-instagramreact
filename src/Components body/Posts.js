import Post from "./Post";

export default function Posts() {
    const objeto_post = [
        { perfil: 'meowed', link_img: "assets/img/gato-telefone.svg", nome_img: "gato-telefone", curtida_nome: 'respondeai', num_curtida: 101523 },
        { perfil: 'barked', link_img: "assets/img/dog.svg", nome_img: "dog", curtida_nome: 'adorable_animals', num_curtida: 99159 },
        { perfil: 'meowed', link_img: "assets/img/gato-telefone.svg", nome_img: "gato-telefone", curtida_nome: '9gag', num_curtida: 203580 }
    ]
    return <>
        {objeto_post.map(item => <Post item={item} />)}
    </>;
}