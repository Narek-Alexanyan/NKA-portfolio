import gsap from 'gsap';

import {Suspense, useState} from 'react'
import {myProjects} from "../constants";
import {ArrowLeft, ArrowRight, ArrowUpFromDot} from "lucide-react";
import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from "@react-three/drei";
import {Loading} from "../components/Loading.tsx";
import {DemoComputer} from "../components/DemoComputer.tsx";
import {useGSAP} from "@gsap/react";

const projectCount = myProjects.length;

type direction = 'previous' | 'next'
export const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)

    const handleNavigation = (direction: direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if(direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        })
    }

    useGSAP(() => {
        gsap
    })

    const currentProject = myProjects[selectedProjectIndex];
    return (
        <section className="c-space my-20">
            <p className="head-text">My Selected Work</p>

            <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                    <div className="absolute top-0 right-0">
                        <img src={currentProject.spotLight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
                    </div>

                    <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={currentProject.logoStyle}>
                        <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
                    </div>

                    <div className="flex flex-col gap-5 text-white-600 my-5">
                        <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p>

                        <p className="animatedText">{currentProject.desc}</p>
                        <p className="animatedText">{currentProject.subDesc}</p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-5">
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className="tech-logo">
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            ))}
                        </div>

                        <a
                            className="flex items-center gap-2 cursor-pointer text-nka--white-600"
                            href={currentProject.href}
                            target="_blank"
                            rel="noreferrer">
                            <p>Check Live Site</p>
                            <ArrowUpFromDot color="#ffffff" />
                        </a>
                    </div>

                    <div className="flex justify-between items-center mt-7">
                        <button className="arrow-btn" onClick={() => handleNavigation('previous')}>
                            <ArrowLeft color="#ffffff" />
                        </button>

                        <button className="arrow-btn" onClick={() => handleNavigation('next')}>
                            <ArrowRight color="#ffffff" />
                        </button>
                    </div>
                </div>

                <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                    <Canvas>
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />

                        <Center>
                            <Suspense fallback={<Loading />}>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                    <DemoComputer texture={currentProject.texture} />
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                    </Canvas>
                </div>
            </div>
        </section>
    )
}
