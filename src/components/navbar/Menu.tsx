
type MenuProps = {
    children: JSX.Element,
    width: string
}

const Menu = ({children, width}: MenuProps): JSX.Element => {
  return (
    <div className={`absolute bg-gray-50 top-7 right-0 w-${width} h-auto rounded-md border-[0.1rem]`}>
        {children}
    </div>
  )
}

export default Menu