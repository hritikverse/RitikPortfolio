import { useState, Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Island from '../models/Island';
import { EffectComposer, HueSaturation } from '@react-three/postprocessing';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import Homeinfo from '../components/Homeinfo';
import soundon from '../assets/icons/soundon.png';
import soundoff from '../assets/icons/soundoff.png';
import sakura from '../assets/sakura.mp3';


const Home = () => {
  const audioRef = useRef(null);
  useEffect(() => {
    audioRef.current = new Audio(sakura);
    audioRef.current.volume = 0.4;
    audioRef.current.loop = true;
  }, []);
  const [isRotating, setIsRotating] = useState(false);

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlayingMusic) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlayingMusic]);
  

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7,0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else{
      screenScale= [1,1,1];
    }

    return [screenScale, screenPosition, rotation]
  }

const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

const adjustPlaneForScreenSize = () => {
  let screenScale, screenPosition 

  if (window.innerWidth < 768) {
    screenScale = [1.5, 1.5, 1.5];
    screenPosition = [0, -1.5, 0];
  } else{
    screenScale= [3,3,3];
    screenPosition = [0, -4, -4];
  }

  return [screenScale, screenPosition]
}

const [planeScale, planePosition] = adjustPlaneForScreenSize();

const [currentStage, setCurrentStage] = useState(1);


  return (
    <section className='w-full h-screen relative'>
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        {currentStage && <Homeinfo currentStage={currentStage} />}
      </div>
      <Canvas className=
      {`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing': 'cursor-grab'} `}
      camera={{near: 0.1, far:1000}}
      >
        <Suspense fallback={<Loader/>}>
          <directionalLight
          position= {[1,1,1]}
          intensity = {1}
          />
          <ambientLight 
          intensity={0.3}
          />
          <hemisphereLight 
          skyColor= "#87CEEB"
          groundColor = "#000000"
          intensity = {0.5}
          />
          
          <Bird />
          <Sky isRotating={isRotating}/>
          <Island 
          position = {islandPosition}
          scale = {islandScale}
          rotation = {islandRotation}
          isRotating = {isRotating}
          setIsRotating = {setIsRotating}
          setCurrentStage={setCurrentStage}
          />
          <Plane 
          isRotating = {isRotating}
          scale = {planeScale} 
          position = {planePosition}
          rotation = {[0, 20, 0]}
          />
          <EffectComposer>
            <HueSaturation saturation={0.4} /> {/* increase value for more saturation */}
          </EffectComposer>
        </Suspense>

      </Canvas>
      <div className='absolute bottom-2 left-2'>
        <img src={isPlayingMusic ? soundoff : soundon}
          className='w-10 h-10 cursor-pointer object-contain' 
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  )
}

export default Home
