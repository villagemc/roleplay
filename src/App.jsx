import { Fragment } from 'react';
import Sticky from './components/Sticky/Sticky';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Alert from './components/Alert/Alert';
import Answer from './components/Answer/Answer';
import Price from './components/Price/Price';
import Footer from './components/Footer/Footer';
import Popup from './components/Popup/Popup';
import {
  initialInfoOne,
  initialInfoTwo
} from './initials/initials';

function App() {
  return (
    <Fragment>
      <Sticky />
      <Header />
      <main>
        <Info
          info={initialInfoOne}
          infoID={"more"}
        />
        <Alert />
        <Info
          info={initialInfoTwo}
          infoID={false}
        />
        <Answer />
        <Price />
      </main>
      <Footer />
      <Popup />
    </Fragment>
  )
}

export default App
