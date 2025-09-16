import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

export default function Root() {

    const theme = 'dark';

    return (
        <div className='Root'>
            <div className={`theme-${theme}`}>

                <Header />

                <main>

                    <Hero />

                </main>

            </div>
        </div>
    )
}
