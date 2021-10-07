import { Header } from "../../components/Header";
import Hulk from './assets/Hulk.jpg'
import './styles.css'

export function LandingPage(){
    return(
        <>
            <Header />
            
            <div className="landing">
                <img src={Hulk} alt="Hulk" />
            </div>
            <h1>Find Your Hero!</h1>
            <input type="text" placeholder="Search your favorite character!" />
        </>
    )
    
    


}