import Link from 'next/link'

const Footer = () => (
    <footer>
        <section>
            <Link href='/about'><a>Sobre Nós</a></Link>
            <Link href='emailto:laboratorioemail@gmail.com'><a>Contato</a></Link>
        </section>
        <section>
            <p><em>Laboratório de Ideias</em></p>
            <p>Av Brasil 247 Rio de Janeiro</p>
        </section>
        <section>
            <p>{new Date().getFullYear()} @Felipe Lisboa</p>
        </section>
    </footer>
)

export default Footer