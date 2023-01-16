type MainProps = {
    message: string
} 

const Main = ({message}: MainProps): JSX.Element => {
  return (
    <div>
        {message}
    </div>
  )
}

export default Main