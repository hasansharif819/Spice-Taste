import React from 'react';

const Messages = ({mess, index}) => {
    const {name, email, img, contact, message} = mess;
    return (
        <tr>
        <th>
          <label>
            {index + 1}
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div>
              <div className="font-bold">{name}</div>
            </div>
          </div>
        </td>
        <td>
          {email}
        </td>
        <td>
        <span className="badge bg-red-900 badge-lg">{contact}</span>

        </td>
        <th>
            <p>{message}</p>
        </th>
        <th>
        <input type="checkbox" className="checkbox" />
        </th>
      </tr>
    );
};

export default Messages;