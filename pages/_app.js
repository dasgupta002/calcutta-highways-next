import { useRouter } from "next/router"
import Head from "next/head"

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

import "../styles/globals.css"
config.autoAddCss = false

function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <div className = "min-h-screen bg-[#292a2d] text-[#fbe9b0] text-center p-12">
      <Head>
        <title>Calcutta Highways</title>
        <link rel = "icon" href = "/favicon.png" />
      </Head>

      <main className = "flex flex-col items-center mx-auto md:w-[90%] lg:w-2/3">
        {
          router.route === "/" && <h1 className = "text-[#292a2d] text-4xl bg-[#fbe9b0] -rotate-9 w-fit p-4 mb-12">Calcutta Highways</h1>
        }

        {
          router.route === "/" && <h3 className = "text-lg mb-24">A caricature in the rawest of formats, started from my love for poetry and literature. Then befell against the rough eerie beauty of bylanes of Calcutta. Lastly coloured as much as I could with my handpicked sweated shots of twelveth hours.</h3>
        }

        <Component {...pageProps} />

        <footer>
          <p className = "text-white mb-4">Copyright © Subhrakanti Dasgupta | All Rights Reserved</p>
          <span className = "text-2xl">
            <a href = "https://www.instagram.com/lensseanix/"><FontAwesomeIcon icon = { faInstagram } /></a>
          </span>
        </footer>
      </main>
    </div>
  )
}

export default App