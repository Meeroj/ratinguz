import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  export default function DavlatSection() {
    const data = [
      "1,Андижон давлат тиббиёт институти,11.55,11.38,34.70,9.82,67.45,35.50",
      "2,Андижон давлат университети,11.80,10.67,34.67,11.22,68.35,35.98",
      "3,Андижон машинасозлик институти,12.18,11.80,31.64,8.59,64.21,33.79",
      "4,Бухоро давлат тиббиёт институти,9.87,14.40,33.67,8.89,66.83,35.17",
      "5,Бухоро давлат университети,17.14,14.38,42.45,9.38,83.35,43.87",
      "6,Бухоро мухандислик технология институти,12.59,11.00,37.50,7.65,68.74,36.18",
      "7,Гулистон давлат университети,11.74,10.83,40.28,10.16,73.01,38.43",
      "8,Жаҳон иқтисодиёти ва дипломатия университети,16.18,19.22,30.60,6.86,72.86,39.38",
      "9,Жиззах давлат педагогика институти,7.65,5.89,31.64,9.82,55.00,28.95",
      "10,Жиззах политехника институти,11.11,9.18,30.86,9.87,61.01,32.11",
      "11,Қарши давлат университети,9.17,10.12,38.58,4.20,62.08,32.67",
      "12,Қарши муҳандислик - иқтисодиёт институти,9.76,10.25,35.23,8.06,63.30,33.32",
      "13,Қорақалпоқ давлат университети,11.67,14.45,39.18,11.51,76.80,40.42",
      "14,Қўқон давлат педагогика институти,6.85,7.30,31.96,8.19,54.31,28.58",
      "15,Миллий рақс ва хореография олий мактаби,5.65,17.40,38.59,2.58,64.22,35.68",
      "16,Миллий рассомлик ва дизайн институти,6.49,17.38,25.55,2.71,52.13,28.96",
      "17,Навоий давлат кончилик институти,14.05,11.09,34.90,7.05,67.10,35.31",
      "18,Навоий давлат педагогика институти,7.59,8.87,38.64,8.38,63.49,33.41",
      "19,Наманган давлат университети,13.50,10.80,39.26,10.33,73.90,38.89",
      "20,Наманган муҳандислик-қурилиш институти,17.41,11.12,36.14,9.11,73.78,38.83",
      "21,Наманган муҳандислик-технология институти,14.29,7.71,33.01,9.00,64.02,33.69",
      "22,Нукус давлат педагогика институти,8.27,15.30,35.20,9.19,67.96,35.77",
      "23,Самарқанд ветеринария медицинаси институти,18.32,11.05,32.49,12.17,74.03,38.96",
      "24,Самарқанд давлат архитектура-қурилиш институти,9.86,8.42,30.18,9.40,57.85,30.45",
      "25,Самарқанд давлат тиббиёт институти,12.67,14.72,31.53,10.17,69.09,36.36",
      "26,Самарқанд давлат университети,28.65,15.21,33.14,12.88,89.88,47.31",
      "27,Самарқанд давлат чет тиллар институти,19.29,14.85,36.40,3.68,74.22,40.12",
      "28,Самарқанд иқтисодиёт ва сервис институти,14.14,16.77,31.42,11.60,73.94,38.91",
      "29,Термиз давлат университети,12.62,10.48,37.54,8.35,69.00,36.31",
      "30,Тошкент автомобиль йўлларини лойиҳалаш қуриш ва эксплуатацияси институти,15.50,18.30,25.33,9.41,68.54,36.07",
      "31,Тошкент архитектура-қурилиш институти,11.24,16.95,28.55,9.69,66.43,34.96",
    ];
  
    const renderTableRows = () => {
      return data.map((item, index) => {
        const row = item.split(',');
        const object = {
          rank: row[0],
          name: row[1],
          scientificActivity: row[2],
          teachingQuality: row[3],
          studentKnowledge: row[4],
          materialTechnical: row[5],
          totalScore: row[6],
          percentage: row[7],
        };
  
        return (
          <TableRow key={index}>
            <TableCell>{object.rank}</TableCell>
            <TableCell>{object.name}</TableCell>
            <TableCell className="text-center">{object.scientificActivity}</TableCell>
            <TableCell className="text-center">{object.teachingQuality}</TableCell>
            <TableCell className="text-center">{object.studentKnowledge}</TableCell>
            <TableCell className="text-center">{object.materialTechnical}</TableCell>
            <TableCell className="text-center">{object.totalScore}</TableCell>
            <TableCell className="text-center">{object.percentage}</TableCell>
          </TableRow>
        );
      });
    };
  
    return (
      <div className="container">
        <Table>
          <TableCaption>Universitetlar ro'yxati</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Rank</TableHead>
              <TableHead>Name</TableHead>
              <TableHead className="text-center">Scientific Activity</TableHead>
              <TableHead className="text-center">Teaching Quality</TableHead>
              <TableHead className="text-center">Student Knowledge</TableHead>
              <TableHead className="text-center">Material Technical</TableHead>
              <TableHead className="text-center">Total Score</TableHead>
              <TableHead className="text-center">Percentage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {renderTableRows()}
          </TableBody>
        </Table>
      </div>
    );
  }
  