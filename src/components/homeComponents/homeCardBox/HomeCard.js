import React from 'react'
import './HomeCard.css'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { ArrowDownward, ArrowUpward } from '@mui/icons-material'

export default function HomeCard() {
  return (
    <div className='d-flex flex-column flex-md-row justify-content-between justify-content-xxl-evenly'>
      <div className="home-card-first p-2 d-flex flex-column justify-content-center">
        <span className="card-top fs-5">Revanue</span>
        <div className="card-middle d-flex my-2">
          <span className="price me-3 fs-4">$2,450</span>
          <div className="d-flex align-items-center">
            <span className='me-1'>-11.4</span>
            <ArrowDownward className='text-danger'></ArrowDownward>
          </div>
        </div>
        <span className='card-bottom'>Compared to last month</span>
      </div>

      <div className="home-card-first p-2 d-flex flex-column justify-content-center my-3 my-md-0">
        <span className="card-top fs-5">Sales</span>
        <div className="card-middle d-flex my-2">
          <span className="price me-3 fs-4">$4,415</span>
          <div className="d-flex align-items-center">
            <span className='me-1'>-2.6</span>
            <ArrowDownward className='text-danger'></ArrowDownward>
          </div>
        </div>
        <span className='card-bottom'>Compared to last month</span>
      </div>

      <div className="home-card-first p-2 d-flex flex-column justify-content-center">
        <span className="card-top fs-5">Cost</span>
        <div className="card-middle d-flex my-2">
          <span className="price me-3 fs-4">$2,220</span>
          <div className="d-flex align-items-center">
            <span className='me-1'>+6.1</span>
            <ArrowUpward className='text-success'></ArrowUpward>
          </div>
        </div>
        <span className='card-bottom'>Compared to last month</span>
      </div>
    </div>
  )
}
