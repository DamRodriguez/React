import { useState } from 'react'

export function TwitterCard ({children, userName, imgProfile}) {
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'card_2 is_following' : 'card_2'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <div className='tw_card'>
            <div className='card_1'>
                <img src={imgProfile} alt={`Perfil de ${children}`} />
                <div className='card_1_text'>
                    <p>{children}</p>
                    <p className='text_2'>{userName}</p>
                </div>
            </div>

            <div className={buttonClassName} onClick={handleClick}>
                <button>
                    <span className='followText'>{text}</span>
                    <span className='stopFollow'>Dejar de seguir</span>
                </button>
            </div>
        </div>
    )
}