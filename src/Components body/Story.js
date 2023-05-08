export default function Story() {
    const lista_nomes = ['9gag', 'meowed', 'barked', 'nathanwpylestrangeplanet', 'wawawicomics', 'respondeai', 'filomoderna', 'memeriagourmet'];

    return (

        <ul>
            {lista_nomes.map(item =>
                <li class="story">
                    <div class="imagem">
                        <img src={`assets/img/${item}.svg`} alt={item} />
                    </div>
                    <div class="usuario">
                        {item}
                    </div>
                </li>)}
        </ul>
    );
}