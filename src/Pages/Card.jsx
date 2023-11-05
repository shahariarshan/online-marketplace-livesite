import { useParams } from "react-router-dom";


const Card = () => {
    const {type,jobTitle,deadline,priceRange,shortDescription } = useParams()
    return (
        <div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">{jobTitle}</h2>
    <p>{shortDescription}</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Card;