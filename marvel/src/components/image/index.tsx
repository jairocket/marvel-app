import '../../components/image/styles.css';

interface ImageProps {
    image: {
        path: string;
        extension: string;
    }
}

export default function Image(props: ImageProps){
    let path = props.image.path + '/portrait_fantastic.' + props.image.extension
    return(
        <div className='thumbnails'>
            <img src={path} alt='hero thumbnail'/>
        </div>
    )

}