import { Card, CardHeader, } from '@/components/ui/card'
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function CompareOTM() {
  const university1 = {
    name: 'Toshkent axborot texnologiyalari universiteti',
    location: 'Toshkent, Yunusobod',
    ranking: 1,
    description: 'This is University A description.',
  };
  
  const university2 = {
    name: 'Toshkent Moliya Universiteti',
    location: 'Toshkent, Yunusobod',
    ranking: 2,
    description: 'This is University B description.',
  };
  const [university, setUniversity]= useState()
  
  return (
   university ?  <div className="container mx-auto p-4">
   <div className="flex flex-col md:flex-row gap-4">
     <Card className="w-full md:w-1/2 shadow-lg">
       <CardHeader className="bg-blue-500 text-white p-4">
         <h2 className="text-2xl font-bold">{university1.name}</h2>
         <p className="text-sm">{university1.location}</p>
       </CardHeader>
       <div className="p-4">
         <p className="text-lg font-semibold">Ranking: {university1.ranking}</p>
         <p>{university1.description}</p>
       </div>
     </Card>

     <Card className="w-full md:w-1/2 shadow-lg">
       <CardHeader className="bg-green-500 text-white p-4">
         <h2 className="text-2xl font-bold">{university2.name}</h2>
         <p className="text-sm">{university2.location}</p>
       </CardHeader>
       <div className="p-4">
         <p className="text-lg font-semibold">Ranking: {university2.ranking}</p>
         <p>{university2.description}</p>
       </div>
     </Card>
   </div>
 </div>:(
          <div className="flex flex-col gap-4 container mt-3">
          <Input
            name="university1"
            placeholder="Enter University 1"
          />
          <Input
            name="university2"
            placeholder="Enter University 2"
          />
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={()=>setUniversity(true)}
          >
            Compare
          </button>
        </div>

 )
  );
}
