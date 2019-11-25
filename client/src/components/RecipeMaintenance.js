import React, { Component } from "react";

nameRef = React.createRef();
imageRef = React.createRef();
descriptionRef = React.createRef();
function createRecipe(e) {
  e.preventDefault();
  const recipe = {
    name: this.nameRef.current.value,
    image: this.imageRef.current.value,
    description: this.descriptionRef.current.value
  };
  // this.props.addRecipe(recipe);
  console.log(recipe);
}

function RecipeMaintenance() {


  
    return (
      <div>
        <h3>Add Recipe Form</h3>
        <form onSubmit={e => createRecipe(e)}>
          <input
            type="text"
            name="name"
            placeholder="Recipe name"
            ref={nameRef}
          />
          <input
            type="text"
            name="image"
            placeholder="Recipe image"
            ref={imageRef}
          />
          <textarea
            type="text"
            name="description"
            placeholder="Recipe description"
            ref={descriptionRef}
          />
          <button type="submit">Add Recipe</button>
        </form>
      </div>
    );
  
}

export default RecipeMaintenance;

// class RecipeMaintenance extends Component {
//   nameRef = React.createRef();
//   imageRef = React.createRef();
//   descriptionRef = React.createRef();

//   createRecipe(e) {
//     e.preventDefault();
//     const recipe = {
//       name: this.nameRef.current.value,
//       image: this.imageRef.current.value,
//       description: this.descriptionRef.current.value
//     };
//     // this.props.addRecipe(recipe);
//     console.log(recipe);
//   }

//   render() {
//     return (
//       <div>
//         <h3>Add Recipe Form</h3>
//         <form onSubmit={e => this.createRecipe(e)}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Recipe name"
//             ref={this.nameRef}
//           />
//           <input
//             type="text"
//             name="image"
//             placeholder="Recipe image"
//             ref={this.imageRef}
//           />
//           <textarea
//             type="text"
//             name="description"
//             placeholder="Recipe description"
//             ref={this.descriptionRef}
//           />
//           <button type="submit">Add Recipe</button>
//         </form>
//       </div>
//     );
//   }
// }

