import React from 'react'
import { WhereWeGoContainer, WhereWeGoElements } from './WhereWeGo.styled'
import VoltaImage from '../../../assets/images/afajato.jpg';
import CentralImage from '../../../assets/images/central.jpg';
import GreaterImage from '../../../assets/images/greater_accra.jpg';
import EasternImage from '../../../assets/images/eastern.jpg';
import DestinationCard from '../../Cards/DestinationCard';



function WhereWeGo() {
  const destinationInfo=[
    {name:'Volta Region', src:VoltaImage, itenary:'See the itenary', icon:'>>'},
    {name:'Central Region', src:CentralImage, itenary:'See the itenary', icon:'>>'},
    {name:'Greater Accra', src:GreaterImage, itenary:'See the itenary', icon:'>>'},
    {name:'Eastern Region', src:EasternImage, itenary:'See the itenary', icon:'>>'},
    {name:'Volta Region', src:VoltaImage, itenary:'See the itenary', icon:'>>'},
    {name:'Central Region', src:CentralImage, itenary:'See the itenary', icon:'>>'},
    {name:'Greater Accra', src:GreaterImage, itenary:'See the itenary', icon:'>>'},
    {name:'Eastern Region', src:EasternImage, itenary:'See the itenary', icon:'>>'},
]

  return (
    <WhereWeGoContainer>
        <h3>WhereWeGo</h3>
        <WhereWeGoElements>
          {destinationInfo.map(({name, src, itenary, icon},index)=>(
            <DestinationCard name={name} src={src} itenary={itenary} icon={icon}/>
          ))}
        </WhereWeGoElements>
    </WhereWeGoContainer>
  )
}

export default WhereWeGo