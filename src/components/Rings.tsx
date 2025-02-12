import React, {useCallback, useRef} from 'react'
import {useTexture} from "@react-three/drei";
import {Mesh, Vector3} from "three";
import {useGSAP} from "@gsap/react";

import gsap from 'gsap';

interface IRingsProps {
    position: Vector3 | [number, number, number];
}
export const Rings: React.FC<IRingsProps> = ({position}) => {
    const refList = useRef<Mesh[]>([]);
    const getRef = useCallback((mesh: Mesh) => {
        if (mesh && !refList.current.includes(mesh)) {
            refList.current.push(mesh);
        }
    }, []);

    const texture = useTexture('textures/rings.png');

    useGSAP(
        () => {
            if (refList.current.length === 0) return;

            let pos: Vector3;
            if(Array.isArray(position)) {
                pos = new Vector3(position[0], position[1], position[2])
            }else if (position instanceof Vector3) {
                pos = position;
            }else {
                throw new Error('Invalid position type');
            }

            refList.current.forEach((r) => {
                r.position.copy(pos);
            });

            gsap
                .timeline({
                    repeat: -1,
                    repeatDelay: 0.5,
                })
                .to(
                    refList.current.map((r) => r.rotation),
                    {
                        y: `+=${Math.PI * 2}`,
                        x: `-=${Math.PI * 2}`,
                        duration: 2.5,
                        stagger: {
                            each: 0.15,
                        },
                    },
                );
        },
        {
            dependencies: [position],
        },
    );

    return (
            <group scale={0.5}>
                {Array.from({ length: 4 }, (_, index) => (
                    <mesh key={index} ref={getRef}>
                        <torusGeometry args={[(index + 1) * 0.5, 0.1]}></torusGeometry>
                        <meshMatcapMaterial matcap={texture} toneMapped={false} />
                    </mesh>
                ))}
            </group>
    )
}
