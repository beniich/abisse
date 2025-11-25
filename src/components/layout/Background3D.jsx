import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Particles = () => {
    const ref = useRef();

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group ref={ref}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        </group>
    );
};

const Background3D = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none bg-[var(--color-bg-void)]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Particles />
                <ambientLight intensity={0.5} />
            </Canvas>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(5,5,16,0.5)] to-[var(--color-bg-void)]" />
        </div>
    );
};

export default Background3D;
