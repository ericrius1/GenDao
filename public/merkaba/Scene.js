/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: tomciomalina (https://sketchfab.com/tomciomalina)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/models/8c85b155d71649c9b4561cbadbfce51c
title: Merkaba
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-31.24, 0, -230.31]}>
            <group rotation={[Math.PI / 2, 0, 0]} />
          </group>
          <group position={[205.66, 92.27, -20.91]}>
            <group rotation={[Math.PI / 2, 0, 0]} />
          </group>
          <group position={[-0.16, 42.45, 1.28]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes['Hedra002_01_-_Default_0'].geometry} material={materials['01_-_Default']} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')