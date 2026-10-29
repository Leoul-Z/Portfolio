import alxSoftwareEngineering from '../assets/certificates/alx_software_engineering.jpg';
import alxProfessionalFoundations from '../assets/certificates/alx_professional_foundations.jpg';
import udacityProgrammingFundamentals from '../assets/certificates/udacity_programming_fundamentals.jpg';
import huaweiHciaOpengauss from '../assets/certificates/huawei_hcia_opengauss.jpg';
import huaweiHciaDatacom from '../assets/certificates/huawei_hcia_datacom.jpg';
import forageCertificate from '../assets/certificates/forage_certificate.png';

export const CERT_DATA = [
  {
    id: 'forage-yc',
    title: 'Software Engineer at a Start Up Job Simulation',
    issuer: 'Forage / Y Combinator',
    date: 'Sep 2026',
    image: forageCertificate,
    verifyUrl: 'https://www.theforage.com',
    description: 'Practical simulation covering frontend user feedback implementation, backend REST API extensions, and telemetry analytics.'
  },
  {
    id: 'alx-backend',
    title: 'ALX Software Engineering — Back-End',
    issuer: 'ALX Africa',
    date: 'Mar 2026',
    image: alxSoftwareEngineering,
    verifyUrl: 'https://savanna.alxafrica.com/certificates/LFSyC93BY7',
    description: 'Comprehensive 8-month intensive back-end program focusing on C, Python, relational database schemas, REST APIs, and deployment pipelines.'
  },
  {
    id: 'udacity-fundamentals',
    title: 'Programming Fundamentals Nanodegree',
    issuer: 'Udacity',
    date: 'Oct 2025',
    image: udacityProgrammingFundamentals,
    verifyUrl: 'https://www.udacity.com/certificate/e/a12d95ec-793e-11f0-9d7a-abefb65b1531',
    description: 'Algorithmic problem-solving, computational logic, object-oriented software design, and foundational data structures.'
  },
  {
    id: 'alx-foundations',
    title: 'ALX Professional Foundations',
    issuer: 'ALX Africa',
    date: 'Sep 2025',
    image: alxProfessionalFoundations,
    verifyUrl: 'https://savanna.alxafrica.com/certificates/PHhJ5yGB8F',
    description: 'Digital skills, professional communication, teamwork, and modern engineering workflow foundations.'
  },
  {
    id: 'hcia-opengauss',
    title: 'HCIA-openGauss V1.0',
    issuer: 'Huawei',
    date: 'May 2025',
    image: huaweiHciaOpengauss,
    verifyUrl: null,
    description: 'Enterprise openGauss database architecture, SQL execution plans, query tuning, and transactional backup recovery.'
  },
  {
    id: 'hcia-datacom',
    title: 'HCIA-Datacom V1.0',
    issuer: 'Huawei',
    date: 'May 2025',
    image: huaweiHciaDatacom,
    verifyUrl: null,
    description: 'Network engineering fundamentals, IP routing, switching protocols, enterprise VLAN, and network infrastructure security.'
  }
];

