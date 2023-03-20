interface Props {
  name: string,
  type?: "button" | "submit" | "reset" | undefined,
  // onClick?: () => void
}

export default function Button(props: Props) {
  return(
    <button>
      {props.name}
    </button>
  )
}