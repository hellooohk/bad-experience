import './Card.scss';
interface ExperienceDetail {
  title: String;
  description: String;
  categories: String[];
}
export const ExperienceCard = (props: ExperienceDetail) => {
  return (
    <div className="ExperienceCard">
      <h3>{props.title}</h3>
      <div className="Tags">
        {props.categories.map((category: String) => (
          <span className='Tags__tag'>{category}</span>
        ))}
      </div>
      <p>{props.description.substring(0,512)} <span className='ExperienceCard__read'>Read more...</span></p>
    </div>
  );
};
