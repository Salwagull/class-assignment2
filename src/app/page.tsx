import Header from "./components/header/header"
import Hero from "./components/herosection/hero"
// import Link from "next/link"
import Footer from "./components/footer/footer"

export default function Home() {
  return (
    <div>
      
      {/* <Header home="Home Page"></Header> */}
      <Header></Header>
      <section>
        <main>
      <Hero 
          title="Welcome to Main Home Page"
           buttonText="About Page" buttonLink="about">
      </Hero>
      </main>
      </section>
      <Footer></Footer>
    </div>
  )
}
