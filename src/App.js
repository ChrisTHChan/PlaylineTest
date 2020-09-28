import React, {useState, useEffect} from 'react';
import './App.css';
import Button from './components/Button.js'
import moneyBag from './assets/icons/money-bag@3x.png'
import bell from './assets/icons/notify-me@3x.png'
import googlePlay from './assets/icons/google-play@3x.png'
import iosApp from './assets/icons/ios-app@3x.png'


import davis from './assets/headshots/davis.png'
import gordon from './assets/headshots/gordon.png'
import james from './assets/headshots/james.png'
import leonard from './assets/headshots/leonard.png'
import lowry from './assets/headshots/lowry.png'
import russell from './assets/headshots/russell.png'
import siakam from './assets/headshots/siakam.png'

function App() {

  const [state, setState] = useState({
    liveTime: '7:30pm'
  })

  const [headshotObject] = useState({
    davis: davis,
    gordon: gordon,
    james: james,
    leonard: leonard,
    lowry: lowry,
    russell: russell,
    siakam: siakam
  })

  const [footerTabs] = useState([
    'about',
    'plb bonus',
    'contact',
    'security',
    'responsible play',
    'privacy',
    'terms'
  ])

  useEffect(() => {
    fetch('https://cors-anywhere.herokuapp.com/https://playline-dev-test.s3-us-west-2.amazonaws.com/playline-test.json')
    .then(response => response.json())
    .then(data => {
      data.players.forEach(player => {
        player.imgSrc = headshotObject[`${player.last_name.toLowerCase()}`]
      })
      setState({...state, players: data})
    })
    .catch(e => {
      console.log(e)
    })
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      <div className='logo'></div>
      <div className='main-box'>
        <div className='progress-bar'></div>
        <div className='uppercase header-font header'>your playline is set</div>
        <div className='uppercase header-font subheader'>come back at {state.liveTime} to track it live</div>
        <div className='text'>Pro Tip: You can manage your PlayLine's until they go live in the Upcoming area</div>
        <div className='playline-box'>
          {
            state.players ? 
            state.players.players.map(player => {
              return (
                <div className='playline-box-item'>
                  <div 
                  style={{
                    backgroundImage: `url(${player.imgSrc})`,
                  }}
                  className='playline-box-item-headshot'></div>
                  <div className='playline-box-item-name'>{player.last_name}</div>
                  <div className='playline-box-item-points'>{player.points}</div>
                  <div className='playline-box-item-PTS'>PTS</div>
                </div>
              )
            })
            :
            <div className='playline-box-item'>Loading Playline...</div>
          }
        </div>
        <div className='button-container'>
          <Button 
          text='notify me' 
          width='45%' 
          height='100%' 
          fontSize='0.75rem' 
          fontWeight='bold' 
          padding='1% 9% 1% 0' 
          justifyContent='flex-end' 
          bgColor='white'
          border='2px solid rgb(240, 240, 240)'
          color='grey'
          bgImage={bell}
           />
          <Button 
          text='Deposit' 
          width='45%' 
          height='100%' 
          fontSize='0.75rem' 
          fontWeight='bold' 
          padding='1% 11.5% 1% 0' 
          justifyContent='flex-end' 
          bgColor='white'
          border='2px solid rgb(240, 240, 240)'
          color='grey'
          bgImage={moneyBag}
           />
        </div>
        <div className='download-prompt'>download the app</div>
        <div className='app-store-icon-container'>
          <div style={{backgroundImage: `url(${iosApp})`}} className='app-store-icon'/>
          <div style={{backgroundImage: `url(${googlePlay})`}} className='app-store-icon'/>
        </div>
      </div>
      <div className='footer'>
          {
            footerTabs.map((tab, i) => {
              if (i === footerTabs.length - 1) {
                return <div style={{border: '0'}} className='footer-tab'>{tab}</div>
              } else {
                return <div className='footer-tab'>{tab}</div>
              }
            })
          }
      </div>
    </div>
  );
}

export default App;
