import {useState} from "react";

export default function App() {

    const [age, setAge] = useState<number>(17);

    function birthday() {
        setAge(18)
        console.log(age)
    }

    return (
        <>
            <h1>{age}</h1>
            <button onClick={birthday}>Birthday</button>
        </>
    )
}
