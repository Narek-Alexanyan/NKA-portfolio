import * as THREE from 'three'
import {Material, Mesh} from "three";
import { GLTF } from "three/examples/jsm/Addons.js";

export interface NavLink {
    id: number,
    name: string,
    href: string,
}

export interface GLTFNodes {
    Cube: Mesh;
    screen_screens_0: Mesh;
    screen_glass_glass_0: Mesh;
    table_table_mat_0_1: Mesh;
    table_table_mat_0_2: Mesh;
    table_table_mat_0_3: Mesh;
    table_table_mat_0_4: Mesh;
    table_table_mat_0_5: Mesh;
    table_table_mat_0_6: Mesh;
    table_table_mat_0_7: Mesh;
    table_table_mat_0_8: Mesh;
    table_table_mat_0_9: Mesh;
    table_table_mat_0_10: Mesh;
    table_table_mat_0_11: Mesh;
    table_table_mat_0_12: Mesh;
}

export interface GLTFMaterials {
    screens: Material;
    glass: Material;
    table_mat: Material;
    computer_mat: Material;
    server_mat: Material;
    vhsPlayer_mat: Material;
    stand_mat: Material;
    mat_mat: Material;
    arm_mat: Material;
    tv_mat: Material;
    cables_mat: Material;
    props_mat: Material;
    ground_mat: Material;
    key_mat: Material;
}

export interface Sizes {
    deskScale: number;
    deskPosition: [number, number, number];
    cubePosition: [number, number, number];
    reactLogoPosition: [number, number, number];
    ringPosition: [number, number, number];
    targetPosition: [number, number, number];
}

export interface Project {
    title: string,
    desc: string,
    subDesc: string,
    href: string,
    texture: string,
    logo: string,
    logoStyle: {
        backgroundColor: string,
        background?: string,
        border: string,
        boxShadow: string,
    },
    spotLight: string,
    tags: {
        id: number,
        name: string,
        path: string
    }[]
}

export interface clientReview {
    id: number,
    name: string,
    position: string,
    img: string,
    review: string,
}

export interface workExperience {
    id: number,
    name: string,
    pos: string,
    duration: string,
    title: string,
    icon: string,
    animation: string,
}

export type GLTFResult = GLTF & {
    nodes: {
        EyeLeft: THREE.SkinnedMesh
        EyeRight: THREE.SkinnedMesh
        Wolf3D_Head: THREE.SkinnedMesh
        Wolf3D_Teeth: THREE.SkinnedMesh
        Wolf3D_Hair: THREE.SkinnedMesh
        Wolf3D_Glasses: THREE.SkinnedMesh
        Wolf3D_Body: THREE.SkinnedMesh
        Wolf3D_Outfit_Bottom: THREE.SkinnedMesh
        Wolf3D_Outfit_Footwear: THREE.SkinnedMesh
        Wolf3D_Outfit_Top: THREE.SkinnedMesh
        Hips: THREE.Bone
    }
    materials: {
        Wolf3D_Eye: THREE.MeshStandardMaterial
        Wolf3D_Skin: THREE.MeshStandardMaterial
        Wolf3D_Teeth: THREE.MeshStandardMaterial
        Wolf3D_Hair: THREE.MeshStandardMaterial
        Wolf3D_Glasses: THREE.MeshStandardMaterial
        Wolf3D_Body: THREE.MeshStandardMaterial
        Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial
        Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial
        Wolf3D_Outfit_Top: THREE.MeshStandardMaterial
    }
}