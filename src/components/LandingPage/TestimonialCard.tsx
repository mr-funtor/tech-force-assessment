import { TestimonialCardProp } from "../../types/components/testimonialCard";

const TestimonialCard = ({testimony, testifierImage, testifierName}: TestimonialCardProp)=>{
  return(
    <article className="bg-white w-80 h-56 py-6 px-7 flex flex-col justify-between mb-10 md:mb-0">
      <p className="text-sm text-accentGray leading-7">{testimony}</p>

        <div className="flex justify-between items-center">
          <div className={`bg-gray-300 h-12 w-12 rounded-full mb-2 overflow-hidden`}>
            <img
              src={testifierImage}
              alt="the testifier's picture"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="text-sm text-primaryBlue">{testifierName}</p>
        </div>
    </article>
  )
}

export default TestimonialCard;