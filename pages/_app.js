import '@/styles/globals.css'
import '@/styles/login.css'
import '@/styles/picturealbum/picturealbum.css'
import '@/styles/picturealbum/picturelist.css'

import { AllProvider } from '@/context/Allprovider';

// context放這裡當全域

export default function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <AllProvider>
      {getLayout(<Component {...pageProps} />)}
    </AllProvider>

  )
}
