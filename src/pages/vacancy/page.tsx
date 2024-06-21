import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Calendar, Heart, MapPin } from "lucide-react"

export default function Vacancy() {
  const vacancyData = [
    {
      location: 'Toshkent axborot texnologiyalari universiteti',
      date: '16 iyun 2024',
      imageUrl: 'https://416homebuyer.ca/wp-content/uploads/2018/06/Vacant-Property-Photo-1080x675.png',
      vacanceType: 'UX/UI Designer',
      requirements: [
        'Figma',
        'Adobe Illustrator',
        'WordPress',
        'Tilda'
      ],
      description: 'Bizga eng yaxshi UX dizayner kerak va u Figma hamda Adobe Illustratorda ishlashni yaxshi bilishi kerak. Problem solving soft skilli mustahkam bo\'lishi kerak. Boshqa qo\'shimcha malakalar ham qadrli.'
    },
    {
      location: 'O\'zbekiston Milliy universiteti',
      date: '17 iyun 2024',
      imageUrl: 'https://alutex.uz/public-assets/project-images/[project-image]-[0]-1668148967042129ef07afeae798d868f645bdad1fc8ca221b54b286488db.jpeg',
      vacanceType: 'Backend Developer',
      requirements: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'Docker'
      ],
      description: 'Backend dasturchi kerak. Node.js va Express.js da tajriba bo\'lishi kerak. MongoDB va Docker bilan ishlashni bilishi kerak.'
    },
    {
      location: 'Toshkent Davlat Iqtisodiyot universiteti',
      date: '18 iyun 2024',
      imageUrl: 'https://eng.mephi.ru/content/public/images/news/081019/4.jpg',
      vacanceType: 'Frontend Developer',
      requirements: [
        'React.js',
        'CSS',
        'HTML',
        'Redux'
      ],
      description: 'Frontend dasturchi kerak. React.js va Redux da tajriba bo\'lishi kerak. CSS va HTML ni yaxshi bilishi kerak.'
    },
    {
      location: 'Toshkent Arxitektura va Qurilish Instituti',
      date: '19 iyun 2024',
      imageUrl: 'https://cdn1.img.sputniknews.uz/img/1234/93/12349318_0:0:1280:960_1920x0_80_0_0_9a15d62fa958e373d7f6c230cca7dccb.jpg',
      vacanceType: 'Project Manager',
      requirements: [
        'Agile',
        'Scrum',
        'JIRA',
        'Communication Skills'
      ],
      description: 'Loyihalarni boshqarish uchun Project Manager kerak. Agile va Scrum metodologiyalarini yaxshi bilishi kerak. JIRA bilan ishlashni bilishi kerak.'
    },
    {
      location: 'Toshkent Tibbiyot Akademiyasi',
      date: '20 iyun 2024',
      imageUrl: 'https://president.uz/uploads/1dfbf97b-d5be-fa02-adfb-46b0980dbe77.jpg',
      vacanceType: 'Data Scientist',
      requirements: [
        'Python',
        'Machine Learning',
        'Data Analysis',
        'TensorFlow'
      ],
      description: 'Data Scientist kerak. Python va Machine Learning bo\'yicha tajriba bo\'lishi kerak. TensorFlow bilan ishlashni bilishi kerak.'
    },
    {
      location: 'O\'zbekiston Davlat Jahon Tillari Universiteti',
      date: '21 iyun 2024',
      imageUrl: 'https://416homebuyer.ca/wp-content/uploads/2018/06/Vacant-Property-Photo-1080x675.png',
      vacanceType: 'Mobile Developer',
      requirements: [
        'Flutter',
        'Dart',
        'iOS Development',
        'Android Development'
      ],
      description: 'Mobil dasturchi kerak. Flutter va Dart bo\'yicha tajriba bo\'lishi kerak. iOS va Android dasturlashni bilishi kerak.'
    },
    {
      location: 'Toshkent Kimyo-Texnologiya Instituti',
      date: '22 iyun 2024',
      imageUrl: 'https://416homebuyer.ca/wp-content/uploads/2018/06/Vacant-Property-Photo-1080x675.png',
      vacanceType: 'DevOps Engineer',
      requirements: [
        'AWS',
        'Kubernetes',
        'CI/CD',
        'Linux'
      ],
      description: 'DevOps injeneri kerak. AWS va Kubernetes bo\'yicha tajriba bo\'lishi kerak. CI/CD jarayonlarini bilishi kerak.'
    },
    {
      location: 'Toshkent To\'qimachilik va Engil Sanoat Instituti',
      date: '23 iyun 2024',
      imageUrl: 'https://416homebuyer.ca/wp-content/uploads/2018/06/Vacant-Property-Photo-1080x675.png',
      vacanceType: 'QA Engineer',
      requirements: [
        'Selenium',
        'JMeter',
        'Test Automation',
        'Bug Tracking'
      ],
      description: 'QA injeneri kerak. Selenium va JMeter bilan ishlash tajribasi bo\'lishi kerak. Test avtomatlashtirishni bilishi kerak.'
    },
    {
      location: 'Toshkent Davlat Texnika Universiteti',
      date: '24 iyun 2024',
      imageUrl: 'https://416homebuyer.ca/wp-content/uploads/2018/06/Vacant-Property-Photo-1080x675.png',
      vacanceType: 'System Administrator',
      requirements: [
        'Linux',
        'Windows Server',
        'Networking',
        'Security'
      ],
      description: 'System Administrator kerak. Linux va Windows Server bo\'yicha tajriba bo\'lishi kerak. Tarmoqlar va xavfsizlikni bilishi kerak.'
    },
    {
      location: 'Toshkent Davlat Pedagogika Universiteti',
      date: '25 iyun 2024',
      imageUrl: 'https://416homebuyer.ca/wp-content/uploads/2018/06/Vacant-Property-Photo-1080x675.png',
      vacanceType: 'Content Writer',
      requirements: [
        'SEO',
        'Content Marketing',
        'Copywriting',
        'Editing'
      ],
      description: 'Content Writer kerak. SEO va Content Marketing bo\'yicha tajriba bo\'lishi kerak. Copywriting va editingni bilishi kerak.'
    }
  ];
  
  return (
    <div className="container mx-auto p-4">
      {vacancyData.map(vacance =>{
        return (
          <Card className="rounded-md overflow-hidden flex flex-col md:flex-row mt-2">
        <CardHeader className="p-0 w-full md:w-56">
          <img src={vacance.imageUrl} alt="" className="w-full md:w-56 h-full object-cover"/>
        </CardHeader>
        <CardContent className="p-3 grow">
          <CardTitle className="py-2 font-bold text-green-500 text-2xl md:text-3xl flex items-center gap-4 ">{vacance.vacanceType} <p className="text-sm flex items-center gap-1 text-gray-300"> <Calendar className="w-4 h-4 inline-block"/>{vacance.date}</p></CardTitle>
          <div className="flex items-center cursor-pointer mb-2 hover:text-green-500">
            <MapPin className="w-5 h-5 md:w-6 md:h-6"/>
            <p className="text-xs ml-1">{vacance.location}</p>
          </div>
          <div className="my-2">
            {vacance.requirements.map(require=>{
              return(
                <Button type="button" size="sm" variant="outline" className="ms-1">{require}</Button>
              )
            })}
          </div>
          <CardDescription className="max-w-full md:max-w-[800px] overflow-hidden text-ellipsis whitespace-nowrap">
            {vacance.description}
          </CardDescription>
        </CardContent>
        <hr className="block md:hidden" />
        <CardFooter className="p-2 px-4 flex md:flex-col justify-center gap-3 items-stretch">
            <Button>Topshirish</Button>
            <Button variant='outline' className=" text-green-500"> <Heart className="w-4 h-4 mx-1"/>Saqlash</Button>
        </CardFooter>
      </Card>
        )
      })}
    </div>
  )
}
