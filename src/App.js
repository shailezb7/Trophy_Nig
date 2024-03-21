
import Navbar from './components/Navbar';
import mansion from './assets/mansion.jpg'
import WallpaperText from './components/WallpaperText';
import Designers from './components/Designers';
import Footer from './components/Footer';
import Properties from './components/Properties';
import Ads from './components/Ads';
import FeaturedProperty from './components/FeaturedProperty';

function App() {

  
  
  return (
    <div className='w-screen select-none'>
      {/* Top Section  */}
      <div>
      <Navbar/>
      <WallpaperText/>
      <img src={mansion} alt="mansion"  />
      </div>


      {/* Featured Property  */}
       <FeaturedProperty/>
      

       {/* Designers  */}
       <Designers/>


       {/* Properies  */}
       <Properties/>

       {/* Advertisement  */}
       <Ads/>
       

       <Footer/>
    </div>
  );
}

export default App;
