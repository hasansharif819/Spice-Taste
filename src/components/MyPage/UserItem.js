import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import {useQuery} from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import SingleItem from './SingleItem';

const UserItem = () => {
    const [user] = useAuthState(auth);
    
    const {data:items, isLoading, refetch} = useQuery('items', () => fetch(`https://boiling-coast-23133.herokuapp.com/myitem?email=${user.email}`).then(res => res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto w-full">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>NAME</th>
                            <th>EMAIL & QUANTITY</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items?.map((item, index) => <SingleItem
                                key={item._id}
                                item={item}
                                index={index}
                                refetch={refetch}
                            ></SingleItem>)
                        }
                    </tbody>
                </table>
            </div>
    );
};

export default UserItem;