import Nav from './navbar/Nav'
import Footer from './footer/Footer'

export default function Layout(props) {
    const { children } = props
    return (
        <>
            <Nav></Nav>
            {children}
            <Footer></Footer>
        </>
    )
}
