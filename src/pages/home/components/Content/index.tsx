import Link from 'next/link'
import CardExperience from 'src/components/CardExperience'
import { Container, BtnContact, Title } from './styles'

const Content = ({ Body }: any) => {
  return (
    <div id="content">
      <Title>
        <label>Experiencia</label>
        <h2>Experiencia laboral</h2>
      </Title>
      <Container>
        <ul>
          <CardExperience index={0}>
            NTT DATA - Senior Frontend Developer <br />
            <p>
            Mar 2022 - Present <br /><br />
            • Lideré la integración con Google Looker y React.js para la visualización de dashboards para LATAM Airlines, lo cuál significó la renovación del contrato del cliente con la empresa gracias a los buenos resultados.<br /><br />
            • Lideré el desarrollo Front-End de plataforma web en React.js para administración y gestión de personal médico de &apos;Clínica Las Condes&apos;.<br /><br />
            • Aumenté la convertura de Tests Unitarios de 20% a 80% de Front-End en React.js de plataforma web existente de &apos;Clínica Alemana&apos;.<br /><br />
            Stacks: React.js · Docker
            </p>
          </CardExperience>
          <CardExperience index={1}>
            MEAT Group | Marketing y Comunicación - Front-End Developer Semi-Senior <br />
            <p>Sep 2020 - Mar 2022 <br /><br />
            • Desarrollé una plataforma web para supervisión y gestión desucursales THE LINE. Implementé pruebas unitarias con Jest. <br /><br />
            • Desarrollé la plataforma de tickets para el &apos;Teatro Municipal de Santiago&apos;, donde lideré la integración con la API de venta de boletos. El desarrollo fue realizado en Nuxt.js para optimización de SEO. <br /><br />
            • Desarrollé un plugin de wordpress para agregar mapas de OpenStreetMaps con la ubicación de las tiendas. <br /><br />
            • Realicé mantención de App mobile de Banco de Chile. Tecnologías usadas: VueJs y Cordova. <br /><br />
            • Otros desarrollos y mantenciones de websites y web apps. <br /><br />
            Stacks: Vue.js · React.js · Docker
            </p>
          </CardExperience>
          <CardExperience index={2}>
            Opting IT Solutions - Software Engineer<br />
            <p>
              Sep 2018 - Jun 2020<br /><br />
              • Lideré una célula ágil como Scrum Master.<br /><br />
                • Mantuve relación estrecha con clientes para la documentación de requerimientos y presentación de avances.<br /><br />
                • Colaboré en la capacitación de nuevos desarrolladores sugiriendo cursos, con desarrollo pair-coding y revisando el código según metodologías de desarrollo y buenas prácticas.<br /><br />
                • Colaboré en el desarrollo de distintos softwares a medidas para clientes.• Lideré una célula ágil como Scrum Master.<br /><br />
                Stacks: Docker · Python · Angular
            </p>
          </CardExperience>
          <CardExperience index={3}>
            
              GTD Ingenieros Consultores Ltda. - Memorista Memorista <br />
            <p>
                Jan 2018 - Apr 2018 <br /><br />
                • Desarrollé un algoritmo matemático en Python para la automatización de estudios de obras de movimiento de tierras. El software fué utilizado en distintos proyectos con excelentes resultados. <br /><br />
                Stacks: Python
            </p>
          </CardExperience>
        </ul>
        <p>
          Además de mi experiencia laboral, continuamente me encuentro aprendiendo nuevas tecnologías y metodologías de desarrollo.
          Desarrollando aplicaciones para clientes particulares y proyectos personales por diversión.
          <br /><br />
          Para más información puedes descargar mi CV en el siguiente botón:
        </p>
        <a href="/CV-FernandoArriagada-EN.pdf" target="_blank">
          <BtnContact>DESCARGAR CV</BtnContact>
        </a>
        <br /><br /><br />
        <b>Gracias por llegar hasta el final ❤️</b>
      </Container>
    </div>
  )
}

export default Content