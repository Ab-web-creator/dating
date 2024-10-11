import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import kamar from '../../images/kamar.png'
import logo from '../../images/KevinImages/ancientWell.jpeg'
import image1 from '../../images/KevinImages/gita.jpg'
 
import './kevinsCourse.css'


const WisdomFromBhagavad = () => {

  const navigate = useNavigate();

  const [visiblePoems, setVisiblePoems] = useState({

  });
  const [visibleVideos, setVisibleVideos] = useState({
    episode1: true,
  });


  const togglePoems = (key) => {
    setVisiblePoems((prevVisiblePoems) => ({
      ...prevVisiblePoems,
      [key]: !prevVisiblePoems[key],
    }));
  };

  const toggleVideo = (key) => {
    setVisibleVideos((prevVisibleVideos) => ({
      ...prevVisibleVideos,
      [key]: !prevVisibleVideos[key],
    }));
  };


  return (
    <div className="minister-home stories kevins_course">
      <div className="separate_into_two_columns">
        <main className="sep_part1">

          <div className='section_headings'>
            <p>
              Section 3: Wisdom for Artists from the Gita
            </p>
          </div>


          <div className='main_text'>
            <p>
              Content, Creativity Practices, and Assignments are all included in the Videos for each Episode
            </p>

            <ul>
              <div className='flex_it' onClick={() => toggleVideo('episode1')}  >
                <li className='episodes_with_videos'  >
                  <span className='bullet_point'>o</span> Episode 1: Where Does Art Start?
                </li>
                <button >
                  {visibleVideos['episode1'] ? '-' : '+'}
                </button>
              </div>

              {visibleVideos['episode1'] && (
                <>
                  <li>
                    <div className="videos_container_container">
                      <div className="video_container">
                        <div className='video_wrapper' >
                          <iframe width="100%" height="315" src="https://www.youtube.com/embed/bchAXuN9Zdo?si=U4R_Nz6E0P8dCc69" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='main_text poetry'>
                      <div className='flex_it'
                        onClick={() => togglePoems('episode1')}
                      >
                        <div className='poetry_heading'>
                          <h3> The Cowboy</h3>
                        </div>
                        <button onClick={togglePoems}>
                          {visiblePoems['episode1'] ? '-' : '+'}
                        </button>
                      </div>

                      {visiblePoems['episode1'] && (
                        <>
                          <div className="poem_div">
                            <p className='MarginTop10px'>
                              He leans against a post on the slow rotting porch
                            </p>
                            <p>
                              Pockets bursting with the load of his fists. </p> <p>
                              He walks towards the car   </p> <p>
                              With his legs bowed out   </p> <p>
                              Like they’re still hugging a saddle.   </p> <p>
                              His boots just touch the dust when he lifts his step,    </p> <p>
                              Dragging a trail behind him.
                            </p>
                            <p className='spacer40px'></p>
                            <p>
                              He startles the car awake,  </p> <p>
                              Moves west, heading to town.  </p> <p>
                              In the fields
                            </p> <p>
                              Cattle are brittle in the drought.
                            </p> <p>
                              He shifts to third
                            </p> <p>
                              And sets his hat swinging on the gear shift.
                            </p>
                            <p className='spacer40px'></p>
                            <p>
                              In town the kids with toys play cowboys
                            </p>
                            <p>
                              And circle the wagons.
                            </p>
                            <p>
                              The ones with wrinkles
                            </p> <p>
                              Remember Autry and Cooper and Rogers
                            </p> <p>
                              And think of nothing now to circle.
                            </p>
                            <p className='spacer40px'></p>
                            <p>
                              Down in the park
                            </p> <p>
                              There’s a statue of a dying man
                            </p> <p>
                              Falling from his horse.
                            </p>
                            <p className='spacer40px'></p>
                            <p>
                              The car returns and stops
                            </p> <p>
                              The old metal pops and pings
                            </p> <p>
                              In the cooling of the day.
                            </p> <p>
                              In the car sits the man
                            </p> <p>
                              And his hat
                            </p> <p>
                              And one bag of groceries tipped over
                            </p> <p>
                              Spilling apples on the floor.</p>
                            <p className='font-size10px'>	&#9400;Copyright Kevin Caldwell</p>
                            <p></p>
                          </div>
                        </>
                      )}

                    </div>
                  </li>
                </>
              )}


              <div className='flex_it' onClick={() => toggleVideo('episode2')}  >
                <li className='episodes_with_videos'  >
                  <span className='bullet_point'>o</span>
                  Episode 2: What is Art? What is an Artist?
                </li>
                <button >
                  {visibleVideos['episode2'] ? '-' : '+'}
                </button>
              </div>

              {visibleVideos['episode2'] && (
                <>
                  <li>
                    <div className="videos_container_container">
                      <div className="video_container">
                        <div className='video_wrapper' >
                          <iframe width="100%" height="315" src="https://www.youtube.com/embed/zAhdprfXo1w?si=-tJ2Dx9VsbM5XCI7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='main_text poetry'>
                      <div className='flex_it'
                        onClick={() => togglePoems('episode2')}
                      >
                        <div className='poetry_heading'>
                          <h3> Inyo</h3>
                        </div>
                        <button onClick={togglePoems}>
                          {visiblePoems['episode2'] ? '-' : '+'}
                        </button>
                      </div>

                      {visiblePoems['episode2'] && (
                        <>
                          <div className="poem_div">
                            <p className='MarginTop10px'>
                              Hey are you listening to me today?
                            </p>
                            <p>
                              Hey will your ears hear what I hear today?
                            </p>
                            <p>
                              I hear what you hear
                            </p>
                            <p>
                              You hear what I hear
                            </p>
                            <p className='spacer20px'> </p>
                            <p>

                              Hey are you seeing what I see today?
                            </p>
                            <p>
                              Hey will you look for what I show today?
                            </p>
                            <p>
                              I see what you see
                            </p>
                            <p>
                              You see what I see
                            </p>
                            <p className='spacer20px'> </p>
                            <p>

                              Hey are you feeling what I feel today?
                            </p>
                            <p>
                              Hey will your heartbeat echo mine today?
                            </p>
                            <p>
                              I feel what you feel
                            </p>
                            <p>
                              You feel what I feel
                            </p>
                            <p className='spacer20px'> </p>
                            <p>
                              Hey are we walking the same trail today?
                            </p>
                            <p>
                              Hey will your feet fit in my shoes today?
                            </p>
                            <p>
                              I walk in your shoes
                            </p>
                            <p>
                              You walk in my shoes
                            </p>
                            <p className='font-size10px'>	&#9400;Copyright Kevin Caldwell</p>
                            <p></p>
                          </div>
                        </>
                      )}

                    </div>
                  </li>
                </>
              )}



              <div className='flex_it' onClick={() => toggleVideo('episode3')}  >
                <li className='episodes_with_videos'  >
                  <span className='bullet_point'>o</span>
                  Episode 3: Something is Wrong
                </li>
                <button >
                  {visibleVideos['episode3'] ? '-' : '+'}
                </button>
              </div>

              {visibleVideos['episode3'] && (
                <>
                  <li>
                    <div className="videos_container_container">
                      <div className="video_container">
                        <div className='video_wrapper' >
                          <iframe width="100%" height="315" src="https://www.youtube.com/embed/mvBLSJWk6HE?si=tKMfor91EGDtLDgg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='main_text poetry'>
                      <div className='flex_it'
                        onClick={() => togglePoems('episode3')}
                      >
                        <div className='poetry_heading'>
                          <h3> St. Patrick </h3>
                        </div>
                        <button onClick={togglePoems}>
                          {visiblePoems['episode3'] ? '-' : '+'}
                        </button>
                      </div>

                      {visiblePoems['episode3'] && (
                        <>
                          <div className="poem_div">
                            <p className='MarginTop10px'>
                              1.
                            </p>
                            <p>
                              You are silent and still

                            </p>
                            <p>
                              In a circle of firelight on the cold moor
                            </p>
                            <p>
                              Hills ripped skinless
                            </p>
                            <p>
                              By the whip tongued wind
                            </p>
                            <p className='spacer40px'></p>
                            <p>

                              Outside the light’s frail rim
                            </p>
                            <p>
                              Thin, scaled muscles slide, ripple
                            </p>
                            <p>
                              And slip from holes into the night
                            </p>
                            <p>
                              Beneath a greying moon
                            </p>
                            <p>
                              Spill over stones
                            </p>
                            <p style={{ marginLeft: '10px' }}>
                              Drool down ledges
                            </p>
                            <p style={{ marginLeft: '20px' }}>
                              Over door steps
                            </p>
                            <p style={{ marginLeft: '30px' }}>
                              Onto fresh swept floors
                            </p>
                            <p className='spacer40px'></p>
                            <p>
                              The mown fields are writhing nimble poison
                            </p>
                            <p>
                              The dust paths between crops
                            </p>
                            <p>
                              Signed in cursive rings
                            </p>
                            <p className='spacer40px'></p>
                            <p>
                              You left the fire
                            </p>
                            <p className='spacer40px'></p>
                            <p>
                              You returned, they were gone
                            </p>
                            <p>
                              The night lay silent around you
                            </p>
                            <p className='spacer40px'></p>
                            <p style={{ marginLeft: '20px' }}>
                              Your bruised heel left you limping
                            </p>
                            <p style={{ marginLeft: '20px' }}>
                              You could still hear, ear pressed to stone,
                            </p>
                            <p style={{ marginLeft: '20px' }}>
                              Faint slithers down deep in the dry river’s veins
                            </p>
                            <p className='spacer40px'></p>
                            <p style={{ marginLeft: '20px' }}>
                              The fire warming your old bones
                            </p>
                            <p style={{ marginLeft: '20px' }}>
                              Lights a sliver of trembling light
                            </p>
                            <p style={{ marginLeft: '20px' }}>
                              On molting skins
                            </p>
                            <p className='spacer40px'></p>
                            <p>
                              2.
                            </p>
                            <p>
                              In my place in this time
                            </p>
                            <p>
                              The green walls grow scales
                            </p>
                            <p>
                              An old road around the mountain
                            </p>
                            <p>
                              Is living, sliming, coiling one gasp tighter
                            </p>
                            <p>
                              The raw core inside
                            </p>
                            <p className='spacer40px'></p>
                            <p>

                              I can hear without strain
                            </p>
                            <p>
                              The scrape and slither
                            </p>
                            <p>
                              Down deep where stone is a burning river
                            </p>
                            <p>
                              In the green earth’s heart
                            </p>
                            <p className='spacer40px'></p>
                            <p>

                              I see you there, back then,
                            </p>
                            <p>
                              Gazing into the fountains of your fire
                            </p>
                            <p>
                              Where the red ashes ripple the air
                            </p>
                            <p>
                              Send flickering waves to lick
                            </p>
                            <p>
                              At the shore of black surrounding you.
                            </p>
                            <p className='spacer40px'></p>
                            <p>

                              Around me is the scrape of scaled bellies
                            </p>
                            <p>
                              Scratching nearer in a fatherless night.
                            </p>
                            <p>
                              I heave cold prayers at a clouded moon
                            </p>
                            <p>
                              And strike, match after match,
                            </p>
                            <p>
                              Damp matches on a rain dripping stone.
                            </p>
                            <p>

                            </p>
                          </div>
                        </>
                      )}

                    </div>
                  </li>
                </>
              )}





              <div className='flex_it' onClick={() => toggleVideo('episode4')}  >
                <li className='episodes_with_videos'  >
                  <span className='bullet_point'>o</span>
                  Episode 4: “Work Without Working”
                </li>
                <button >
                  {visibleVideos['episode4'] ? '-' : '+'}
                </button>
              </div>

              {visibleVideos['episode4'] && (
                <>
                  <li>
                    <div className="videos_container_container">
                      <div className="video_container">
                        <div className='video_wrapper' >
                          <iframe width="100%" height="315" src="https://www.youtube.com/embed/n-r1wjs_Ovk?si=bL7cwZqNkzSb7t2R" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='main_text poetry'>
                      <div className='flex_it'
                        onClick={() => togglePoems('episode4')}
                      >
                        <div className='poetry_heading'>
                          <h3> All You’ve Got Left</h3>
                        </div>
                        <button onClick={togglePoems}>
                          {visiblePoems['episode4'] ? '-' : '+'}
                        </button>
                      </div>

                      {visiblePoems['episode4'] && (
                        <>
                          <div className="poem_div">
                            <p className='MarginTop10px'>
                              Verse
                            </p>
                            <p>
                              Some days you wonder, some days you dream
                            </p>
                            <p>
                              Then you turn all the lights on, and still can’t find a thing
                            </p>
                            <p>
                              When the last door opens for you, and you turn round to find
                            </p>
                            <p>
                              No one has come with you into that good night
                            </p>

                            <p className='spacer40px'></p>
                            <p>
                              Chorus
                            </p>
                            <p>
                              Someday you’ll lay down all you’ve been blessed with
                            </p>
                            <p>
                              And follow your heart ‘cause it’s all you’ve got left
                            </p>
                            <p>
                            </p>
                            <p className='spacer40px'></p>
                            <p>
                              Verse
                            </p>
                            <p>
                              Some houses are haunted some water’s bone dry
                            </p>
                            <p>
                              Some ghosts show their faces some just pass you by
                            </p>
                            <p>
                              The hand that you’re holding is none but your own
                            </p>
                            <p>
                              Turned out no one was calling when you picked up the phone
                            </p>
                            <p className='spacer40px'></p>
                            <p>
                              Chorus
                            </p>
                            <p>
                              Someday you’ll lay down all you’ve been blessed with
                            </p>
                            <p>
                              And follow your heart ‘cause it’s all you’ve got left
                            </p>
                            <p className='spacer40px'></p>
                            <p>
                              Verse
                            </p>
                            <p>
                              Now you stand on the sidewalk of what you used to call home
                            </p>
                            <p>
                              Rooms full of new people makes you feel more alone
                            </p>
                            <p>
                              You look in the window then you look in a mirror
                            </p>
                            <p>
                              And you can’t say for certain were you ever really here
                            </p>
                            <p className='spacer40px'></p>
                            <p>
                              Chorus
                            </p>
                            <p>
                              Someday you’ll lay down all you’ve been blessed with
                            </p>
                            <p>
                              And follow your heart ‘cause it’s all you’ve got left
                            </p>
                            <p className='spacer40px'></p>
                            <p>
                              Someday you’ll lay down all you’ve been blessed with
                            </p>
                            <p>
                              And follow your heart ‘cause it’s all you’ve got left
                            </p>
                            <p className='spacer40px'></p>
                            <p>
                              And follow your heart it’s all you’ll have left
                            </p>
                            <p className='spacer40px'></p>
                          </div>
                        </>
                      )}

                    </div>
                  </li>
                </>
              )}




              <div className='flex_it' onClick={() => toggleVideo('episode5')}  >
                <li className='episodes_with_videos'  >
                  <span className='bullet_point'>o</span>
                  Episode 5: Wells in a Flood
                </li>
                <button >
                  {visibleVideos['episode5'] ? '-' : '+'}
                </button>
              </div>

              {visibleVideos['episode5'] && (
                <>
                  <li>
                    <div className="videos_container_container">
                      <div className="video_container">
                        <div className='video_wrapper' >
                          <iframe width="100%" height="315" src="https://www.youtube.com/embed/mvBLSJWk6HE?si=tKMfor91EGDtLDgg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='main_text poetry'>
                      <div className='flex_it'
                        onClick={() => togglePoems('episode5')}
                      >
                        <div className='poetry_heading'>
                          <h3> Enough For Me </h3>

                        </div>
                        <button onClick={togglePoems}>
                          {visiblePoems['episode5'] ? '-' : '+'}
                        </button>
                      </div>

                      {visiblePoems['episode5'] && (
                        <>
                          <div className="poem_div">
                            <p className='MarginTop10px'>
                              You
                            </p>
                            <p>You</p>
                            <p>
                              Nothing more than you
                            </p>
                            <p>
                              That would be enough for me
                            </p>
                            <p>
                              That would be enough for me
                            </p>
                            <p>
                              You
                            </p>
                            <p className='spacer20px'></p>
                            <p>
                              Your name
                            </p>
                            <p>
                              Your name
                            </p>
                            <p>
                              Nothing but your name
                            </p>
                            <p>
                              That would be enough for me
                            </p>
                            <p>
                              That would be enough for me
                            </p>
                            <p>
                              Your name
                            </p>
                            <p className='spacer20px'></p>
                            <p>
                              One glance
                            </p>
                            <p>
                              One glance
                            </p>
                            <p>
                              Nothing but a glance
                            </p>
                            <p>
                              That would be enough for me
                            </p>
                            <p>
                              That would be enough for me
                            </p>
                            <p>
                              Just one glance
                            </p>
                            <p className='spacer20px'></p>
                            <p>
                              You
                            </p>
                            <p>
                              You
                            </p>
                            <p>
                              Nothing more than you
                            </p>
                            <p>
                              That would be enough for me
                            </p>
                            <p>
                              That would be enough for me
                            </p>
                            <p>
                              You
                            </p>
                            <p className='spacer20px'></p>
                          </div>
                        </>
                      )}

                    </div>
                  </li>
                </>
              )}





              <div className='flex_it' onClick={() => toggleVideo('episode6')}  >
                <li className='episodes_with_videos'  >
                  <span className='bullet_point'>o</span>
                  Episode 6: Beyond Understanding
                </li>
                <button >
                  {visibleVideos['episode6'] ? '-' : '+'}
                </button>
              </div>

              {visibleVideos['episode6'] && (
                <>
                  <li>
                    <div className="videos_container_container">
                      <div className="video_container">
                        <div className='video_wrapper' >
                          <iframe width="100%" height="315" src="https://www.youtube.com/embed/YhkIzhPC1mE?si=sTyqudAaI6oJ7MnR" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                          {/* <p>https://www.youtube.com/embed/X3eVPBwrK1w?si=Tl_N1zS5NI6Kfddw</p> */}



                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='main_text poetry'>
                      <div className='flex_it'
                        onClick={() => togglePoems('episode6')}
                      >
                        <div className='poetry_heading'>
                          <h3> We Shimmer      </h3>

                        </div>
                        <button onClick={togglePoems}>
                          {visiblePoems['episode6'] ? '-' : '+'}
                        </button>
                      </div>

                      {visiblePoems['episode6'] && (
                        <>
                          <div className="poem_div">

                            <p className='MarginTop10px'>
                              (spoken)  </p>
                            <p className='MarginTop10px'>
                              There are auras in the attics
                            </p>
                            <p>
                              There are spirits in the dawn
                            </p>
                            <p>
                              Something’s living out in the black holes
                            </p>
                            <p>
                              The tongue’s of angels are singing in our songs
                            </p>
                            <p>
                              There’s a glowing inside the dry leaves
                            </p>
                            <p>
                              A steady breathing underground
                            </p>
                            <p>
                              There is laughter in the stones of mountains
                            </p>
                            <p>
                              Eyes of light and fire are watching all around


                            </p>
                            <p className='spacer20px'></p>
                            <p>
                              Verse 1
                            </p>
                            <p>
                              I shiver with a longing
                            </p>
                            <p>
                              I’m shaking with a hunger
                            </p>
                            <p>
                              I shimmer in the silence
                            </p>
                            <p>
                              Of the living flaming temple carved deep inside me
                            </p>
                            <p>
                              Beyond the shape of cats in my window sill
                            </p>
                            <p>
                              Beyond the barrow lands and tombstone hills
                            </p>
                            <p>
                              I see a crimson new day fog sent here to find ME
                            </p>


                            <p className='spacer20px'></p>
                            <p>
                              Verse 2
                            </p> <p>
                              I have been fired in a furnace
                            </p> <p>
                              Tempered by cold and burn
                            </p> <p>
                              Hammered out on an anvil
                            </p> <p>
                              My leathered skin a map of every road I’ve traveled
                            </p> <p>
                              I’m stacks of stone in quarries mined
                            </p> <p>
                              Some treasured and others tossed aside
                            </p> <p>
                              Time is grinding every treasure down to gravel
                            </p>
                            <p className='spacer20px'></p>
                            <p>
                              Chorus:
                            </p> <p>
                              There are auras in the attics
                            </p> <p>
                              There are spirits in the dawn
                            </p> <p>
                              Something’s living out in the black holes
                            </p> <p>
                              The tongue’s of angels are singing in our songs
                            </p> <p>
                              There’s a glowing inside the dry leaves
                            </p> <p>
                              A steady breathing underground
                            </p> <p>
                              There is laughter in the stones of mountains
                            </p> <p>
                              Eyes of light and fire are watching all around
                            </p>
                            <p className='spacer20px'></p>
                            <p>
                              Verse 3
                            </p> <p>
                              Sunlight in the shadows
                            </p> <p>
                              Moonbeams in the dawn
                            </p> <p>
                              I see morning’s giddy madness
                            </p> <p>
                              All dressed in flame and dancing in wild abandon
                            </p> <p>
                              I grab my hat and join the line
                            </p> <p>
                              Move my heavy feet to keep the time
                            </p> <p>
                              With the rhythm inside us all, down in deep canyons
                            </p>
                            <p className='spacer20px'></p>
                            <p>
                              Chorus:
                            </p> <p>
                              There are auras in the attics
                            </p> <p>
                              There are spirits in the dawn
                            </p> <p>
                              Something’s living out in the black holes
                            </p> <p>
                              The tongue’s of angels are singing in our songs
                            </p> <p>
                              There’s a glowing inside the dry leaves
                            </p> <p>
                              A steady breathing underground
                            </p> <p>
                              There is laughter in the stones of mountains
                            </p> <p>
                              Eyes of light and fire are watching all around

                            </p>
                            <p className='spacer20px'></p>
                            <p>Watch as we shimmer in all that shimmers
                            </p> <p>
                              In the shimmering we all shimmer
                            </p> <p>
                              All is shimmering and we shimmer
                            </p> <p>
                              In the shimmering we are shimmering
                            </p> <p>
                              We shimmer
                            </p>
                            <p className='spacer20px'></p>
                            <p>(reading)</p>
                            <p className='spacer20px'></p>
                            <p>
                              You shimmer in our shimmering
                            </p> <p>
                              We shimmer in Your shimmering
                            </p> <p>
                              In all that shimmers You are shimmering
                            </p> <p>
                              You shimmer in our shimmering
                            </p> <p>
                              We shimmer
                            </p>
                            <p className='spacer20px'></p>
                          </div>
                        </>
                      )}

                    </div>
                  </li>
                </>
              )}




              <div className='flex_it' onClick={() => toggleVideo('episode7')}  >
                <li className='episodes_with_videos'  >
                  <span className='bullet_point'>o</span>
                  Episode 7: Playful Joy
                </li>
                <button >
                  {visibleVideos['episode7'] ? '-' : '+'}
                </button>
              </div>

              {visibleVideos['episode7'] && (
                <>
                  <li>
                    <div className="videos_container_container">
                      <div className="video_container">
                        <div className='video_wrapper' >
                          <iframe width="100%" height="315" src="https://www.youtube.com/embed/mvBLSJWk6HE?si=tKMfor91EGDtLDgg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className='main_text poetry'>
                      <div className='flex_it'
                        onClick={() => togglePoems('episode7')}
                      >
                        <div className='poetry_heading'>
                          <h3> A Boy and a Beagle</h3>
                        </div>
                        <button onClick={togglePoems}>
                          {visiblePoems['episode7'] ? '-' : '+'}
                        </button>
                      </div>

                      {visiblePoems['episode7'] && (
                        <>
                          <div className="poem_div">
                            <p className='MarginTop10px'>
                              The sticky
                            </p>
                            <p>
                              stubby
                            </p>
                            <p>
                              little boy
                            </p>
                            <p>
                              pulls the wagon
                            </p>
                            <p>
                              in stops
                            </p>
                            <p>
                              and starts.
                            </p>
                            <p className='spacer20px'></p>
                            <p>The old beagle
                            </p>
                            <p>
                              in the back
                            </p>
                            <p>
                              is patient.
                            </p>
                            <p className='spacer20px'></p>
                          </div>
                        </>
                      )}

                    </div>
                  </li>
                </>
              )}

            </ul>
            <p></p>
          </div>

          <div className='spacer20px'></div>

          <div className='main_text visual_art_appreciation'>
            <div className="spacer20px"></div>
            <p>
              Assignment:
            </p>
            <ul className='visual_art_appreciation'>
              <li className=''> <span className='bullet_point'>o</span>
                {/* The Creativity Cultivation Practice as explained in the Lecture Video */}

                There are Creativity Cultivation Prompts described in Each Lecture
              </li>

            </ul>
            <p></p>
          </div>

          <div className='spacer20px'></div>

          <div className='main_text visual_art_appreciation'>
            <p >
              Virtual Art Appreciation
            </p>
            <ul>
              <li className='episodes_with_videos'> <span className='bullet_point'>o</span>
                A live sharing of the artwork each student creates during this Session
              </li>
              <li> <span className='bullet_point'>o</span>
                Day and Time: To Be Determined              </li>
              <li> <span className='bullet_point'>o</span>
                Zoom Link will be provided
              </li>

              <li className=''> <span className='bullet_point'>o</span>
                Kevin's Creative Reflections from the Gita Episodes
              </li>

            </ul>
            <p></p>
          </div>

          <article className='nav_arrows'>
            <div className='flex_it space_between'>
              <div style={{ marginLeft: '0px' }}
              // onClick={() => navigate('/qisas-uzbek/?????')}
              >
                <div>
                  <span className='left_arrow_span'>&#8592;</span>
                </div>
                <div className='indicator'>
                  <span className=' bottom_arrows_for_qisas' > go back </span>
                </div>
              </div>

              <div className='central_div'>
                <div>
                  <p>Wisdom from Gita</p>
                </div>
              </div>

              <div style={{ marginRight: '0px' }}
              // onClick={() => navigate('/qisas-uzbek/creation-of-world')}
              >
                <div className='indicator'>
                  <span className=' bottom_arrows_for_qisas'>next page</span>
                </div>
                <div>
                  <span className='right_arrow_span' >&#8594;</span>
                </div>
              </div>
            </div>

          </article>
         
        </main>
        <aside>
          <div className='side_p'>
            <p>
              The Gita for Artists:
              In these 7 Episodes we explore the origins and nature of creativity and humanity through selected portions of the Bhagavad Gita, the divine song, which portrays and extended conversation between Arjuna and Krishna
            </p>
            <p>For artists, the Gita provides wisdom related to what inspires creativity, who we are as artists, addressing the complex motivations for creating and sharing our art, and the mystery of knowing and experiencing “reality”.</p>
            <p>(Arjuna’s Vision of Krishna)</p>
          </div>
          <div className='sideImage'>
            <img src={image1} alt="" />
          </div>

        </aside>
      </div >
    </div >
  )
}

export default WisdomFromBhagavad