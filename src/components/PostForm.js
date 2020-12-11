import React,{Component} from 'react'

class PostForm extends Component {
   state = {
      title : '',
      body : ''
   }
   handleChange = (e) =>{
      this.setState({
         [e.target.name] : e.target.value
      })
   }
   handleSubmit = (e) =>{
      e.preventDefault();
      const post = {
         title : this.state.title,
         body : this.state.body
      }
      fetch('https://jsonplaceholder.typicode.com/posts',{
         method : 'POST',
         headers : {
            'content-type' : 'application/json'
         },
         body : JSON.stringify(post) 
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
   }
   render(){
      const {title, body} = this.state;
      return (
         <div>
            <form onSubmit={this.handleSubmit}>
               <h2>Add a Post</h2>
               <br></br>
               <label>Title: </label>
               <input type="text" name="title" value={title} onChange={this.handleChange}/>
               <br></br>
               <br></br>
               <label>Body: </label>
               <input type="textarea" name="body" value={body} onChange={this.handleChange}/>
               <br></br>
               <br></br>
               <button type="submit">Add post</button>
               <br></br>
               <br></br>
            </form>
         </div>
      )
   }
   
}

export default PostForm
