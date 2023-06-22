type Props = {
    content: {
        text: string
    },
}

export default function BlogPost(props: Props) {
    return (
        <h3>
            {props.content.text}
        </h3>
    )
}