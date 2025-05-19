import { useInViewport } from '@mantine/hooks';
import { YMInitializer } from 'react-yandex-metrika';

import { FloatingButton } from '@components/floating-button';
import { Certificate } from '@components/sections/Certificate';

import { About, Facts, Hero, Introduction, MainLayout, WorkStages, Donate, Contacts } from './components';

const App = () => {
    const { ref, inViewport } = useInViewport();

    return (
        <>
            <YMInitializer accounts={[101985849]} options={{
                webvisor: true,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true
            }} />
            <MainLayout>
                <FloatingButton heroInView={inViewport} />
                <Hero ref={ref} />
                <About />
                <Certificate />
                <WorkStages />
                <Introduction />
                <Facts />
                <Donate />
                <Contacts />
            </MainLayout>
        </>
    );
};

export default App;
