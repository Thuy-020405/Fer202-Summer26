function Title({text}){
    return <h2>{text}</h2>
}

function Description({title, content}){
    return 
            <Title text={title}/>
    }

function Image({url}){
    return <img src={url} alt="Image" style={{width: '100%'}}/>;
}

function SimpleCard({item}){
    return (
        <div style={{border: '1px solid #ccc', borderRadius: '8px', padding: '16px', maxWidth: '300px'}}>
            <Image url={item.image}/>
            <Title text={item.title}/>
            <Description title={item.title} content={item.description}/>
        </div>
    );
}
export default SimpleCard;