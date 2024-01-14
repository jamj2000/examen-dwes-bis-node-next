import Menu from "./menu"

function layout({ children }) {
    return (
        <div className='layout-pokemon'>
            <div>
                {children}
            </div>
            <Menu />
        </div>
    )
}

export default layout