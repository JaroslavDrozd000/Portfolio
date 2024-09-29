import Header from './components/header/Header';
import { About, Contact, Experiences, Hero, Projects, Tech } from './sections';

function App() {
  return (
    <div className='w-screen h-screen text-black'>
      <Header />
      <Hero />
      <About />
      <div className='bg-neutral-100'>
        <Tech />
      </div>
      <Experiences />
      <div className='bg-neutral-100'>
        <Projects />
      </div>
      <div className='bg-black'>
        <Contact />
      </div>
    </div>
  );
}

export default App;
