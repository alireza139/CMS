import React from 'react'
import './LatestTransAction.css'
import { transActions } from '../../../CmsDB'


export default function LatestTransAction() {
    const Btn = ({ status }) => {
        return <button className={`latestTransAction-btn latestTransAction-${status}-btn`}>{status}</button>
    }

    return (
        <div className='latestTransActionBox w-100 mt-3 mt-md-0 ms-md-3'>
            <h5>Latest TransAction:</h5>
            <table className='latestTransActionTable w-100'>
                <tr>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th className='hidden-in-mobile'>Status</th>
                </tr>
                {
                    transActions.map(item => (
                        <tr>
                            <td><img src="./cat.jpg" alt="avatar customer" className={`customer-avatar customer-${item.status}-avatar`} /></td>
                            <td>{item.date}</td>
                            <td>{item.amount}$</td>
                            <td className='hidden-in-mobile'><Btn status={item.status}></Btn></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
