import React, {useState, useEffect} from 'react';
import { CategoryStyle } from './Categorys.styled'
import { createCategory} from '../../graphql/mutations'
import { listCategorys } from '../../graphql/queries'
import { API, graphqlOperation } from "aws-amplify"

// list all categorys instead of creating categorys
// so this component should export a specific id of category to pass to the post

function CategorysForm(props){
    const [category,setCategory] = useState('')
    const [categoryID, setCategoryID] = useState('')


    // handling change to change the form
    const handleCategory = (e)=> {
        setCategory(e.target.value)
    }

    // handling submit category
    async function handleSubmit(e) {
        setCategory(e.target.value)
        props.addCategory(category)
    }

    return(
        <div>
        <h1>Create a category</h1>
        <CategoryStyle onSubmit={handleSubmit}>
        <label>Create a category </label>
        <input type="text" value={category} placeholder='Food' onChange={handleCategory}/>
        <br />
        <input type="submit" value="Add a category"/>
        </CategoryStyle>
        </div>
    )
}

function Categorys(props){
    const addCategory = async(category)=>{
        try{
        await API.graphql(
            graphqlOperation(createCategory, { input: { name: category } })
          )
        }
        catch (err){
            console.log(err)
        }

    }

    return(
        <>
        <CategorysForm addCategory={addCategory}/>

        </>
    )
}
export default Categorys