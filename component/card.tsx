// What is component
// componet kay name ka 1st letter Capital sey start hona chaye
// component ek function hey 
// component html ka parent element return kerta hey 
// component re-useable hey
// component mein Javascript/Typescript kay under html and css bhi likh saktey hein 
// component mein html key under Javascript/Typecsript bhi likh saktey hen

const Card = ()=>{
    let a = "my fisrt element"
    return (
        <div>
            <h3>{a}</h3>
        </div>
    )
}

export default Card