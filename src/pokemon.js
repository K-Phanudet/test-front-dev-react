import React, {  useState ,useEffect} from 'react'
import Cardlists from './Cardlists'
import axios from 'axios'
import Skeletoncard from './SkeletonCard'
import './pokemon.css'
const Pokemon= () =>{
    const dataAPI = []
    const [isLoading,setisLoading] = useState(false);
    const [pokemonsJSON,setpokemonsJSON] = useState(dataAPI);
    
    useEffect(()=>{
        setisLoading(true)
        const fetchData = async (numId) =>{
            try{
                
               const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${numId}`)
               const respone = JSON.parse(JSON.stringify(data))
               return {id:numId,name:respone.data.name,picture:respone.data.sprites.front_default}
           
            }catch(error){
                console.error(error)
            }
        }
        
        const forloop = async ()=>{
            
            for(let i = 1;i<=104;i++){
                const result = await fetchData(i)
                dataAPI.push(result)
                //console.log(dataAPI)
                
            }
            setpokemonsJSON(dataAPI)
            //console.log(pokemonsJSON)
            setisLoading(false)
        }


        forloop()
        
        
    },[])
    return (
        <div className="wrap-pokemon">
            {!isLoading && <Cardlists list={pokemonsJSON}/>}
            {isLoading && <Skeletoncard/>}
        </div>
    )

}
export default Pokemon;