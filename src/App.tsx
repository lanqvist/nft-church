import { About, Facts, Hero, Introduction, MainLayout, WorkStages, Donate, Contacts } from './components';

const App = () => (
    <MainLayout>
        <Hero />
        <Introduction />
        <About />
        <WorkStages />
        <Facts />
        <Donate />
        <Contacts />
    </MainLayout>
);

export default App;
