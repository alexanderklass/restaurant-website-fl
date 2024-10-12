import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BasicLayout from './components/BasicLayout.tsx';
import About from './pages/About.tsx';
import Menu from './pages/Menu.tsx';
import Events from './pages/Events.tsx';
import Bistro from './pages/Bistro.tsx';

function App() {
    return (
        <div className={'h-full'}>
            <Routes>
                <Route element={<BasicLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/bistro" element={<Bistro />} />
                    <Route path="/restaurant" element={<Events />} />
                    <Route path={'/impressum'} element={<About />} />
                    <Route path={'/speisekarte'} element={<Menu />} />
                    <Route path={'/events'} element={<Events />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
