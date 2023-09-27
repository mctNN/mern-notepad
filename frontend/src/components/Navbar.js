import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Navbar() {
  const { logout } = useLogout();
  const { kullanici } = useAuthContext();
  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>YAZILIMCININ NOT DEFTERİ</h1>
        </Link>
        <nav>
          {kullanici && (
            <div>
              <span>{kullanici.email}</span> &nbsp;
              <button onClick={handleClick}>Çıkış Yap</button>
            </div>
          )}
          {!kullanici && (
            <div>
              <Link to="/Login">Giriş Yap</Link>&nbsp;
              <Link to="/Signup">Hesap Oluştur</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
