import { useGLTF, useTexture } from '@react-three/drei';
import { Euler, Vector3 } from '@react-three/fiber'
import { GLTFMaterials, GLTFNodes } from "../types";

import React from "react";

interface IHackerRoomProps {
    scale: Vector3 | [number, number, number];
    position: Vector3 | [number, number, number];
    rotation: Euler | [number, number, number];
}

const TEXTURE_PATHS = [
    'textures/desk/monitor.png',
    'textures/desk/screen.png'
] as string[];

useGLTF.preload('/models/hacker-room.glb');

export const HackerRoom: React.FC<IHackerRoomProps> = (props) => {
    const { nodes, materials } = useGLTF('/models/hacker-room.glb') as unknown as {
        nodes: GLTFNodes;
        materials: GLTFMaterials
    };

    const [monitorTxt, screenTxt] = useTexture(TEXTURE_PATHS);

    if (!nodes || !materials || !monitorTxt || !screenTxt) {
        return null;
    }

    return (
            <group {...props} dispose={null}>
                <mesh geometry={nodes.screen_screens_0.geometry} material={materials.screens}>
                    <meshMatcapMaterial map={screenTxt} />
                </mesh>
                <mesh geometry={nodes.screen_glass_glass_0.geometry} material={materials.glass} />
                <mesh geometry={nodes.table_table_mat_0_1.geometry} material={materials.table_mat} />
                <mesh geometry={nodes.table_table_mat_0_2.geometry} material={materials.computer_mat}>
                    <meshMatcapMaterial map={monitorTxt} />
                </mesh>
                <mesh geometry={nodes.table_table_mat_0_3.geometry} material={materials.server_mat} />
                <mesh geometry={nodes.table_table_mat_0_4.geometry} material={materials.vhsPlayer_mat} />
                <mesh geometry={nodes.table_table_mat_0_5.geometry} material={materials.stand_mat} />
                <mesh geometry={nodes.table_table_mat_0_6.geometry} material={materials.mat_mat} />
                <mesh geometry={nodes.table_table_mat_0_7.geometry} material={materials.arm_mat} />
                <mesh geometry={nodes.table_table_mat_0_8.geometry} material={materials.tv_mat}>
                    <meshMatcapMaterial map={monitorTxt} />
                </mesh>
                <mesh geometry={nodes.table_table_mat_0_9.geometry} material={materials.cables_mat} />
                <mesh geometry={nodes.table_table_mat_0_10.geometry} material={materials.props_mat} />
                <mesh geometry={nodes.table_table_mat_0_11.geometry} material={materials.ground_mat} />
                <mesh geometry={nodes.table_table_mat_0_12.geometry} material={materials.key_mat} />
            </group>
    )
}