

const Slug = ({params}) => {
    return (
        <div>
          <h2>I am a DINAMIC ROUTING SLUG slug!</h2>
          <h3>{params.slug}</h3>
        </div>
    )
};

export default Slug
