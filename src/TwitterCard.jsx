import { useState } from 'react'

export function TwitterCard ({children, userName}) {
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
    ? 'card_2 is_following'
    : 'card_2'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <div className='tw_card'>
            <div className='card_1'>
                <img src="data:image/jpeg;base64,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" alt="huevo" />
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