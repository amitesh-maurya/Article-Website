/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import internet1 from "../../images/Technology/arpanet 1983-credite .png";
import internet2 from "../../images/Technology/Tcp credit - adobe.jpeg";
import internet3 from "../../images/Technology/www-credite .jpeg";
import internet4 from "../../images/Technology/googe 1 .jpeg";
import internet5 from "../../images/Technology/socile-midia.jpeg";
import internet6 from "../../images/Technology/mobile_s_internet_by-investindia.gov.in.jpg";
import internet7 from "../../images/Technology/cloud adobe.jpg";
import internet8 from "../../images/Technology/IOT-Adobe.jpeg";

import "./article.css";
const Article2 = () => {
  return (
    <main className="article-main">
      <div className="container-article">
        <div className="container-articleH">
          <p className="tags">
            <span className="tag1"> Discoveries </span>
          </p>
          <h1> The Internet: A Discovery That Connected the World </h1>
          <p className="author-date">
            <span className="author"></span> Published on January 1, 2025
          </p>
        </div>
        <br className="custom" />

        <section className="article-content">
          <h2> The Internet: Introduction </h2>
          <p>
            The Internet has transformed the world, connecting people,
            information, and resources in unprecedented ways, even beyond
            physical boundaries. What began as a small research project has now
            grown into a global system that supports billions of devices and
            enables nearly every aspect of modern life. In this article, we will
            explore the major discoveries and milestones that contributed to the
            development of the Internet.
          </p>

          <figure>
            <img src={internet1} alt="" className="article-image" />
            <figcaption>
              An example of a ARPANET 1983.(Image Credit: alamy)
            </figcaption>
          </figure>

          <h2> The Birth of the Internet: ARPANET (1969)</h2>
          <p>
            The story of the Internet begins with ARPANET, a groundbreaking
            project funded by the U.S. Department of Defense in the late 1960s.
            Led by researchers like Paul Baran and Donald Davies, ARPANET
            introduced packet-switching technology, which breaks data into
            smaller packets for efficient transmission. This method allows
            information to travel along multiple paths, ensuring reliable
            delivery. ARPANET promoted knowledge sharing over long distances by
            linking computers at various research institutions. This innovation
            laid the essential groundwork for the Internet, forever changing how
            we connect and communicate globally.{" "}
          </p>

          <figure>
            <img src={internet2} alt="" className="article-image" />
            <figcaption>
              An example of a TCP/IP Beasd Server (Image Credit: Adobe stock)
            </figcaption>
          </figure>

          <h2>The Development of TCP/IP (1970s-1980s) </h2>
          <p>
            {" "}
            In the 1970s, visionary computer scientists Vinton Cerf and Robert
            Kahn introduced TCP/IP (Transmission Control Protocol/Internet
            Protocol), a groundbreaking set of communication protocols that
            transformed how different types of computers and networks interact.
            By enabling a decentralized network, TCP/IP ensured that no single
            computer or institution could dominate the data flow. This
            innovative open system was essential for the internet's remarkable
            scalability, allowing it to evolve into the vast interconnected
            network integral to our lives today.
          </p>
          <p>
            In 1983, ARPANET adopted TCP/IP as its standard protocol, marking
            the birth of the modern internet. This development signified the
            start of a truly global network that would eventually span the
            entire planet.
          </p>

          <figure>
            <img src={internet3} alt="" className="article-image" />
            <figcaption> An example of a WWW(World Wide Web)</figcaption>
          </figure>

          <h2>
            The World Wide Web: Revolutionizing Access to Information
            (1989-1990s)
          </h2>
          <p>
            In 1989, British computer scientist Tim Berners-Lee, working at
            CERN, introduced the World Wide Web (WWW), a system that used
            hypertext to link and access documents online. This groundbreaking
            innovation revolutionized how we create, share, and access
            information through browsers, servers, and websites.
          </p>
          <p>
            By 1991, the launch of the first website sparked a digital
            revolution. Graphical web browsers like Mosaic, which later became
            Netscape, made the web more accessible and user-friendly. This
            transformation allowed people from all walks of life to explore the
            internet, leading to its rapid expansion beyond academic and
            research communities.
          </p>
          <figure>
            <img src={internet4} alt="" className="article-image" />
            <figcaption> An example of a Google Search Page</figcaption>
          </figure>

          <h2>
            The Rise of Search Engines and the Information Explosion
            (1990s-2000s)
          </h2>
          <p>
            As the internet grew in the 1990s, more and more information became
            available online. With billions of websites to choose from, it
            became harder to find specific content. This problem led to the
            creation of search engines like AltaVista, Yahoo!, and later,
            Google.
          </p>
          <p>
            Google was founded in 1998 by Larry Page and Sergey Brin. It changed
            how we search for information online using advanced search
            algorithms. Google ranks webpages using a system called PageRank,
            which counts the number of links to a webpage. This method helps
            Google provide more accurate and relevant search results. As a
            result, the internet became a large, searchable library, making it
            easy for anyone to find information on almost any topic. An example
            of a social-media Apps
          </p>
          <figure>
            <img src={internet5} alt="" className="article-image" />
            <figcaption> (An example of a social-media Apps)</figcaption>
          </figure>

          <h2>Social Media and the Web 2.0 Revolution (2000s-Present)</h2>
          <p>
            The 2000s marked the rise of Web 2.0, a term used to describe the
            transition from static websites to more dynamic and interactive
            platforms. Social media platforms such as Facebook, Twitter,
            Instagram, and LinkedIn emerged, enabling users to create content,
            share experiences, and connect with people around the world. These
            platforms harnessed the power of the internet to foster virtual
            communities, facilitate communication, and encourage collaboration.
          </p>
          <p>
            The evolution of Web 2.0 also led to the rise of user-generated
            content, the creation of blogs, and the sharing of video and
            multimedia content. The internet transformed from a space solely for
            accessing information into a platform where individuals could
            express themselves, build communities, and share their lives.
          </p>

          <figure>
            <img src={internet6} alt="" className="article-image" />
            <figcaption> (Image Credit: investindia.gov.in)</figcaption>
          </figure>

          <h2>The Emergence of the Mobile Internet (2000s to Present)</h2>
          <p>
            A transformative shift in internet technology occurred with the
            mobile revolution. The launch of smartphones like the iPhone in 2007
            and the expansion of mobile networks put the Internet in the hands
            of billions worldwide. Mobile apps and responsive websites enhanced
            accessibility and convenience, enabling connections that once seemed
            impossible. This change has profoundly altered how we communicate
            and engage with the world.
          </p>
          <p>
            More people now access the Internet via mobile devices than through
            desktop computers. The mobile Internet is evolving thanks to 5G
            networks, which offer faster speeds, lower latency, and enhanced
            connectivity. (
          </p>
          <figure>
            <img src={internet7} alt="" className="article-image" />
            <figcaption> (Image Credit: Adobe stock)</figcaption>
          </figure>

          <h2>
            Cloud Computing and the Future of the Internet (2000s-Present).
          </h2>
          <p>
            In recent years, cloud computing has emerged as one of the most
            significant advancements in Internet technology. Cloud services
            enable users to store data, run applications, and access resources
            over the internet rather than depending on local hardware. Leading
            companies such as Amazon Web Services (AWS), Google Cloud, and
            Microsoft Azure have pioneered the development of scalable,
            flexible, and cost-effective cloud infrastructure. (Image Credit:
            Adobe stock)
          </p>

          <figure>
            <img src= {internet8} alt="" className="article-image" />
            <figcaption> (Image Credit: Adobe stock)</figcaption>
          </figure>

          <h2>
            The Internet of Things (IoT) and Smart Devices (2010s-Present)
          </h2>
          <p>
            The Internet of Things (IoT) refers to the expanding network of
            physical devices, vehicles, appliances, and other objects that are
            connected to the internet. By utilizing sensors and data analytics,
            these devices can communicate with one another and share data in
            real-time. The IoT is revolutionizing various industries, including
            healthcare, manufacturing, agriculture, and home automation
          </p>
          <p>
            Smart homes, wearables such as smartwatches, and connected vehicles
            are a few examples of how the internet is expanding beyond
            traditional devices like computers and smartphones. The potential of
            the Internet of Things (IoT) is vast, and it is expected to continue
            revolutionizing sectors such as energy, transportation, and
            healthcare.
          </p>

          <h2>Conclusion: The Internet’s Endless Potential</h2>
          <p>
            The internet has changed a lot since it started as a research
            project in the 1960s. It connects people around the world, making
            communication, shopping, learning, and entertainment easier than
            ever. In the future, the internet will keep evolving. New
            technologies like 5G, blockchain, and artificial intelligence will
            help shape the next stage of this digital change.
          </p>
        </section>

        <aside className="related-articles">
          <h2>Related Articles</h2>
          <ul>
            <li>
              <Link to="#">The Role of AI in Advancing Quantum Research</Link>
            </li>
            <li>
              <Link to="#">Top 5 Quantum Computing Breakthroughs of 2024</Link>
            </li>
            <li>
              <Link to="#">
                The Internet: A Discovery That Connected the World
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </main>
  );
};

export default Article2;
