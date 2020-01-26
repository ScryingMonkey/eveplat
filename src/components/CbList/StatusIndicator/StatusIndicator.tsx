import React, { useState } from 'react';
import './StatusIndicator.css';

const StatusIndicator:React.FC<{
    status:string;
}> = props => {
    const [status,setStatus] = useState(props.status);

    const click = () => { 
        setStatus((status === 'Active') ? 'Inactive' : 'Active');
        // TODO: Update status on this item.
    }

    const parseStatusToClass = (status:string):string => {
        switch(status.toLowerCase()){
            case 'cancelled':
                return 'status-red';
            case 'pending':
                return 'status-yellow';
            case 'active':
                return 'status-green';
            case 'inactive':
                return 'status-gray';
            default:
                return 'status-gray';
        }
    }

    return (
        <span 
            id='StatusIndicator' 
            className={"cb-status-indicator " + parseStatusToClass(status)} 
            onClick={() => click() } > 
            {status} 
        </span>
    );
}
export default StatusIndicator;