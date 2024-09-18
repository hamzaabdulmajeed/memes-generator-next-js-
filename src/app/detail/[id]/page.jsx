// import DetailUI from "./index";

// export default async function Detail({params}) {

//   const {id} = params;
//   console.log(id);

//   const res = await fetch("https://api.imgflip.com/get_memes");
//   const data = await res.json();
//   let allItems = data.data.memes;
//   const item = allItems.find((itempm) => itempm.id === id);

//   return <DetailUI response={item}/>
// }
import DetailUI from "./index"; // Import DetailUI component

export default async function Detail({ params }) {
  const { id } = params; // Destructure id from params

  // Fetch memes data from the API
  const res = await fetch("https://api.imgflip.com/get_memes");
  const data = await res.json();
  let allItems = data.data.memes;

  // Find the meme that matches the given id
  const item = allItems.find((itempm) => itempm.id === id);

  // Pass the found meme to the DetailUI component
  return <DetailUI response={item} />;
}