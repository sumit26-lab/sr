export async function getAllEvents() {
    const response= await fetch('https://react-getting-started-6898a-default-rtdb.firebaseio.com/event.json')
    const data=await response.json();
    const events=[]
    for(const key in data){
      events.push({
        id:key,
        ...data[key]
      })
    }    
 return events;
}


export async function getFeaturedEvents() {
    const allevents=await getAllEvents();
    return allevents.filter((event) => event.isFeatured);
  }

  export async function getEventById(id) {
    const allevents= await getAllEvents();
    return allevents.find((event) => event.id === id);
  }