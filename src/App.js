
import './App.css';
import Trainer from "./trainer";
import Provider from './provider';


function App() {
  const data= {
    logo: 'https://education.scruminc.com/wp-content/uploads/2021/04/Marca-ConsultoraBK-color1000x1500.jpg',
    name:'Consultora BK',
    discription:'Ollie rigid face shots, gapers ski bum pow pow rock-ectomy core shot ripper. Core shot epic brain bucket gorby, huckfest white room groomer. Twister butter brain bucket stoked snake bite BB bomb bonk air granny gear twin tip. Chain ring gear jammer glades noodle schwag presta. Skid glades grunt huck. Rip bump laps derailleur air chowder brain bucket, T-bar dope face shots hardtail grab gnar couloir.', link:'sdcdsfdsf', 
    badge:['https://education.scruminc.com/wp-content/uploads/2019/08/ScrumMaster-Badge.png','https://education.scruminc.com/wp-content/uploads/2019/09/AC-Badge-.png','images'],
    url: 'http://papertoilet.com/',
    }
    console.log(data);
  return (
    <div className="App">
        <Trainer/>
        <Trainer/>
        <Provider data={data}/>
        <Trainer/>
        <Trainer/>
        <Trainer/>
        <Trainer/>
        <Trainer/>
        <Trainer/>

        
        <Provider data={data}/>
        
    </div>
  );
}

export default App;
