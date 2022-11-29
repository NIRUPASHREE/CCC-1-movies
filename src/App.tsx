import { HomePage } from './components/pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Favorites } from './components/pages/Favorites';

export const App: React.FC = () => {
  return (
    <div className="container mx-auto h-full min-h-screen min-w-full bg-black p-8">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
