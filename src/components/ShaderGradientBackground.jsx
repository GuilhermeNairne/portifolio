import { ShaderGradient, ShaderGradientCanvas } from 'shadergradient'

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function ShaderGradientBackground() {
  return (
    <ShaderGradientCanvas
      style={{ width: '100%', height: '100%' }}
      pixelDensity={0.9}
      fov={45}
    >
      <ShaderGradient
        animate={prefersReducedMotion ? 'off' : 'on'}
        type="sphere"
        shader="defaults"
        bgColor1="#000000"
        bgColor2="#000000"
        color1="#1957ff"
        color2="#0fefff"
        color3="#0debff"
        brightness={1.5}
        lightType="3d"
        envPreset="dawn"
        grain="off"
        wireframe={false}
        cAzimuthAngle={60}
        cPolarAngle={90}
        cDistance={7.1}
        cameraZoom={14.73}
        positionX={0}
        positionY={-0.15}
        positionZ={0}
        rotationX={0}
        rotationY={0}
        rotationZ={0}
        reflection={0.1}
        uTime={0}
        uSpeed={0.1}
        uStrength={0.6}
        uDensity={0.6}
        uFrequency={5.5}
        uAmplitude={0.1}
      />
    </ShaderGradientCanvas>
  )
}
