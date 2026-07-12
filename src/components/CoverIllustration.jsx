import profilePhoto from '../assets/imagem_capa.png'


export default function CoverIllustration() {
  return (
    <div className="relative mx-auto aspect-[11/10] w-full max-w-md select-none bottom: '50px'">
      <img
        src={profilePhoto}
        alt="Guilherme Men Linhares Nairne"
      />

    </div>
  )
}
