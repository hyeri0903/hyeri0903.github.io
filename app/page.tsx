import Header from "components/Header";
import Profile from "components/Profile";
import WorkExperience from "components/WorksExperience";
import Footer from "components/Footer";
import Projects from "components/Projects";
import Publication from "components/Publication";

export default function Page() {
  return (
    <div className="flex-col min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="scroll-smooth max-w-3xl mx-auto px-4">
        <section id="profile">
          <Profile />
        </section>
       <section id="work-experience">
        <WorkExperience />
       </section>
        <section id="projects">
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
