import { Box, OrbitControls, Sphere} from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";


import CANNON from "cannon";

export const Objects = () => {

    return (
        <>
            {/* properties */}
            <OrbitControls />
            <ambientLight intensity={.5} />
            <spotLight
                castShadow
                position={[10, 10, 40]}
                intensity={5}
                angle={.8}
                decay={0}
            />
            {/* objects */}
            <RigidBody position={[0, 0, 0]} type="fixed" >
                <Box receiveShadow  args={[50, 1 , 50]}>
                    <meshStandardMaterial color={'darkred'} />
                </Box>
            </RigidBody>

            <RigidBody position={[0, 10, 0]} colliders={'ball'} restitution={1}>
                <Sphere castShadow receiveShadow args={[2, 360, 360]} rotation={[0,0,0]}>
                    <meshStandardMaterial color={'blue'} />
                </Sphere>
            </RigidBody>
            <RigidBody position={[10, 20, 1.5]} colliders={'cuboid'} restitution={.7}>
            <Box castShadow receiveShadow  args={[3, 3, 3]}>
                <meshStandardMaterial color={'darkGreen'} />
            </Box>
            </RigidBody>
        </>
    )
};