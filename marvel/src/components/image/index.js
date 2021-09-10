



export default function Image(props){
    console.log(props.image)
    let path = props.image+'/portrait_xlarge.jpg'
    return(
        <div>
            <img src={path} alt='hero thumbnail'/>
        </div>
    )



}