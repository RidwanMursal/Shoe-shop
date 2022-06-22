import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import { StateContext } from '../context/stateContext'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      

      <Layout>
        < ToastContainer /> 
        <Component {...pageProps} />
        

      </Layout>
    </StateContext>
  )
}

export default MyApp
