import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './style/index.css';

function App() {
  const bannerTitle = 'Be creative';
  const bannerContent = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus libero, quibusdam illo natus minima sint adipisci iusto iste molestiae nulla tempora est omnis, provident, nemo voluptates quod nostrum ea nobis.quibusdam illo natus minima sint adipisci iusto iste molestiae nulla tempora est omnis, provident, nemo voluptates quod nostrum ea nobis.';
  const imageUrls = [
    'https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1537824598505-99ee03483384?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1617634667039-8e4cb277ab46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=668&q=80',
  ]; 
  return (
    <div>
      <Header />
      <Banner title={bannerTitle} content={bannerContent}/>
      <Gallery images={imageUrls}/>
      <Footer />
    </div>
    
    
  );
}

export default App;
