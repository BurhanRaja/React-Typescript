
type MenuProps = {
    children: JSX.Element
}

const Menu = ({children}: MenuProps): JSX.Element => {
  return (
    <div className={`absolute z-50 bg-gray-50 top-7 right-0 w-72 h-auto rounded-md border-[0.1rem]`}>
        {children}
    </div>
  )
}

export default Menu