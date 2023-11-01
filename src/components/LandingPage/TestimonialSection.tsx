import { TestimonialCardProp } from "../../types/components/testimonialCard";
import avatar from "../../assets/images/dummy-avatar.png"
import TestimonialCard from "./TestimonialCard";


const dummyTestimonial: TestimonialCardProp[] =[
  {
    testimony:"This platform was a game-changer for me. It saved me a lot of stress. I was able to concentrate on other important things.",
    testifierImage: avatar ,
    testifierName: "Salami Adebayo",
  },
  {
    testimony:"This platform was a game-changer for me. It saved me a lot of stress. I was able to concentrate on other important things",
    testifierImage: avatar ,
    testifierName: "Salami Adebayo",
  },
  {
    testimony:"This platform was a game-changer for me. It saved me a lot of stress. I was able to concentrate on other important things",
    testifierImage: avatar ,
    testifierName: "Salami Adebayo",
  },
]

const TestimonialSection = ()=>{
  return(
  <section className="bg-accentBlue flex flex-col items-center py-20 px-10 md:px-36">
      <h1 className="text-3xl text-primaryBlue font-medium">Testimonials</h1>

      <div className="mt-16 w-full flex flex-col justify-between  md:flex-row flex-wrap items-center md:justify-center lg:justify-between">
        { 
        dummyTestimonial.map((testimonyItem)=>{
          return(
            <TestimonialCard
              {...testimonyItem}
            />
          )
        })
          }
      </div>
  </section> 
  )
}

export default TestimonialSection