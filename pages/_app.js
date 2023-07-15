import Layout from "../components/Layout";
import '../styles/globals.css';

import "@fortawesome/fontawesome-svg-core/styles.css"; 
import "prismjs/themes/prism-tomorrow.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "prismjs"

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

function PersonalWebsite({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default PersonalWebsite;