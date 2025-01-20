import React from "react";

const microphoneData = [

  {
    name: "RODE WIRELESS GO 2 SINGLE",
    link: "https://www.thomannmusic.com/rode_wireless_go_ii_single.htm",
    image: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_53/535956/17061663_800.jpg",
    price: 155, // in EUR
  },
  {
    name: "RODE PODMIC USB",
    link: "https://www.thomannmusic.com/rode_podmic_usb.htm",
    image: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_56/567098/18330268_800.jpg",
    price: 169, // in EUR
  },
  {
    name: "RODE SMARTLAV +",
    link: "https://www.thomann.de/de/rode_smartlav_345457.htm?__cTr=7305c67c-f592-442d-a62b-1936e86c3a8a&shp=eyJjb3VudHJ5IjoiZGUiLCJjdXJyZW5jeSI6MiwibGFuZ3VhZ2UiOjF9&reload=1",
    image: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_34/345457/9866700_800.jpg",
    price: 58, // in EUR
  },
  {
    name: "AUDIO-TECHNICA AT2020USB-X",
    link: "https://www.thomann.de/intl/audio_technica_at2020usb_x.htm?shp=eyJjb3VudHJ5IjoiaHIiLCJjdXJyZW5jeSI6MiwibGFuZ3VhZ2UiOjJ9&reload=1",
    image: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_55/550372/17769133_800.jpg",
    price: 138, // in EUR
  },
  {
    name: "Sennheiser XSW 1-ME2 GB-Band Lapel Set",
    link: "https://www.thomann.de/intl/sennheiser_xsw_1_me2_gb_band_lapel_set.htm",
    image: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_40/408747/14673716_800.jpg",
    price: 364, // in EUR
  },
  {
    name: "Shure MV7 Plus",
    link: "https://www.thomann.de/intl/shure_mv7_plus.htm",
    image: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_58/587484/18998848_800.jpg",
    price: 298, // in EUR
  },
  {
    name: "Sennheiser EW-D ME2 Q1-6",
    link: "https://www.thomann.de/intl/sennheiser_ew_d_me2_q1_6.htm",
    image: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_51/518577/16345203_800.jpg",
    price: 655, // in EUR
  },
  {
    name: "Earthworks Audio ICON",
    link: "https://www.thomann.de/intl/earthworks_audio_icon.htm",
    image: "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/_51/512189/16191891_800.jpg",
    price: 435, // in EUR
  },
];

const Recommendation = ({ budget, isStudio, freedomRequired }) => {
  let filteredMicrophones = microphoneData.filter((mic) => mic.price <= budget);

  // Apply filtering based on room type and freedom of movement
  if (isStudio && freedomRequired) {
    filteredMicrophones = filteredMicrophones.filter(
      (mic) => mic.name === "RODE WIRELESS GO 2 SINGLE" || mic.name === "Sennheiser EW-D ME2 Q1-6"
    );
  } else if (isStudio && !freedomRequired) {
    filteredMicrophones = filteredMicrophones.filter(
      (mic) => mic.name === "AUDIO-TECHNICA AT2020USB-X" || mic.name === "Earthworks Audio ICON"
    );
  } else if (!isStudio && freedomRequired) {
    filteredMicrophones = filteredMicrophones.filter(
      (mic) => mic.name === "RODE WIRELESS GO 2 SINGLE" || mic.name === "Sennheiser XSW 1-ME2 GB-Band Lapel Set"
    );
  } else if (!isStudio && !freedomRequired) {
    filteredMicrophones = filteredMicrophones.filter(
      (mic) => mic.name === "RODE PODMIC USB" || mic.name === "RODE SMARTLAV +" || mic.name === "Shure MV7 Plus"
    );
  }

  // Sort microphones by price for better user experience (lower prices first)
  filteredMicrophones.sort((a, b) => a.price - b.price);

  return (
    
    <div className="recommendation">
      <h2>Preporuka:</h2>
      {filteredMicrophones.length > 0 ? (
        filteredMicrophones.map((microphone) => (
          <div key={microphone.name} className="recommendation-item">
            <p>
              <strong>{microphone.name}</strong>
              <br />
              {microphone.price}  €
            </p>
            
            
            <a
              href={microphone.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#008cff" }}
            >
              <img
                src={microphone.image}
                alt={microphone.name}
                style={{
                  maxWidth: "100%",
                  maxHeight: "200px",
                  marginBottom: "10px",
                  borderRadius: "10px",
                }}
              />
              <br />
              
            </a>
            
           
          </div>
                    
        ))
      ) : (
        <div className="recommendation-item">
          <p>
            <strong>INTEGRIRANI MIKROFON <br/>
                {!isStudio?" + AUDIO KOREKCIJA":" "}</strong>
          </p>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#008cff" }}
          >
            <img
              src="https://www.links.hr/images/thumbs/0086067_laptop-hp-15-fc0003nm-7s4s9ea-ryzen-5-7520u-16gb-512gb-ssd-amd-radeon-hd-graphics-156-fhd-ips-bez-o_550.jpg"
              alt="Integrated Microphone"
              style={{
                maxWidth: "100%",
                maxHeight: "200px",
                marginBottom: "10px",
                borderRadius: "10px",
              }}
            />
            <br />
            {!isStudio?" SAZNAJ VIŠE O AUDIO KOREKCIJI":" "}
          </a>

        </div>

      )}

<h2>{  filteredMicrophones.length === 0 ? "":"Zašto?"}</h2>
<div className="explain">
                    {  filteredMicrophones.length === 0 ? "Potrebno je koristiti već postojeći mikrofon na uređaju. Za veći izbor povećajte budžet.":
                        isStudio && freedomRequired ? "Kako se nalazimo u izoliranom prostoru, možemo koristiti osjetljiviji (kondenzatorski) mikrofon koji znatno poboljšava kvalitetu snimke. Međutim, zbog potrebe kretanja, ovakvi bežični mikrofoni su skupi, pa možemo koristiti manje osjetljive (dinamičke) mikrofon kao sigurnu opciju." : 
                        isStudio && !freedomRequired ?  "Kako se nalazimo u izoliranom prostoru, možemo koristiti osjetljiviji (kondenzatorski) mikrofon koji znatno poboljšava kvalitetu snimke. Od ovakvog mikrofona možemo se udaljavati do 2 metra, ali zbog osjetljivosti moramo pripaziti da ga slučajno ne udarimo, te da u prostoriji nema vanjskih zvukova." :
                          !isStudio && freedomRequired ? "Kako se nalazimo u prostoru gdje ima vanjskih zvukova (učenici, promet, ...) potrebno je odabrati manje osjetljivi (dinamički) mikrofon. Postoji puno vrsta bežičnih mikrofona koji omogućavaju kretanje. Većinom dolaze u lapel obliku te se pričvršćuju na odjeću i spajaju na bežični odašiljač." :
                          !isStudio && !freedomRequired ? "Kako se nalazimo u prostoru gdje ima vanjskih zvukova (učenici, promet, ...) potrebno je odabrati manje osjetljivi (dinamički) mikrofon. Žičane verzije ovakvih mikrofona mogu se vrlo često naći za malu cijenu. Popularni su jer su izdržljivi i nisu osjetljivi na vanjske zvukove, ali zahtjevaju da govornik bude dovoljno približen samom mikrofonu." : ""
          
                    }
                    </div>

      

    </div>
  );
};

export default Recommendation;
