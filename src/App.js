import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import ServicesExperience from "./components/ServicesExperience";

function APP() {
  return (
    <div>
      <Header />
      <Banner />
      <ServicesExperience />
      <Projects />
      <Footer />
    </div>
  );
}

export default APP;