import Link from 'next/link'

const Navbar = () => (
    <nav>
        <Link href='/'><a>Home</a></Link>
        <Link href='/about'><a>Sobre nós</a></Link>
        <Link href='/services'><a>Serviços</a></Link>
    </nav>
)

export default Navbar