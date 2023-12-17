import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">MERN techNotes</span></h1>
            </header>
            <main className="public__main">
                <p>Notes app created with MERN stack to make taking notes easier!!</p>
                <address className="public__addr">
                    Quality Coders<br />
                    555 Kalpana<br />
                    BBSR City, CA 12345<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Shreenath Bharadwaj</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public