import React from 'react'
import './NewMembers.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { newMembers } from '../../../CmsDB';

export default function NewMembers() {
    return (
        <div className='newMemberList'>
            <h5>New Members:</h5>
            <ul>
                {
                    newMembers.map(newMember =>
                    (<li key={newMember.id} className='newMember d-flex justify-content-between align-items-center'>
                        <img src="cat.jpg" alt="newMemberAvatar" className='newMemberAvatar' />
                        <div className="newMemberInfo">
                            <p className="userName">{newMember.userName}</p>
                            <p className="userSkill">{newMember.userSkill}</p>
                        </div>
                        <VisibilityIcon className='visibilityIcon'></VisibilityIcon>
                    </li>)
                    )
                }
            </ul>
        </div>
    )
}
