import './App.css'
import { TwitterCard } from './TwitterCard.jsx'

const users = [
    {
        userName: 'damrod_',
        name: 'Damián Rodríguez',
        imgProfile: '/public/assets/img-profile/perro.jpeg',
        isFollowing: true
    },
    {
        userName: 'pedro123',
        name: 'Pedro Alfonso',
        imgProfile: '/public/assets/img-profile/gato.jpeg',
        isFollowing: false
    },
    {
        userName: 'juanCa90',
        name: 'Juan Carlos',
        imgProfile: '/public/assets/img-profile/sapo.jpg',
        isFollowing: false
    },
    {
        userName: 'hernesto4',
        name: 'Hernesto Gutierrez',
        imgProfile: '/public/assets/img-profile/pato.jpg',
        isFollowing: true
    }
]

export function App () {

    return (
        <section className='App'>
            {
                users.map(user => {
                    const {userName, name, imgProfile, isFollowing} = user
                    return (
                        <TwitterCard
                            key={userName}
                            userName={userName}
                            imgProfile={imgProfile}
                            isFollowing={isFollowing}
                        >
                            {name}
                        </TwitterCard>
                    )
                })
            }
        </section>
    )
}
