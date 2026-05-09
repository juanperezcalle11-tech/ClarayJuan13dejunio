import "./styles.css";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Bus, Gift, Heart, Car } from "lucide-react";

const RSVP_URL = "https://forms.gle/aMwA6FhYE11LMU356";

const IMAGES = {
  hero: "/hero2.png",
  banquete: "/banquete.png",
  iglesia: "/hero4.png",
};
function Button({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a className="btn" href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function InfoCard({
  image,
  title,
  time,
  address,
  mapUrl,
}: {
  image: string;
  title: string;
  time: string;
  address: string;
  mapUrl: string;
}) {
  return (
    <motion.article
      className="card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <img src={image} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>
          <Clock size={18} /> {time}
        </p>
        <p>
          <MapPin size={18} /> {address}
        </p>
        {title === "Ceremonia" && (
          <p className="puntualidad">* Se ruega puntualidad.</p>
        )}

        <Button href={mapUrl}>Ver ubicación</Button>
      </div>
    </motion.article>
  );
}

function FAQItem({
  icon,
  question,
  children,
}: {
  icon: React.ReactNode;
  question: string;
  children: React.ReactNode;
}) {
  return (
    <details className="faq">
      <summary>
        {icon} {question}
      </summary>
      <div>{children}</div>
    </details>
  );
}

export default function App() {
  return (
    <main>
      <section className="hero">
        <img src={IMAGES.hero} />
        <div className="hero-overlay" />
        <div className="hero-text">
          <p1 style={{ fontSize: "24px" }}>13 de junio de 2026</p1>
          <h1>Clara y Juan</h1>
          <h2 style={{ fontSize: "25px" }}>Que todo sea verdad</h2>
        </div>
      </section>

      <section className="intro">
        <h2
          style={{
            fontSize: "50px",
            fontWeight: 600,
          }}
        >
          ¡Bienvenido!
        </h2>

        <span>
          Te esperamos con mucha ilusión para compartir contigo este día tan
          importante para nosotros. Aquí encontrarás la información de nuestra
          boda.
        </span>
      </section>

      <section className="cards">
        <InfoCard
          image={IMAGES.iglesia}
          title="Ceremonia"
          time="13.00h"
          address="Basílica de la Milagrosa, Calle de García de Paredes, 45"
          mapUrl="https://www.google.com/maps/search/?api=1&query=Bas%C3%ADlica%20de%20la%20Milagrosa%20Calle%20de%20Garc%C3%ADa%20de%20Paredes%2045%20Madrid"
        />

        <InfoCard
          image={IMAGES.banquete}
          title="Celebración"
          time="15.30h"
          address="Jardines de Noc, Calle Canto Gordo, Collado Villalba"
          mapUrl="https://www.google.com/maps/search/?api=1&query=Jardines%20de%20Noc%20Calle%20Canto%20Gordo%20Collado%20Villalba"
        />
      </section>

      <section className="rsvp">
        <h2>Confirma tu asistencia</h2>
        <p>
          Para ayudarnos con la logística, por favor confirma tu asistencia
          rellenando el formulario de forma individual.
        </p>
        <Button href={RSVP_URL}>Ir al formulario</Button>
      </section>
      <section className="faqs">
        <h2>Preguntas frecuentes</h2>

        <FAQItem
          icon={<Bus size={22} />}
          question="¿Habrá servicio de autobuses?"
        >
          Habrá servicio de autobuses tanto desde la Basílica a la finca como de
          vuelta a las 00:00h con parada en Pozuelo y Madrid.
        </FAQItem>

        <FAQItem icon={<Car size={22} />} question="Parking">
          <strong>Basílica de la Milagrosa:</strong>
          <br />
          Recomendamos estos aparcamientos cercanos:
          <br />
          <br />
          <a
            href="https://www.google.com/maps/search/Aparcamientos/@40.4358828,-3.6975177,749m/data=!3m1!1e3!4m7!2m6!3m5!2sBas%C3%ADlica+de+la+Milagrosa!3s0xd4228f3b1bcf98d:0x74356a638ec87b84!4m2!1d-3.6949244!2d40.4367352?entry=ttu&g_ep=EgoyMDI2MDUwNi4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noreferrer"
            style={{ color: "#6f7751", fontWeight: 600 }}
          >
            Ver aparcamientos cercanos
          </a>
          <br />
          <br />
          <strong>Jardines de Noc:</strong>
          <br />
          La finca dispone de aparcamiento.
        </FAQItem>

        <FAQItem icon={<Gift size={22} />} question="Lista de regalos">
          Nos hace mucha ilusión compartir este día contigo y agradecemos mucho
          tu compañía y oración. Si quieres ayudarnos en esta nueva etapa, te
          dejamos nuestros datos:
          <br />
          <div
            style={{
              textAlign: "center",
              color: "#6f7751",
              fontWeight: 600,
              fontSize: "16px",
              marginTop: "20px",
              letterSpacing: "1px",
            }}
          >
            ES54 0128 0001 6801 0115 9507
          </div>
        </FAQItem>
      </section>

      <footer>
        <h2>Clara y Juan</h2>
        <p>
          <Calendar size={20} /> 13 de junio de 2026
        </p>
      </footer>
    </main>
  );
}
