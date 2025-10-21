import Header from "@/components/header";
import Hero from "@/components/sections/hero";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />

      <section className="bg-yellow-700 text-white h-screen">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        cumque quasi unde, odio corporis quod dicta. Nam explicabo iste maiores
        eos voluptate pariatur, ducimus molestias, culpa consequuntur doloremque
        eligendi minus.
      </section>

      <section className="bg-green-700 text-white h-screen">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        cumque quasi unde, odio corporis quod dicta. Nam explicabo iste maiores
        eos voluptate pariatur, ducimus molestias, culpa consequuntur doloremque
        eligendi minus.
      </section>
    </main>
  );
}
