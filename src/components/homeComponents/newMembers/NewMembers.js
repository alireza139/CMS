import React from 'react'
import './NewMembers.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { newMembers } from '../../../CmsDB';

export default function NewMembers() {
    return (
        <div className='newMemberList px-2'>
            <h5>New Members:</h5>
            <ul className='p-0'>
                {
                    newMembers.map(newMember =>
                    (<li key={newMember.id} className='newMember d-flex justify-content-between align-items-center'>
                        <div className='position-relative'>
                            <img src="cat.jpg" alt="newMemberAvatar" className='newMemberAvatar' />
                            <div className={`position-absolute ${newMember.isActive ? "user-status-online" : "user-status-offline"}`}></div>
                        </div>
                        <div className="newMemberInfo">
                            <p className="userName fs-6">{newMember.userName}</p>
                            <p className="userSkill">{newMember.userSkill}</p>
                        </div>
                        <VisibilityIcon className='visibilityIcon fs-5'></VisibilityIcon>
                    </li>)
                    )
                }
            </ul>
        </div>
    )
}
