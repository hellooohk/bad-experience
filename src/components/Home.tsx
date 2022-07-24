import './Home.scss';
import Experience from "../data/dummyData.json";
import { ExperienceCard } from './Card/ExperienceCard';
import { useState } from 'react';
export const Home = () => {
    const [data,setData] = useState(Experience);
    return(
        <div className="Home y center">
            {data.map((item)=> <ExperienceCard key={item.id} title={item.title} description={item.description} categories={item.categories}/>)}
        </div>
    )
}
