type Props = {
    title: string
}

export default function task({title}: Props) {
  return (
    <div>{title}</div>
  )
}