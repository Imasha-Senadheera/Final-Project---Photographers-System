import React from "react";
import "./home.css";

export default function Homepage() {
  return (
    <div>
      <div className="head">
        <div className="navbar">
          <nav className="navi">
            <ul className="nav">
              <li>
                <a href="">Home </a>
              </li>

              <li>
                <a href="">Contact us </a>
              </li>

              <li>
                <a href="">FAQs</a>
              </li>
              <div className="button1">
                <button className="button">Login</button>
              </div>
            </ul>
          </nav>
        </div>
      </div>
      <div>
        <img src=".img/page2.png" alt="" className="logo1img2" />
        <img src=".img/img2.png" alt="" className="img" />
      </div>
      <h1 className="p1">CELEBRATE YOUR STORY THROUGH PHOTOGRAPHY</h1>
      <div className="p22">
        <p>
          
          Its simple and its free. Connect with hand-picked, local photographers
          around the Sri Lanka for fun, hassle-free photo shoots. So what are
          you waiting for ?<br /> Lets find a photographer
        </p>
      </div>

      <div className="box">
        <input type="text" placeholder="type a keyword..." className="box1" />
        <select name="Location" className="box1">
          <option value="locatio">Location</option>
          <option value="Colombo">colombo</option>
          <option value="Kaluthara">Kaluthara</option>
          <option value="Gampaha">Gampaha</option>
          <option value="Kurunegala">Kurunegala</option>
          <option value="Kegalla">kegalla</option>
        </select>
        <select name="pricerang" className="box1">
          <option value="rang">Price Range</option>
          <option value="1">&lt; 10000</option>
          <option value="2">10000-30000</option>
          <option value="3">30000-50000</option>
          <option value="4">50000-80000</option>
          <option value="5">80000-100000</option>
          <option value="6">100000 &gt;</option>
        </select>
        <button className="button2">search</button>
      </div>
      <div>
        <img src="./img3.png" alt="" className="img3" />
        <div className="p23">
          <h1>
            Capture Beautiful Memories with a Fun, Hassle-Free Photo Shoot.
          </h1>
          <h3>
            Hire an amazing local photographer, anywhere in the Sri Lanka.
            <br />
            Celebrate your story through photography
          </h3>
        </div>
        <div className="p24">
          <h3>
            500+ <br />
            Photographers
          </h3>
          <h3>
            Easy, Hassle <br />
            free booking process
          </h3>
          <h3>
            Beautiful and <br />
            Professional photos guaranteed
          </h3>
          <h3>
            Over 2000,
            <br />5 star trusted reviews
          </h3>
        </div>
      </div>

      <div>
        <select
          name="Location"
          className="boxfilter"
          style={{ top: "1325px" }}
        >
          <option value="locatio">Location</option>
          <option value="Colombo">colombo</option>
          <option value="Kaluthara">Kaluthara</option>
          <option value="Gampaha">Gampaha</option>
          <option value="Kurunegala">Kurunegala</option>
          <option value="Kegalla">kegalla</option>
        </select>
        <select
          name="pricerang"
          className="boxfilter"
          style={{ top: "1395px" }}
        >
          <option value="rang">Price Range</option>
          <option value="1">&lt; 10000</option>
          <option value="2">10000-30000</option>
          <option value="3">30000-50000</option>
          <option value="4">50000-80000</option>
          <option value="5">80000-100000</option>
          <option value="6">100000 &gt;</option>
        </select>
        <button className="filterbutton" style={{ top: "1470px" }}>Filter</button>
      </div>
      <div className="picadd">
        <div className="picbox"></div>

        <div className="picbox"></div>

        <div className="picbox"></div>

        <div className="picbox"></div>

        <div className="picbox"></div>

        <div className="picbox"></div>

        <div className="picbox"></div>

        <div className="picbox"></div>

        <div className="picbox"></div>

        <div className="picbox"></div>

        <div className="picbox"></div>

        <div className="picbox"></div>
      </div>

      <hr className="hr1" />

      <div>
        <img src="./img4.png" alt="" className="img4" />
        <p className="p25">Commenter Name</p>
        <input type="text" className="commentbox" placeholder="comment on heare " />
      </div>
      <div className="nav2">
        <h1>Join Our Photography Community Today</h1>
        <h3>
          Be found by people looking for their perfect photographer, showcase
          your work, enter our awards and feautures
        </h3>
        <button className="button3">Sign Up</button>
      </div>
      <div className="icon"></div>
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
