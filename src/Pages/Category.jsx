

const Category = ({i}) => {
    const {type} =i;
    return (
        <div>
            <button>{type}</button>
        </div>
    );
};

export default Category;