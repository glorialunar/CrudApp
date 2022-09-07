import tristeza from '../img/tristeza.png';
import styles from 'styled-components';

const Message = ({msg, color}) => {
    return (
        <>
            <MessageContainer>
                <img src={tristeza} alt="Imagen de tristeza" className='tristeza'/>
                <section className='info-container'>
                    <h2>Awwww... don't worry!!</h2>
                    <p>It's just an {msg}</p>
                </section>
            </MessageContainer>
        </>
    )
};

export default Message;

const MessageContainer = styles.div`
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5rem auto;

    h2{
        font-size: 1.5rem;
    }

    .tristeza{
        width:40%
    }

    .info-container{
        text-align: center;
    }

`
