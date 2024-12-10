import Hero from "./hero/page";
import Skills from "./skills/page";
import Projects from "./projects/page";
import Experience from "./experience/page";
import About from "./about/page";

export default function Home() {
    return (
        <>
            <Hero/>
            <About/>
            <Experience/>
            <Projects/>
            <Skills/>
        </>
    );
}
