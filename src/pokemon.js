import React, {  useState ,useEffect} from 'react'
import Cardlists from './Cardlists'
import axios from 'axios'
import Skeletoncard from './SkeletonCard'
import './pokemon.css'
const Pokemon= () =>{
    const [isLoading,setIsLoading] = useState(false);
    const [pokemonJSON,setPokemonJSON] = useState([]);
    useEffect(()=>{
        setIsLoading(true)
        const fetchData = async (numId) =>{
            try{
               const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${numId}`)
               const response = JSON.parse(JSON.stringify(data))
               return {id:numId,name:response.data.name,picture:response.data.sprites.front_default}
            }catch(error){
                console.error(error)
            }
        }
        const setData = async ()=>{
            const fetchAPIs = []
            for(let i = 1;i<=104;i++){
                fetchAPIs.push(fetchData(i))
            }
            await Promise.all(fetchAPIs).then(val=>setPokemonJSON(val))
            setIsLoading(false)
        }
        setData()
        return (setPokemonJSON([]))
    },[])
    return (
        <div className="wrap-pokemon">
            {!isLoading && <Cardlists list={pokemonJSON}/>}
            {isLoading && <Skeletoncard/>}
        </div>
    )
}
export default Pokemon;