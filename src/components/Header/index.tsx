// src/componentes/Cabecalho/index.tsx
import './styles.css'
import participant from '../../assets/images/participant.png'

const Header = () => {
    return (
        <header className="header">
            <div className="image-logo" role="img" aria-label='Drawer logo'></div>
            <img className='participant' src={participant} alt="Participant with a gift in hand" />
        </header>
    )
}

export default Header
