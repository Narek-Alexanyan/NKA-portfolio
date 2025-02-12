import {Material, Mesh} from "three";

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