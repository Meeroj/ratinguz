import {
  Card,
} from "@/components/ui/card";
import Compare from '@/assets/compare.png'
import chartCity from '@/assets/chartcity.png'
import rating from '@/assets/rating.png'

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center shadow-black/10 dark:shadow-white/10  drop-shadow-xl  animate-slow-x">
      <img src={Compare} alt="" className=" backdrop-blur-md rounded-md"/>

        
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10 animate-slow-x">
        <img src={chartCity} alt="" className=" rounded-md"/>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10 animate-slow-x">
       <img src={rating} alt="" className=" rounded-md"/>
      </Card>
    </div>
  );
};
