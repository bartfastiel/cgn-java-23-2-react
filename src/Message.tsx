type Props = {
    age: number,
}
export default function Message(props: Props) {

    return (
        <div>
            Hallo ich bins, ich bin {props.age} Jahre alt
        </div>
    )
}