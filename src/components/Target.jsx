// to be modified / set to original

import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Target = () => {
    const targetRef = useRef();
    const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf');

    useGSAP(() => {
        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
        });
    }, []);

    return (
        <mesh ref={targetRef} position={[-8, -8, 0]} rotation={[0, Math.PI / 5, 0]}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Target;
