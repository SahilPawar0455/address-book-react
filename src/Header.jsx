import './App.css';
import logo from "../src/assets/images/logo.png"

function Header(){
return(
    <header class="header-content header">
        <div class="logo-content">
            <img src = {logo} alt="logo"/>
            <div><span class=" book-text">ADDRESS</span>
                <span class="book-text add-book">BOOK</span>
            </div>
        </div>
    </header>
)
}

export default Header;