import React from 'react'

const Footer = () => {
  
    return (
      <footer style={{ 
          justifyContent:"space-between", 
          alignItems: "center",
          position: "realtive",
          padding: "60px",
          width:"90vw"
      }}>
          <div style={{backgroundColor: "#ff69b4", display: "block", padding: "0.5rem", textAlign: "center", cursor: "pointer"}}>
            <p onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              BACK TO TOP
            </p>
          </div>

          <div className='footer' style={{display: "flex", width:"100%", gap:"480px", alignItems:"center"}}>
            <div style={{display:"flex", alignItems:"center",gap:"200px",marginLeft: "30px"}}>
            <p>Powered by</p>
            <img src= "../img/DH.png" alt="DH-logo" style={{ width: "300px", margin: "20px 40px"}} />
          </div>
          
          <div style={{ display: "flex", gap:"30px", marginRight: "6px"}}>
            <img src="../Img/ico-facebook.png" alt="Facebook" style={{ width: "40px", filter:"invert(100%)" }} />
            <img src="../Img/ico-instagram.png" alt="Instagram" style={{ width: "40px", filter:"invert(100%)" }} />
            <img src="../Img/ico-whatsapp.png" alt="Whatsapp" style={{ width: "40px", filter:"invert(100%)" }} />
            <img src="../Img/ico-tiktok.png" alt="Tiktok" style={{ width: "40px", filter:"invert(100%)" }} />
          </div>
          
          </div>
          
        

    </footer>
  );
};

  export default Footer;
