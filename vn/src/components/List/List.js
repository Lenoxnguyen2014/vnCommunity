import React, {useState, useEffect} from 'react'
import { API, graphqlOperation } from 'aws-amplify';
import { listCategorys } from '../../graphql/queries'


function List(props){
    const [list, setList ] = useState([])


      const updateCategorys = async () => {
        const allCategorys = await API.graphql(graphqlOperation(listCategorys))
        setList(allCategorys.data.listCategorys.items)
      }


    useEffect(()=>{
        updateCategorys()
        })
    
    return(
        <>
        <Search />
        <h1>The List</h1>
        <br/>
        <ul>
        {list.map((item) => {
        return <li key={item.id}>{ item.name }</li>
        })}
        </ul>
        
        </>
    )
}

function Search(props){
    return(
        <>
         <input type="text" placeholder="Search.."/>
        </>
    )
}

export default List