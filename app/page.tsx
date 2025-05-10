import Header from "components/Header";
import About from "components/About";
import WorkExperience from "components/WorksExperience";
import Footer from "components/Footer";
import Projects from "components/Projects";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="scroll-smooth">
        <section id="about">
          <About />
        </section>
       <section id="work-experience">
        <WorkExperience />
       </section>
        <section id="projects">
          <Projects />
        </section>
      </main>
      <Footer />
    </div>
  );
}
