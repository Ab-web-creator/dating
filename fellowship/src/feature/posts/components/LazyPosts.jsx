import React from 'react'

import './lazyPosts.css';


import user_image from '../../../images/follow.png';
import reply from '../../../images/reply.png';
import heart from '../../../images/heart1.png';
import view from '../../../images/views.png';
import bookmark1 from '../../../images/bookmark1.png';
import shared from '../../../images/shared.png';
import views from '../../../images/views.png';
import share from '../../../images/share.png';
import delete_btn from '../../../images/delete.png';


const LazyPosts = () => {

  return (
    <div className="lazy_post">
      <div className='oval-container'>
        <p>👤</p>
      </div>

      <div className='right_wing'>

        <div className='credentials'>
          <div className='bold'>David Scher</div>
          <div className='searchName'>@David_Sch </div>
          <div className=''>dd-mm-yyyy </div>
        </div>

        <div className='post_content' style={{ marginBottom: '7px' }}  >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quo numquam dignissimos blanditiis rem nemo molestias fugiat soluta? Adipisci qui perspiciatis explicabo. Culpa!
        </div>

        <div className='post_content' style={{ marginBottom: '7px' }}  >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quo numquam dignissimos blanditiis rem nemo molestias fugiat soluta? Adipisci qui perspiciatis explicabo. Culpa!
        </div>



        <div className='network_icons'>

          <button>
            <div>
              <img src={reply} alt="" />
            </div>
          </button>

          <button>
            <div>
              <img src={shared} alt="" />
            </div>
          </button>


          <button>
            <div>
              <img src={heart} alt="" />
            </div>
          </button>


          <button>
            <div>
              <img src={view} alt="" />
            </div>
          </button>


          <button>
            <div>
              <img src={bookmark1} alt="" />
            </div>
          </button>




        </div>
      </div>
    </div>

  )
}


export default LazyPosts
