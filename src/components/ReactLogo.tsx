import { Float, useGLTF } from '@react-three/drei';
import React from 'react';
import {Material, Mesh} from "three";
import {Vector3} from "@react-three/fiber";

interface ITargetProps {
    position: Vector3 | [number, number, number];
}

useGLTF.preload('models/react.glb');

export const ReactLogo: React.FC<ITargetProps> = ({ position }) => {
    const { nodes, materials } = useGLTF('models/react.glb') as unknown as {
        nodes: Record<string, Mesh>;
        materials: Record<string, Material>
    };

    return (
        <Float floatIntensity={1}>
            <group position={position} scale={0.3} dispose={null}>
                <mesh
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                    position={[0, 0.079, 0.181]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.392, 0.392, 0.527]}
                />
            </group>
        </Float>
    )
}
