import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import {HackerRoom} from "../components/HackerRoom.tsx";
import {Loading} from "../components/Loading.tsx";
import {Suspense} from "react";

export const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
                    Hi, I am Narek <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<Loading />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <HackerRoom scale={0.005} position={[0,0,0]} rotation={[0.1, -Math.PI / 2, 0]} />

                        <ambientLight intensity={1}/>
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
