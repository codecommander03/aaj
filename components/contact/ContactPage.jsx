import React from "react";
import BrandLogos from "./components/BrandLogos";
const ContactUsPage = () => {
  const features = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/98efb90b12c61b3384de34ffdc39054413a334a7db61af26db093b0eeb4867f7?placeholderIfAbsent=true&apiKey=ca2799c342124e66a6ac878dc034ce56",
      text: "Get top-rated transporters at unbeatable prices",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7fc646b30eed37a68590c77312dd417e9498cf7fbb30391dafa64cc9be30c162?placeholderIfAbsent=true&apiKey=ca2799c342124e66a6ac878dc034ce56",
      text: "95% Guaranteed on-time delivery",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ef4519ab1e4ae7b6ce684e7bed484c4fb63ccdae0fdf211c9e68364ed4cea66?placeholderIfAbsent=true&apiKey=ca2799c342124e66a6ac878dc034ce56",
      text: "Live Shipment Tracking and timely updates",
    },
  ];


  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      {/* Header Section */}
      <header style={{ padding: "10px 20px", borderBottom: "1px solid #ccc" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h1 style={{ color: "#E31E25" }}>AAJ swift</h1>
          <div>
            <a href="#" style={{ marginRight: "20px" }}>Track Shipment</a>
            <button style={{ background: "#E31E25", color: "white", border: "none", padding: "10px 20px" }}>Login</button>
          </div>
        </div>
      </header>

      {/* Contact Us Section */}
      <section style={{ padding: "40px 20px", background: "#f8f8f8" }}>
        <h2>Contact Us</h2>
        <p>Let’s Empower Your Supply Chain with Seamless and Reliable Logistics Solutions</p>

        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div style={{ width: "45%", minWidth: "300px" }}>
            <ul>
              {features.map((feature, index) => (
                <li key={index} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                  <img src={feature.icon} alt="feature-icon" style={{ width: "50px", height: "50px", marginRight: "10px" }} />
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>

          <form style={{ width: "45%", minWidth: "300px", background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
            <div style={{ marginBottom: "10px" }}>
              <label>Name</label>
              <input type="text" name="name" style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Email</label>
              <input type="email" name="email" style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Phone</label>
              <input type="text" name="phone" style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
            </div>
            <div style={{ marginBottom: "10px" }}>
              <label>Contact Support</label>
              <textarea name="message" rows="3" style={{ width: "100%", padding: "8px", marginTop: "5px" }} />
            </div>
            <button type="submit" style={{ background: "#E31E25", color: "white", padding: "10px 20px", border: "none", cursor: "pointer" }}>Submit</button>
          </form>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Logistics Partner for Exponential Growth</h2>
        <p>Trusted by top brands and small businesses alike</p>
        {/* <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
          {brandLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              style={{ width: "120px", height: "auto", objectFit: "contain" }}
            />
          ))}
        </div> */}
        <BrandLogos />
      </section>

      {/* Footer Section */}
      <footer style={{ background: "#333", color: "#fff", padding: "20px", marginTop: "20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
          <div>
            <h3>AAJ swift</h3>
            <p>Optimizing supply chains through technology-driven transportation services.</p>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>Our Story</li>
              <li>Careers at AAJ</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li>Track Your Order</li>
              <li>Transportation Network</li>
            </ul>
          </div>

          <div>
            <h4>Resources</h4>
            <ul>
              <li>Case Studies</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUsPage;
