import Header from './components/Header';
import FeatureGrid from './components/FeatureGrid';
import DemoDashboard from './components/DemoDashboard';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0b0f]">
      <Header />
      <FeatureGrid />
      <DemoDashboard />
      <CTA />
      <footer className="py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600 dark:text-gray-300">
          <p>© {new Date().getFullYear()} AssocCloud — All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a href="#features" className="hover:text-gray-900 dark:hover:text-white">Features</a>
            <a href="#get-started" className="hover:text-gray-900 dark:hover:text-white">Get Started</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Privacy</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-white">Terms</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
