import Map from "../components/Map";
import Footer from "../components/Footer"

const About = () => {
  return (
    <>
    <div className="about-page">
      <div className="team">
        <div className="container-team">
          <h1 className="heading"><span>meet</span>Our Team</h1>

          <div className="profiles">
            <div className="profile">
              <img src="./img/img1.jpg" className="profile-img" alt="img" />

              <h3 className="user-name">William</h3>
              <h5>UI Design</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eveniet soluta hic sunt sit reprehenderit.</p>
            </div>
            <div className="profile">
              <img src="./img/img2.jpg" className="profile-img" alt="img" />

              <h3 className="user-name">Arjun Kapur</h3>
              <h5>Creative Director</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam facilis sint quod.</p>
            </div>
            <div className="profile">
              <img src="./img/img3.jpg" className="profile-img" alt="img" />

              <h3 className="user-name">Isabella</h3>
              <h5>Project Manager</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, eveniet!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="info" >
        <div className="container">
          <div className="content-section">
            <div className="title">
              <h1>About Us</h1>
            </div>
            <div className="content">
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus commodi itaque eum unde laudantium consectetur dicta veritatis illo odit, deserunt maiores blanditiis, perspiciatis, fugit consequuntur. Perspiciatis eligendi inventore pariatur! Quisquam.</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim explicabo sed iure optio doloremque sint delectus est ullam, officiis similique, aliquam assumenda saepe doloribus dolorum veritatis veniam perspiciatis ea consequuntur.</p>
              <div className="buttom">
                <a href="/about">Voir plus</a>
              </div>
            </div>
            <div className="social">
              <a href="http://www.facebook.com"><i class="fab fa-facebook-f"></i></a>
              <a href="http://www.twitter.com"><i class="fab fa-twitter"></i></a>
              <a href="http://www.instagram.com"><i class="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="image-section">
            <img src="./img/dari.png" alt="img" style={{ height: '40vh' }} />
            <div style={{ width: '100%', height: '40vh', marginBottom: '20px', marginTop: "30px" }}>
              <Map annonce={{
                latitude_bien: "36.71405501792964", longitude_bien: "3.177158315815631", wilaya_bien: "Alger", ville_bien: "Bab Ezzouar"
              }} />
            </div>
          </div>
        </div>
      </div>
    </div >
    <Footer />
  </>
  );
};

export default About;