export default function Suggestion() {
    const sugestao = [
        { nome: 'bad.vibes.memes', estatos: 'Segue você', seguir: 'Seguir' },
        { nome: 'chibirdart', estatos: 'Segue você', seguir: 'Seguir' },
        { nome: 'razoesparaacreditar', estatos: 'Novo no Instagram', seguir: 'Seguir' },
        { nome: 'adorable_animals', estatos: 'Segue você', seguir: 'Seguir' },
        { nome: 'smallcutecats', estatos: 'Segue você', seguir: 'Seguir' }
    ]

    return (

        <ul>
            {sugestao.map(item =>
                <li>
                    <div class="sugestao">
                        <div class="usuario">
                            <img src={`assets/img/${item.nome}.svg`} alt={item.nome} />
                            <div class="texto">
                                <div class="nome">{item.nome}</div>
                                <div class="razao">{item.estatos}</div>
                            </div>
                        </div>

                        <div class="seguir">{item.seguir}</div>
                    </div>
                </li>)}
        </ul >
    );
}