import Header from "components/Header";
import Home from "components/Home";
import Profile from "components/Profile";
import WorkExperience from "components/WorksExperience";
import Footer from "components/Footer";
import Projects from "components/Projects";

export default function Page() {
  return (
    <div className="flex-col min-h-screen bg-white dark:bg-black w-full">
      <Header />
      <main className="scroll-smooth mx-auto">
        <section>
          <Home />
        </section>
        <section id="profile" className="scroll-mt-20">
          <Profile />
        </section>
       <section id="work-experience" className="scroll-mt-20">
        <WorkExperience />
       </section>
        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>
        {/* <section id="publication">
          <Publication />
        </section> */}
      </main>
      <Footer />
    </div>
  );
}
