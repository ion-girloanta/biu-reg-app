import FigmaPageTemplate from './components/FigmaPageTemplate';
import { RegistrationForm } from './components/RegistrationForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <FigmaPageTemplate />
      
      <main className="flex-grow bg-gray-50">        
        {/* Registration Form */}
        <div className="py-8">
          <div className="max-w-7xl mx-auto px-4">
            <RegistrationForm />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
