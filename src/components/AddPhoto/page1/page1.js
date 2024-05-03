import React from "react";
import "./page1.css";

export default function page1() {
  return (
    <div>
      <div className="page1head">
        <div className="page1navbar">
          <nav className="page1navi">
            <ul className="page1nav">
              <li>
                <a href="">Home </a>
              </li>

              <li>
                <a href="">Contact us </a>
              </li>

              <li>
                <a href="">FAQs</a>
              </li>
              <div className="page1button1">
                <button className="page1button">Login</button>
              </div>
            </ul>
          </nav>
        </div>
      </div>

      <div>
        <img src="./page2.png" alt="" className="page1img2" />
        <img src="./page1.png" alt="" className="page1img" />
      </div>

      <div className="afterhedding">
        <img src="./img4.png" alt="" className="orgpic" />
        <h2 className="orgname">Orgnizer name</h2>
        <h3 className="orgnameh3">organizer name </h3>
        <button className="likebutton">Like</button>
        <button className="reviewbutton">Add Review</button>
      </div>
      <div className="padd">
        <div className="pbox"></div>

        <div className="pbox"></div>

        <div className="pbox"></div>

        <div className="pbox"></div>

        <div className="pbox"></div>

        <div className="pbox"></div>

        <div className="pbox"></div>

        <div className="pbox"></div>

        <div className="pbox"></div>

        <div className="pbox"></div>

        <div className="pbox"></div>

        <div className="pbox"></div>

        <div className="aboutbox">
          <h1 className="h1graph">About</h1>
          <h3 className="discription">
            Joined on: 01/25/2023 <p></p>Experience: 2 years <p></p>Price range: 80000 - 150000 <p></p>Category: Wedding, Birthday, Party
          </h3>
        </div>

        <div className="socialbox">
          <h1 className="h1graph">Social Links</h1>
<img src="./img5.webp" alt="" className="fbimg"/>
<img src="./whatsapp.webp" alt="" className="wappimg"/>
<img src="./img6.webp" alt="" className="insterimg"/>

        </div>

        <div className="Descriptionbox">
          <h1 className="h1graph">Description</h1>
          <h3 className="discription">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</h3>
        </div>
      </div>


      <div className="imgicon">
        <a href="https://www.youtube.com/" target="blank">
          <img src="./img5.webp" alt="" className="img5" />
        </a>
        <a href="https://www.youtube.com/" target="blank">
          <img src="./img6.webp" alt="" className="img5" />
        </a>
        <a href="https://www.youtube.com/" target="blank">
          <img src="./img7.png" alt="" className="img5" />
        </a>
      </div>

      <hr className="hr2" />

      <div className="end">
    <h2 className="end1">Explone</h2>
    <ul class="dropdown">
        <li><h3 className="endbutton" style={{ bottom: '100px', left: '0px' }}>Home</h3></li>
        <li><h3 className="endbutton" style={{ bottom: '100px', left: '0px' }}>About Us</h3></li>
        <li><h3 className="endbutton" style={{ bottom: '100px', left: '0px' }}>FAQ</h3></li>
    </ul>
    <h2 className="end1">Contact Us</h2>
    <ul class="endcontactus">
        <li><h3 className="endcontactus" style={{ bottom: '135px', left: '0px' }}>Email</h3></li>
        <li><h3 className="endcontactus" style={{ bottom: '100px', left: '0px' }}>077123456789</h3></li>
    </ul>
    <h2 className="end1">Logo</h2>
    <ul class="endcontactus">
        <li><h3 className="endcontactus" style={{ bottom: '115px', left: '400px' }}>Stay Connected</h3></li>
    </ul>
</div>

<h4 className="copyright">© Copyright 2023 Graphers Enterprises. All images and logos are the copyright and/or trademark of their respective owners   Terms and Conditions   Privacy policy</h4>








    </div>
  );
}
