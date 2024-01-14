import Link from "next/link"

function Menu() {
    return (
        <div className='enlaces'>
            <Link href="/pokemon/bulbasaur">Bulbasaur</Link>
            <Link href="/pokemon/ivysaur">Ivysaur</Link>
            <Link href="/pokemon/venusaur">Venusaur</Link>
            <Link href="/pokemon/charmander">Charmander</Link>
        </div>
    )
}

export default Menu