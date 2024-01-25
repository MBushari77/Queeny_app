import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import Cart from './src/components/pages/Cart';

import Home from './src/components/pages/Home';
import Join from './src/components/pages/Join';
import Liked from './src/components/pages/Liked';
import ProductDetails from './src/components/pages/ProductDetails';
import Profile from './src/components/pages/Profile';
import Search from './src/components/pages/Search';
import Controler from './src/components/widgets/Controler';
import Nav from './src/components/widgets/Nav'


export default function App() {

  const [page, setPage] = useState('join')
  const [paId, setPaId] = useState(-1)
  const goBack = () => {
    setPage('home')
  }
  const goTo = (x) => {
    setPaId(x.id)
    setPage(x.page)
  }
  return (
    <>
    <ImageBackground style={styles.body}>
      { page !== 'join'?(<Nav page={page} handleBack={() => goBack()} />):null }
      <StatusBar />
      { page === 'join'?(<Join goTo={goTo} />):null }
      { page === 'home'?(<Home goTo={goTo} />):null }
      { page === 'search'?(<Search goTo={goTo} />):null }
      { page === 'cart'?(<Cart goTo={goTo} />):null }
      { page === 'profile'?(<Profile goTo={goTo} />):null }
      { page === 'liked'?(<Liked goTo={goTo} />):null }
      { page === 'details'?(<ProductDetails paramId={paId} />):null }
    </ImageBackground>
      {page !== 'join'?<Controler goTo={goTo} />:null}
      </>
  );
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: '#f1dcf6',
    // backgroundColor: 'whitesmoke'
  }
})
