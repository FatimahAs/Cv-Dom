//const element = (
//        <div>
//            <h1>Welcome to React</h1>
//            <p>React is a JavaScript library for building user interfaces</p>
//        </div>

const text = (
  <div className="container">
    <div className="intro">
      <h1>Fatimah Asiri</h1>
      
    </div>

    <div className="topic">
      <section className="first">
        <h3>Career Objective</h3>
        <p>
          A recent Software Engineering graduate with hands-on experience in web
          development and a strong foundation in cybersecurity, penetration
          testing, and data analysis. I am seeking an opportunity to apply my
          technical skills and creativity to enhance web platforms, strengthen
          security infrastructures, and contribute to a forward-thinking
          organization.
        </p>
      </section>

      <section>
        <h3>Education</h3>
        <p>
          Bachelor of Science in Software Engineering, Hail University
          (2019–2024)
        </p>
      </section>

      <section>
        <h3>Skills</h3>
        <p>Data Analysis & Development</p>
        <ul>
          <li>Data Analysis (Python, Excel, SQL)</li>
          <li>
            Web Development (HTML, CSS, JavaScript, React, MongoDB, Bootstrap)
          </li>
          <li>Programming Languages: Python, Bash</li>
        </ul>

        <h3>Cybersecurity</h3>
        <ul>
          <li>Penetration Testing (Web, Network, Mobile)</li>
          <li>Digital Forensic Investigations</li>
        </ul>

        <h3>Networking</h3>
        <ul>
          <li>Network Security & Troubleshooting</li>
          <li>IT Help Desk & Technical Support</li>
        </ul>
      </section>

      <section>
        <h3>Training & Courses</h3>
        <ul>
          <li>CCNA</li>
          <li>Cybersecurity Bootcamp (Tuwaiq Academy)</li>
          <li>IT Help Desk (TCM Security)</li>
          <li>Tuwaiq Bootcamp Front-End</li>
          <li>Digital Forensics Analysis</li>
        </ul>
      </section>

      <section>
        <h3>Languages</h3>
        <p>English – Advanced</p>
      </section>
    </div>
  </div>
);

ReactDOM.render(text, document.getElementById("root"));
