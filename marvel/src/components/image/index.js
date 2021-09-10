



export default function Image(props){
    let path = props.image.path+'/portrait_fantastic.'+props.image.extension
    return(
        <div>
            <img src={path} alt='hero thumbnail'/>
        </div>
    )



}