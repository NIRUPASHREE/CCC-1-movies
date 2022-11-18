import { HomePage } from './components/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Favorites } from './components/Favorites';

export const App: React.FC = () => {
  return (
    <div className="container mx-auto h-full min-h-full min-w-full bg-black p-8 ">
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
