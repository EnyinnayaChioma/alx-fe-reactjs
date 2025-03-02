import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header';
import MainContent from './components/MainContent'
import Counter from './components/Counter'
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';


// import Counter from './components/Counter';

import './App.css'

function App() {
  return (
    <>

    <Header />
    <MainContent />
    <Counter/>
    <Footer />
    <WelcomeMessage />
    <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />

    </>
  )
}


export default App
