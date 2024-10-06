import Header from './components/Header/Header';
import DynamicMap from './components/Map/DynamicMap';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow overflow-hidden">
      <DynamicMap />
      </div>
    </main>
  );
}