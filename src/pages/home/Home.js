import React from 'react'
import './Home.css'
import HomeCard from '../../components/homeComponents/homeCardBox/HomeCard'
import {sellsInfo} from '../../CmsDB'
import Chart from '../../components/chart/Chart'
import NewMembers from '../../components/homeComponents/newMembers/NewMembers'

export default function Home() {
  return (
    <div className='m-3'>
      <HomeCard></HomeCard>
      <br />
      <Chart grid title="Sale Chart" data={sellsInfo} datakey="sale"></Chart>
      <br />
      <NewMembers></NewMembers>
    </div>

  )
}
