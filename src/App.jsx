import './App.css';
import Logo from './Logo.svg';
import SBDLogo from './SBDLogo.svg';
import DMJLogo from './DMJLogo.svg';
import OSLogo from './OSLogo.svg';
import aslab1 from './aslab1.png';
import aslab2 from './aslab2.png';
import aslab3 from './aslab3.png';
import aslab4 from './aslab4.png';
import aslab5 from './aslab5.png';
import aslab6 from './aslab6.png';
import aslab7 from './aslab7.png';
import aslab8 from './aslab8.png';
import React, { useState } from 'react';

function App(){
  const [selectedSection, setSelectedSection] = useState('Home');
  const content ={
    Home:{
      logo: Logo,
      title: 'NETWORK LABORATORY',
      description:[
        'Selamat datang di Netlab!',
        'Website ini memberikan informasi tentang modul praktikum yang ada di Netlab dan memperkenalkan Asisten Laboratorium yang siap membantu praktikan.',
    ]
  },
  SBD:{
    logo: SBDLogo,
    title: 'SISTEM BASIS DATA',
    description:[
      '- Modul 1 : Setup RDBMS',
      '- Modul 2 : Relational Database Design & Data Definition/Manipulation',
      '- Modul 3 : Join, Views, and Advanced Query',
      '- Modul 4 : Normalization',
      '- Modul 5 : Express JS',
      '- Modul 6 : Advanced Express JS',
      '- Modul 7 : MongoDB (NoSQL)',
      '- Modul 8 : Basic Frontend',
      '- Modul 9 : Advanced Frontend',
    ] 
  },
  DMJ:{
    logo: DMJLogo,
    title: 'DESAIN MANAJEMEN JARINGAN',
    description:[
      '- Modul 1 : Multi-access & Multi-area OSPFv2',
      '- Modul 2 : Enhanced Interior Gateway Routing Protocol (EIGRP)',
      '- Modul 3 : Network Address Translation (NAT) & Access Control List (ACL)',
      '- Modul 4 : Wide Area Network (WAN PPP & Frame Relay)',
      '- Modul 5 : Virtual Private Network (VPN)',
      '- Modul 6 :  Quality of Service (QoS) & Network Management',
      '- Modul 7 :  Network Monitoring',
      '- Modul 8 : Network Virtualization',
      '- Modul 9 : Network Automation',
    ]
  },
  OS:{
    logo: OSLogo,
    title: 'SISTEM OPERASI',
    description:[
      '- Modul 1 : Setup VM and Linux Introduction',
      '- Modul 2 : Basic Bootloader',
      '- Modul 3 : Process Creation',
      '- Modul 4 : Exec Family',
      '- Modul 5 : Signals',
      '- Modul 6 : File I/O',
      '- Modul 7 : Pipe',
      '- Modul 8 :Input Parsing',
    ]
  },
  ASLAB:{
    logo: null,
    title: 'ASISTEN LABORATORIUM',
    description:[],
    images:[
      { src: aslab1, name: 'George William Thomas (GG)', role: 'PJ OS' },
      { src: aslab2, name: 'Fairuz Muhammad (FZ)', role: 'PJ OS' },
      { src: aslab3, name: 'Raihan Muhammad Ihsan (IP)', role: 'PJ OPREC' },
      { src: aslab4, name: 'Dimas Dermawan (DM)', role: 'PJ OPREC' },
      { src: aslab5, name: 'Ryan Safa Tjendana (ST)', role: 'PJ DMJ' },
      { src: aslab6, name: 'Emir Fateen Haqqi (EF)', role: 'PJ DMJ' },
      { src: aslab7, name: 'Yasmin Devina Sinuraya (RY)', role: 'PJ SBD' },
      { src: aslab8, name: 'Kamal Makarim Iskandar (KL)', role: 'PJ SBD' },
    ]
  }
  };

  const { logo, title, description, images } = content[selectedSection];

  return (
    <div className="App">
    <nav className="navbar">
    <div className="logo-container">
    <img src={Logo} alt="Netlab Logo" className="logo" />
    <span className="lab-title">Network Laboratory</span>
    </div>
    <ul className="nav-links">
    <li onClick={() => setSelectedSection('Home')}>Home</li>
    <li onClick={() => setSelectedSection('SBD')}>SBD</li>
    <li onClick={() => setSelectedSection('DMJ')}>DMJ</li>
    <li onClick={() => setSelectedSection('OS')}>OS</li>
    <li onClick={() => setSelectedSection('ASLAB')}>ASLAB</li>
    </ul>
    </nav>
    <header className="main-content">
    {logo && <img src={logo} alt={`${selectedSection} Logo`} className="main-logo" />}
    <h1>{title}</h1>
    <div className="description">
    {description.map((line, i) => (
    <p key={i}>{line}</p>
    ))}
    </div>
    {images && images.length > 0 && (
    <div className="aslab-gallery">
    {images.map((aslab, i) => (
    <div key={i} className="aslab-card">
    <img src={aslab.src} alt={aslab.name} className="aslab-image" />
    <p className="aslab-name">{aslab.name}</p>
    <p className="aslab-role">{aslab.role}</p>
    </div>
    ))}
    </div>
    )}
    </header>
    </div>
  );
}
export default App;