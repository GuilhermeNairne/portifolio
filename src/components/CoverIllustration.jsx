import profilePhoto from '../assets/imagem_capa.png'


export default function CoverIllustration() {
  return (
    <div className="relative mx-auto aspect-[11/10] w-full max-w-md select-none">
      <img
        src={profilePhoto}
        alt="Guilherme Men Linhares Nairne"
        style={{ left: '50%', top: '50%' }}
      />

    </div>
  )
}
