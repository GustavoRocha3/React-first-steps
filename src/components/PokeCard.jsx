import cardStyles from '../css/card.module.css'

function PokeCard(props) {
    const { name, info } = props;

    function calcHeight (height){
        return Math.floor(height*0.3048.toFixed(2));
    }

    function calcWeight (weight){
        return Math.floor(weight*0.45359237.toFixed(2));
    }

    return (
        <>
            <div className={cardStyles.card}>
            {name.length !== 0 ? (
                <>
                    <div className={cardStyles.headerCard}>
                        <span>{info.name}</span>
                    </div>
                    <div className={cardStyles.contentCard}>
                        <div className={cardStyles.contentCardImage}>
                            <img src={info.img} alt='imagem do pokemon' />
                            <div className={cardStyles.types}>
                                {info.types.map((type) => (
                                    <p>{type}</p>
                                ))}
                            </div>
                            <div className={cardStyles.stats}>
                                <p>Altura: {calcHeight(info.height)} metros</p>
                                <p>Peso: {calcWeight(info.weight)} Kgs</p>
                            </div>
                        </div>
                        <h4>Habilidades</h4>
                        <div className={cardStyles.moves}>
                            <div>
                                {info.moves.slice(0, 2).map((move, index) => (
                                    <p key={index}>{move.move.name}</p>
                                ))}
                            </div>
                            <div>
                                {info.moves.slice(2, 4).map((move, index) => (
                                    <p key={index}>{move.move.name}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div>
                {/* Código a ser renderizado quando image.length for igual a zero */}
                <p>Selecione um pokemon e ele aparecerá aqui</p>
                </div>
            )}
            </div>
        </>
    );
}

export default PokeCard;