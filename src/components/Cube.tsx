import gsap from 'gsap';
import {Vector3} from "@react-three/fiber";
import { useGSAP } from '@gsap/react';
import React, { useRef, useState } from 'react';
import { Float, useGLTF, useTexture } from '@react-three/drei';
import {Mesh} from "three";
import {GLTFNodes} from "../types";
interface ICubeProps {
    position: Vector3 | [number, number, number];
}

useGLTF.preload('models/cube.glb');
export const Cube: React.FC<ICubeProps> = ({position}) => {
    const { nodes } = useGLTF('models/cube.glb') as unknown as {
        nodes: GLTFNodes;
    };

    const texture = useTexture('textures/cube.png');

    const cubeRef = useRef<Mesh>(null);
    const [hovered, setHovered] = useState<boolean>(false);

    useGSAP(() => {
        if(cubeRef.current) {
            gsap
                .timeline({
                    repeat: -1,
                    repeatDelay: 0.5,
                })
                .to(cubeRef.current.rotation, {
                    y: hovered ? '+=2' : `+=${Math.PI * 2}`,
                    x: hovered ? '+=2' : `-=${Math.PI * 2}`,
                    duration: 2.5,
                    stagger: {
                        each: 0.15,
                    },
                });
        }
    }, [cubeRef]);

    return (
        <Float floatIntensity={2}>
            <group position={position} rotation={[2.6, 0.8, -1.8]} scale={0.74} dispose={null}>
                <mesh
                    ref={cubeRef}
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube.geometry}
                    material={nodes.Cube.material}
                    onPointerEnter={() => setHovered(true)}>
                    <meshMatcapMaterial matcap={texture} toneMapped={false} />
                </mesh>
            </group>
        </Float>
    )
}
