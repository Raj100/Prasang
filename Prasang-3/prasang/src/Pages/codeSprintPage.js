import React from 'react'
// import '../App.css'
import Navbar from '../Components/Navbar/Navbar'
import ElectricButton from '../Components/ElectricButton'

const codeSprintPage = () => {
  return (
    <div className='Events-main'>
      <Navbar></Navbar>
      <div className='Events-info'>
      <h1>Code Sprint</h1>
      <div className='Events-info-main'>
        <div className='Events-info-navigation'>
          <ul>
            <li>Rules</li>
            <li>Prize</li>
          </ul>
        </div>
        <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure cum soluta perspiciatis dolore voluptate saepe ipsam, sit, maiores earum consequuntur nulla hic. Labore autem at iure cumque illo voluptatum debitis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quidem similique fugiat nihil vitae ex reiciendis quaerat perferendis facilis labore totam delectus distinctio repellendus, cumque quis tempore placeat quam recusandae cum exercitationem esse. Accusantium voluptate dicta consequatur ea eius itaque. Impedit ex ut aspernatur eligendi, perspiciatis vero et minima voluptates provident velit laborum nemo maxime aliquam repellat? Sed ipsa dolore laborum fugiat assumenda iusto exercitationem debitis. Dolor explicabo alias quae, reiciendis sint molestias veritatis nostrum itaque pariatur facilis temporibus nemo.</p>
        </div>
        <div className="Register">
        <ElectricButton className="Register"></ElectricButton>
        </div>
      </div>
      </div>
    </div>
  )
}

export default codeSprintPage

