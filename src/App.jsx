import './App.css'
import { TwitterCard } from './TwitterCard'

export function App () {

    return (
        <section className='App'>
            <TwitterCard userName='damrod_'>
                Damián Rodríguez
            </TwitterCard>
            <TwitterCard userName='pedrolol1'>
                Pedro Alfonso
            </TwitterCard>
        </section>
    )
}
