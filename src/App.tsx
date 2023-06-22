import Title from "./Title.tsx";
import Message from "./Message.tsx";
import BlogPost from "./BlogPost.tsx";

export default function App() {

    const myPersonalNotes = [
        {
            text: "Heute ist ein schöner Tag"
        },
        {
            text: "Leider heute Regen"
        },
        {
            text: "Leider heute so mittel"
        },
        {
            text: "Leider heute Gewitter"
        },
    ]

    return (
        <>
            <Title></Title>
            <Message age={38}></Message>
            {
                myPersonalNotes.map(entry => {
                    return <BlogPost content={entry} key={entry.text}></BlogPost>
                })
            }
        </>
    )
}
