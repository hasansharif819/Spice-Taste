import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import Messages from './Messages';

const UserMessage = () => {
    const {data: messages, isLoading} = useQuery('messages', () => fetch('http://localhost:5000/message').then(res => res.json()))
    if(isLoading){
        return <Loading />
    }
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr>
                            <th>INDEX</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>CONTACT</th>
                            <th>MESSAGE</th>
                            <th>CHECKED</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            messages.map((mess, index) => <Messages
                                key={mess._id}
                                mess={mess}
                                index={index}
                            ></Messages>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserMessage;