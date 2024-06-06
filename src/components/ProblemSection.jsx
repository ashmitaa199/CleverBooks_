import * as React from "react"
import { ProblemData } from "@/constant/ProblemData"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
export function ProblemSection() {
  return (
    
    <Carousel className="w-full max-w-[75%] min-h-full">
      <CarouselContent>
        {ProblemData.map(({mainImg,mainHead,content,index}) => (
          <CarouselItem key={index}>
            <div className="p-7 min-h-[90%]">
              <Card className="min-h-full">
                <CardContent className="flex justify-center items-center min-h-full">
                 <div className="flex-col flex lg:flex-row px-5 py-5 gap-6 min-h-full">
                    <div>
                        <img src={mainImg} alt="" className="min-h-[350px] h-full"/>
                    </div>
                    <div className="flex flex-col max-w-[345px] justify-center items-center gap-3">
                        <h1 className="text-3xl font-semibold">{mainHead}</h1>
                        <p className="text-base">{content}</p>
                    </div>
                 </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
