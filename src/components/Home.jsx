import "./Home.scss";
import { ExperienceCard } from "./Card/ExperienceCard";
import { useSelector } from "react-redux";
export const Home = () => {
  const data = useSelector((state) => state.counter.experienceData);
  return (
    <div className="Home y center">
      {data.map((item) => (
        <ExperienceCard
          key={item.id + Math.random()}
          title={item.title}
          description={item.description}
          categories={item.categories}
        />
      ))}
    </div>
  );
};
