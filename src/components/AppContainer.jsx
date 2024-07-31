

// eslint-disable-next-line react/prop-types
export const AppContainer = ({children, className = ""}) => {
  return (
    <div className={`${className} max-w-[1332px] mx-auto px-[20px]`}>
        {children}
    </div>
  )
}
