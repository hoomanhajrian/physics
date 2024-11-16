import { Box, OrbitControls, Sphere} from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";


import CANNON from "cannon";

export const Objects = () => {
    return (
        <>
            {/* properties */}
            <OrbitControls />
            <ambientLight intensity={.5} />
            <directionalLight
                castShadow
                position={[10, 10, 20]}
                intensity={5}
            />
            {/* objects */}
            <RigidBody type="fixed">
                <Box receiveShadow position={[0, 0, 0]} args={[30, 1 , 30]}>
                    <meshStandardMaterial color={'darkred'} />
                </Box>
            </RigidBody>

            <RigidBody position={[0, 10, 0]} colliders={'ball'}>
                <Sphere castShadow receiveShadow args={[2, 360, 360]} rotation={[0,0,0]}>
                    <meshStandardMaterial color={'blue'} />
                </Sphere>
            </RigidBody>
            <RigidBody position={[0, 20, 1.5]} colliders={'cuboid'}>
            <Box castShadow receiveShadow  args={[3, 3, 3]}>
                <meshStandardMaterial color={'darkGreen'} />
            </Box>
            </RigidBody>
        </>
    )
};