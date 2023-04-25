import Header from 'src/components/Header';
import styles from './app.module.scss';
import Presentation from 'src/components/Presentation';
import Footer from 'src/components/Footer';


export function App() {
  return (
    <div className="bg-white">
      <Header/>
      <Presentation/>
      <Footer/>
    </div>
  );
}

export default App;
