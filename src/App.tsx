import { Header } from './components';
import {
  About,
  Contact,
  Experiences,
  Hero,
  Projects,
  Skills,
} from './sections';

function App() {
  return (
    <div className='w-screen h-screen text-black'>
      <Header />
      <Hero />
      <About />
      <div className='my-20 bg-black shadow-[0_0_20px_10px_rgba(0,0,0,0.5)]'>
        <Skills />
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
