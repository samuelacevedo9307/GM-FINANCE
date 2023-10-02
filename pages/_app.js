import "@/styles/style.css";
import { SessionProvider } from "next-auth/react";
import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "@/node_modules/bootstrap-icons/font/bootstrap-icons.css" ;
import { MoralisProvider } from "react-moralis";
import $ from "jquery";
import { useEffect } from "react";


export default function App({ Component, pageProps }) {

  useEffect (()=> {
    $(".toggleMenu").on ('click', function(){
      $("#mainMenu").toggleClass ('open');
    });
  },[]);


  return (
    <>
      <MoralisProvider initializeOnMount={false}>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </MoralisProvider> 

    </>
  );
}
