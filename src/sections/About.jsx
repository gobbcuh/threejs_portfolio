import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    return (
        <section className = "c-space my-20">
            <div className = "grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl: row-span-3">
            <div className = "grid-container">
                <img src = "/assets/grid1.png" alt="grid-1" className = "w-full sm:h-[276px] h-fit object-contain"/>
                <div>
                    <p className = "grid-headtext">Hi, I am Jasmin</p>
                    <p className = "grid-subtext">Currently a Computer Science student, exploring both frontend and backend development by learning new technologies and building projects.</p>
                </div>
            </div>
        </div>

                <div className="col-span-1 xl: row-span-3">
                    <div className = "grid-container">
                        <img src = "/assets/grid2.png" alt="grid-2" className = "w-full sm:h-[276px] h-fit object-contain"/>
                        <div>
                            <p className = "grid-headtext">Tech Stack</p>
                            <p className = "grid-subtext">I have experience in a wide range of technologies, including JavaScript, React, Node.js, Express.js, and MongoDB.</p>
                        </div>
                    </div>
                </div>

                    <div className="col-span-1 xl: row-span-4">
                        <div className = "grid-container">
                            <div className = "rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                                <Globe
                                    height = {326}
                                    width = {326}
                                    backgroundColor = "rgba(0, 0, 0, 0)"
                                    backgroundImageOpacity = {0.5}
                                    showAtmosphere
                                    showGraticules
                                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                    labelsData = {[{
                                        lat: 14.445, lng: 120.907,
                                        text: "I'm here!",
                                        color: 'white',
                                        size: 20,
                                    }]}
                                />
                            </div>

                            <div>
                                <p className = "grid-headtext">Location</p>
                                <p className = "grid-subtext">I'm currently based in the Philippines.</p>
                                <Button name = "Contact Me" isBeam containerClass = "w-full mt-10"/>
                            </div>
                        </div>
                    </div>

                        <div className = "col-span-2 xl: row-span-3">
                            <div className = "grid-container">
                                <img src = "/assets/grid3.png" alt="grid-3" className = "w-full sm:h-[266px] h-fit object-contain" />
                                <div>
                                    <p className = "grid-headtext">My Passion for Coding</p>
                                    <p className = "grid-subtext">Coding allows me to build things that satisfy my curiosity and interest, while also solving real-world problems.</p>
                                </div>
                            </div>
                        </div>

                        <div className>

                        </div>

            </div>
        </section>
    )
}
export default About
