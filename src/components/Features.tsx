import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Xizmatlarni taqqoslash",
    description:
      "Siz istalgan xizmat yoki mahsulotlarni taqqoslab ko'rishingiz mumkin hamda bu sizga qulaylik beradi.",
    image: image4,
  },
  {
    title: "Bo'sh ishlar",
    description:
      "Siz uydan chiqmagan holda ish qidirishingiz mumkin hamda birinchi ishingizni topishingiz mumkin.",
    image: image3,
  },
  {
    title: "Xizmatlarni bilish",
    description:
      "Siz istalgan xizmat haqida ma'lumot olishingiz mumkin.",
    image: image,
  },
];

const featureList: string[] = [
  "Taqqoslash",
  "Tanlash",
  "Baholash",
  "Bo'sh o'rinlar",
  "Contact form",
  "Moslashuvchan",
  "Masofaviy",
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Foydali{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Xususiyatlar
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
