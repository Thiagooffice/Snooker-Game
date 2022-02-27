import { BackgroundImage, BlackTable, WhiteLine, WhiteLineInside, ContainerCards, GreenTable } from "./style"
import cardA from '../../../public/images/cardA.png'
import Image from 'next/image'

export default function ImageBackground() {
    return (
        <BackgroundImage>
            <BlackTable>
                <div>
                    
                </div>
                <GreenTable>
                <WhiteLine>
                    <WhiteLineInside>
                        <ContainerCards>
                            <Image
                                src="/images/cardA.png"
                                alt="cardA"
                                width={45}
                                height={63}
                                quality={100}
                            />
                            <Image
                                src="/images/cardA.png"
                                alt="cardA"
                                width={45}
                                height={63}
                                quality={100}
                            />
                            <Image
                                src="/images/cardA.png"
                                alt="cardA"
                                width={45}
                                height={63}
                                quality={100}
                            />
                            <Image
                                src="/images/cardA.png"
                                alt="cardA"
                                width={45}
                                height={63}
                                quality={100}
                            />
                        </ContainerCards>
                    </WhiteLineInside>
                </WhiteLine>
                </GreenTable>
            </BlackTable>
        </BackgroundImage>
    )
}