import ContactSection from "../Shared/ContactSection";
import Counter from "../Shared/Counter";
import AbbBanner from "./AbBanner/AbbBanner";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";


const AboutMe = () => {

    return (
        <div className='pt-20 lg:pt-24 text-center overflow-hidden'>
            <div className="space-y-5">
                <h3 className="text-6xl inline  relative  font-semibold text-center after:content-['# ']  after:bg-gold ">About Me
                    <span className="content-[''] border-2 border-gold w-1/2  left-0 bottom-0   absolute "></span>
                </h3>
                <p className='text-2xl text-basic'>What you have to Know</p>
            </div>

            <AbbBanner />
            <Counter />
            <Education />
            <Experience />
            <ContactSection />

        </div>
    );
};

export default AboutMe;