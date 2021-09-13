import '../../components/image/styles.css'

export default function Image(props){
    let path = props.image.path+'/portrait_fantastic.'+props.image.extension
    return(
        <div className='thumbnails'>
            <img src={path} alt='hero thumbnail'/>
        </div>
    )

}