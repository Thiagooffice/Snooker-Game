import { ContainerLogo, ImageLogo } from './style'
 import LogoImg from '../../../public/images/logo.png'
 import Image from 'next/image'

export default function Logo(){
    return(
        <ContainerLogo>
            <ImageLogo>
             <Image  
             width={220}
             height={80}
             src={LogoImg}
             quality={100}
             />
            </ImageLogo>
            
        </ContainerLogo>
    )
}