import Header from './components/Header/Header';
import APIDebug from './components/APIDebug/APIDebug';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow overflow-auto">
        <APIDebug />
      </div>
    </main>
  );
}