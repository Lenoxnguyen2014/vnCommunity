import React, {useState, useEffect} from 'react';
import { PostStyle } from './Posts.styled';
import {createPost} from '../../graphql/mutations'
import { listPosts } from '../../graphql/queries'
import { API, graphqlOperation } from "aws-amplify"
// should 
// steps:
// update backend console: using filter and call it out here to run any front end we need
// take out the updatePost because it is so annoying

// create a category(return id)
// create a addPost: (title, fname, lname, email, categoryid)
// call graphQL function to work on create
// console.log list categorys 
// console.log list posts

// function createCategory(props){
//   const [category, setCategory] = useState('')

//   const handleCategory = (e) => {
//     setCategory(e.target.value)
//   }
//   return(
//     <>
//     <label>
//     Category
//     </label>
//     <input type="text" value={category} placeholder='Food' onChange={handleCategory}/>
//     </>
//   )

// }

function PostForm(props){
  const [title, setTitle] = useState('')
  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  //study abroad id
  // import category id pass here to add stuff
  const [categoryid, setCategoryid] = useState("7f2e6ab6-b7db-4ed9-8013-1229a51260da")
  // handling change to submit the form
  const handleTitle = (e)=> {
    setTitle(e.target.value)
    console.log(title)
  }

  const handleFname = (e)=>{
    setFname(e.target.value)
  }

  const handleLname = (e) => {
    setLname(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    props.addPost(title,fname,lname,email,categoryid)
  }

  return (
    <div>
    <h1>Create a post</h1>
    <PostStyle onSubmit={handleSubmit}>
        <label>Title </label>
        <input type="text" value={title} placeholder='Look for Food' onChange={handleTitle}/>

        <label>
        First name
        </label>
        <input type="text" value={fname} placeholder='First name' onChange={handleFname} />

        <label>
        Last name
        </label>
        <input type="text" value={lname} placeholder='Last name' onChange={handleLname} />

        <label>
        Email
        </label>
        <input type="text" value={email} placeholder='le@hotmail.com' onChange={handleEmail}/>

        <br />
        <input type="submit" value="Add a post"/>

    </PostStyle>
    </div>
  )
}


//console.log(posts), need to map those post later to see result
// still cannot pass id of category to here!!!
function Posts(props){
  const [PostItems, setPostItems] = useState([])

  const addPost = async(title,fname,lname,email,categoryid) => {
    try {
      await API.graphql(
        graphqlOperation(createPost, { input:  
        {
          title:title,
          f_name: fname,
          l_name: lname,
          email: email,
          postCategoryId: categoryid
        }
        })
      )
      // updateListPosts()
    }
      catch (err){
        console.log(err)
    }

  }
  // const updateListPosts = async () => {
  //   const allListPost = await API.graphql(graphqlOperation(listPosts))
  //   setPostItems(allListPost.data.listPosts.items)
  // }

  //   updateListPosts()

  return(
    <>
    {/* map and pass it to the eachpost component here or just console.log to see result*/}
    <PostForm addPost={addPost}></PostForm>
    {/* <ul>
        {PostItems.map((item) => {
        return <li key={item.id}>{ item.title }</li>
        })}
        </ul> */}
    </>
  )
}

export default Posts;