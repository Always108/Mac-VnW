import * as S from './styled'
import Card from '../Card'
import sofa from '../../assets/Sofa.png'
import restaurant from '../../assets/Restaurant.png'
import banner from '../../assets/Banner.png'


const Body = () => {
    return(
        <>
           <S.Body>
            <S.Titulo>Promoção</S.Titulo>
            <S.CardsContainer>
                <Card image={sofa} texto = 'Que tal um #MéquiNoSofá?' />
                <Card image={restaurant} texto = 'Venha conhecer a nossa nova loja'/>
                <Card image={banner} texto = 'Confira as medidas que o Méqui adotou! ' />
            </S.CardsContainer>
           </S.Body>
        </>
    )
}

export default Body 