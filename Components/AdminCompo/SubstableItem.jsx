import React from 'react'

const SubstableItem = ({email,mongoId,date}) => {

    const emaildate= new Date(date);

  return (
    <tr className='bg-white border-b text-left '>
      <th scope='row' className='px-6 py-3 font-medium text-gray-900 whitespace-nowrap'>
        {email?email:"No Email"}
      </th>

      <td className='px-6 py-4  hidden sm:block' >
        {emaildate.toDateString()}

      </td>
      <td  className='px-6 py-4  cursor-pointer'>

        x
      </td>
    </tr>
  )
}

export default SubstableItem
