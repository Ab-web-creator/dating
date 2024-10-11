import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './stories.css'


const MotherAgar = () => {

  const navigate = useNavigate();

  // const [search, setSearch] = useState('')


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleBubbles, setVisibleBubbles] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    const initialVisibility = {};
    const numberOfCases = 6;

    for (let i = 1; i <= numberOfCases; i++) {
      initialVisibility[i] = window.innerWidth > 970;
      //     console.log(initialVisibility[i])
    }
    setVisibleBubbles(initialVisibility);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSupClick = (index) => {
    setVisibleBubbles(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };


  return (

    <div className="minister-home stories">
      <div className="separate_into_two_columns">
        <main className="sep_part1">
          <div className='chapter_heading2'>
            <p> ҲОЖАР ОНАМИЗНИНГ  </p>
            <p>ТАРИХИ</p>
          </div>

          <div className='decor_line'>
            <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
          </div>

          <div className='main_text'>
            <p>
              Ҳазрати Иброҳимнинг аёли Сора ҳеч туғмас эди.
              Шунга у бир куни эрига мисрлик жорияси ҳақида гапириб: «Мана, Оллоҳ менга фарзанд бергани йўқ. Сиз энди Ҳожарнинг ёнига киринг, балки ундан фарзандли бўларман», деди. Расулуллоҳ рози бўлдилар.
            </p>
            <p></p>
          </div>
          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[1] ? 'block' : 'none' }}
              onClick={() => handleSupClick(1)}


            >
              <p>
                <sup>1</sup> Ибн Халдун, «Тарих», 2-жилд, 1-қисм, 36-бет.
              </p>
            </div>
            <p onClick={() => handleSupClick(1)}>
              Шу тариқа, Канъонга кўчиб келганларига ўн йил бўлганда, Сора Биби (р.а.) мисрлик жорияси Ҳожарни эрига хотинликка олиб берди. Ҳеч қанча вақт ўтмай, Ҳожар ҳомила бўлди. Ҳомила бўлганини билгач, кундошига — Сора Бибига паст назар билан қарай бошлади.<sup>1</sup>
            </p>

            <p>
              Шунда Сора онамиз расулуллоҳнинг олдига келиб шикоят қилди: «Ҳаммасига сиз жавобгарсиз! Бу жорияни сизнинг қўйнингизга мен солган эдим. Бўйида бўлдию мени назарига илмай қўйди. Худонинг Ўзи орамизда қазоват қилсин!» деди.
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'
              style={{ display: visibleBubbles[2] ? 'block' : 'none' }}
              onClick={() => handleSupClick(2)}
            >
              <p>
                <sup>2</sup>   Табарийнинг «Тарих» китобида, Ибн Асирнинг «Комил» китоби, Суҳайлийнинг «Равд ул-унуф» китобларида ёзилишича, Сора Биби рашк қилиб аччиқ устида Ҳожар онамизни у ердан қувган.
              </p>
            </div>
            <p onClick={() => handleSupClick(2)}>
              Иброҳим (а.с.) эса: «У ўз мулкинг! Нима десанг де!» деб жавоб қилдилар. Шундан сўнг Сора (р.а.) жориясини қийнай бошлади. Охири Ҳожар онамиз у ердан қочиб кетди.<sup>2</sup>
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>  ХУДОНИНГ ФАРИШТАСИ ҲОЖАР БИБИНИ ЙЎЛДАН ҚАЙТАРАДИ </p>
          </div>

          <div className='main_text'>
            <p>
              Чўлда, Шур йўлидаги чашма бўйига етиб борганида Оллоҳ таолонинг фариштаси Ҳожар (р.а.) га зоҳир бўлди ва:
              «Эй Соранинг жорияси Ҳожар! Қаердан келяпсан, қаерга кетяпсан?» деб сўради. Ҳожар Биби: «Бекамнинг олдидан қочиб келяпман», деб жавоб берди.
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[3] ? 'block' : 'none' }}
              onClick={() => handleSupClick(3)}


            >
              <p>
                <sup>3</sup>  Исмоил деган сўз “Худо эшитади” деган маънони билдиради.
              </p>
            </div>
            <p onClick={() => handleSupClick(3)}>

              «Йўқ! — деди фаришта унга. — Бекангнинг олдига қайт. Айтганини қил!
              Оллоҳ таоло сени қўллайди. Сенинг наслингни шунчалик кўпайтирадики, ҳеч ким сон-саноғига етолмайди.
              Мана, сен ҳомиладорсан, ўғил туғасан. Ўғлингга “Исмоил” деб от қўясан.<sup>3</sup>  Чунки Оллоҳ зорингни эшитди.
              Ўғлинг бургут каби эрксевар ва дашт отидек мустақил инсон бўлади. Ҳамма укаларидан айрилиб алоҳида яшайди. Унинг қўли ҳамманинг ёқасида, ҳамманинг қўли унинг ёқасида бўлади», деди.
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>   ИСМОИЛ (А.С.) НИНГ ТУҒИЛИШИ </p>
          </div>


          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[4] ? 'block' : 'none' }}
              onClick={() => handleSupClick(4)}


            >
              <p>
                <sup>4</sup>         Бу хабар Ибн Халдунда ҳам келтирилган. Яна қаранг: Ибн Қутайба, “Маориф”, 16-бет; Яъқубий, “Тарих”, 1-жилд, 25-бет.
              </p>
            </div>
            <p onClick={() => handleSupClick(4)}>
              Шундай қилиб Ҳожар онамиз Сора Бибининг олдига қайтди. Ой-куни тўлиб расулуллоҳга ўғил туғиб берди. Иброҳим пайғамбар ўғлига Исмоил деб от қўйдилар.


              (Ўшанда у киши саксон олти  ёшда<sup>4</sup> эдилар.)
            </p>
            <p></p>
          </div>




          <article className='nav_arrows'>
            <div className='flex_it space_between'>
              <div style={{ marginLeft: '0px' }} onClick={() => navigate(-1)}>
                <div>
                  <span className='left_arrow_span'>&#8592;</span>
                </div>
                <div className='indicator'>
                  <span className=' bottom_arrows_for_qisas' > орқага қайтиш </span>
                </div>
              </div>

              <div className='central_div'>
                <div>
                  <p>Ҳожар Бибининг ҳикояси</p>
                </div>
              </div>

              <div style={{ marginRight: '0px' }} onClick={() => navigate('/qisas-uzbek/covenant-sign')}>
                <div className='indicator'>
                  <span className=' bottom_arrows_for_qisas' >  Аҳд Аломати</span>
                </div>
                <div>
                  <span className='right_arrow_span' >&#8594;</span>
                </div>
              </div>
            </div>
          </article>
       
        </main>
        <aside>
        </aside>
      </div>
    </div >
  )
}

export default MotherAgar
