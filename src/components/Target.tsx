import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import {Vector3} from "@react-three/fiber";
import {Mesh} from "three";
import gsap from 'gsap';

interface ITargetProps {
    position: Vector3 | [number, number, number];
}

export const Target: React.FC<ITargetProps> = ({ position }) => {
    const targetRef = useRef<Mesh>(null)
    const { scene } = useGLTF(
        'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf',
    );

    useGSAP(() => {
        if (targetRef.current) {
            gsap.to(targetRef.current.position, {
                y: targetRef.current.position.y + 0.5,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
            });
        }
    }, [targetRef]);

    return (
        <mesh position={position} ref={targetRef} rotation={[0, Math.PI / 5, 0]} >
            <primitive object={scene} />
        </mesh>
    )
}
