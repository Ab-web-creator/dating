import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './stories.css'
import kamar from '../../images/kamar.png'
import Adam_svg from '../../images/adam.svg'


const Adam = () => {

  const navigate = useNavigate();


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleBubbles, setVisibleBubbles] = useState({});

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    const initialVisibility = {};
    const numberOfCases = 7;

    for (let i = 1; i <= numberOfCases; i++) {
      initialVisibility[i] = window.innerWidth > 970;
      // console.log(initialVisibility[i])
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
            <p> Дунёнинг яратилиш </p>
            <p>тарихи</p>
          </div>

          <div className='decor_line'>
            <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
          </div>

          <div className='main_text'>
            <p className='vitalic'>
              Оллоҳ таоло бутун оламни олти кунда яратган. Қоф сурасида:   <span className='boldItalic'>«Осмонлару ерни ва уларнинг орасидаги нарсаларни олти кунда яратдик», </span>  деган оят бор (50:38).
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'
              style={{ display: visibleBubbles[1] ? 'block' : 'none' }}
              onClick={() => handleSupClick(1)}
            >
              <p>
                <sup>1</sup> Қуръонда: «(Оллоҳ) шундай зотки сизлар учун ердаги барча нарсаларни яратди», деб ёзилган (Бақара 29).
              </p>
            </div>

            <p className='vitalic'
              onClick={() => handleSupClick(1)}
            >
              Биринчи икки кун ичида Оллоҳ нурни зулматдан ва ерни осмонлардан ажратади. Қолган тўрт кун ичида ерга жило беради: Бани Одам учун<sup>1</sup>  тоғларни, ўсимликлар дунёсини ва ҳайвонот оламини вужудга келтиради. </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'
              style={{ display: visibleBubbles[2] ? 'block' : 'none' }}
              onClick={() => handleSupClick(2)}
            >
              <p>
                <sup>2</sup>  Пайғамбар (с.а.в.) нинг ҳам: «Оллоҳ Одамни Ўз суратида яратди», деб айтган гаплари бор (Бухорий [6227], Муслим [6212]).
              </p>
            </div>
            <p className='vitalic'
              onClick={() => handleSupClick(2)}
            >
              Охирида эса яратилган махлуқот ичида энг гўзали бўлмиш инсонни — биринчи ота-энамизни яратган. Қуръон: <span className='boldItalic'> «Батаҳқиқ, Биз инсонни энг яхши суратда яратдик» <sup>2</sup>,  </span> деб айтади (Ат-Тийн сураси). Яна бир оятда:  <span className='boldItalic'> «Биз Бани Одамни азизу мукаррам қилдик... Ўзимиз яратган кўп нарсалардан афзал қилиб яратдик»</span> дейди (Исро 17:70).
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>  ҚАЙҒУ ЙЎҚ ДУНЁ </p>
          </div>

          <div className='main_text'>
            <p>
              Оллоҳ таоло нимаики яратган бўлса, ҳаммаси яхши эди. <span className='vitalic'> У  <span className='boldItalic'>«ҳар бир нарсани гўзал қилиб яратган»</span> зот (Қуръон карим 32:7).</span>
            </p>
            <p></p>
          </div>
          <div className='main_text'>

            <div className='speech-bubble'
              style={{ display: visibleBubbles[3] ? 'block' : 'none' }}
              onClick={() => handleSupClick(3)}
            >
              <p>
                <sup>3</sup>  Бақара сурасининг 117-оятида “кун-фа-якун” деган ибора бор. Ўзбек тилига таржима қилсак: “Бўл деса, бўлади”, деган маънони беради. Оллоҳ дунёдаги махлуқотни “Бўл!” деган Сўзи билан яратган.
              </p>
            </div>

            <p onClick={() => handleSupClick(3)}
            >
              Унинг “Бўлсин!”<sup>3</sup> деган буйруғи билан ер юзида ўсимликлар, <span className='vitalic'>жаннати</span> мева берадиган дарахтлар ўсиб чиқди.   “Бўлсин!” деган буйруғи билан сувларда балиқлар, ҳар хил денгиз жониворлари пайдо бўлди.
            </p>
            <p>
              “Бўлсин!” деган буйруғи билан ҳар хил ҳайвонлар, ранго-ранг қушлар вужудга келди. <span className='vitalic'> Ҳар бир нарсада Оллоҳнинг баракаси кўриниб турган эди.</span>
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'
              style={{ display: visibleBubbles[4] ? 'block' : 'none' }}
              onClick={() => handleSupClick(4)}
            >
              <p>
                <sup>4</sup> Инсон нима учун яралган? Бу савол қадим замонлардан бери олимлар орасида баҳсларга сабаб бўлиб келмоқда. Аз-Зориёт сурасида инсонни Менга ибодат қилиши учун яратдим, деган сўзлар бор (51:56). Ибодат сўзининг маъноси сиғиниш ва хизмат қилиш демакдир. Бу ҳам инсоннинг яратилган жонзодлар ичида энг улуғи эканига бир далилдир. Оллоҳ (с.в.т.) Одам Ато ва Момо Ҳаввони: «Мен билан муножатда бўлсин», деган мақсадда яратган эди.
              </p> </div>
            <p onClick={() => handleSupClick(4)}
            >
              Ерда ҳали касаллик, ўлим, ташвиш ёки қайғу деган нарсалар йўқ эди.
              Боғ турли-туман мева берадиган дарахтлар билан тўла, Одам (а.с.) ҳам, Момо Ҳавво ҳам (р.а.) Оллоҳнинг ҳузурида шоду хуррам ҳаёт кечирар эдилар. Ёмонлик нима эканини улар ҳали билмас эдилар. <sup>4</sup>
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>  ҲАЗРАТИ ОДАМ — ОЛЛОҲНИНГ ЕР ЮЗИДАГИ ХАЛИФАСИ</p>
          </div>

          <div className='main_text'>
            <p onClick={() => handleSupClick(5)}
            >
              Оллоҳ субҳанаҳу ва таоло биринчи ота-онамизни яратганда уларни баракалаб, бундоқ деб амр қилган экан: «Самарали бўлинглар. Кўпайиб ер юзини тўлдиринглар. Мана шу ерни Мен сизларга бердим. Балиқлар, қушлар, ерда яшаётган ҳамма жониворлар устидан ҳукмронлик қилинглар.  Мана, Мен сизларга озуқа қилиб ҳамма донли ўсимликларни, мевасида данаги бор ҳар хил дарахтларни бердим».<sup>5</sup>
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'
              style={{ display: visibleBubbles[5] ? 'block' : 'none' }}
              onClick={() => handleSupClick(5)}
            >

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <p style={{ width: '60%', }}> <sup>5</sup> «Батаҳқиқ, Биз Одам билан аҳдлашган эдик...» </p>
                <p className='' style={{ width: '40%', direction: 'rtl' }}>
                  وَلَقَدْ عَهِدْنَآ إِلَىٰٓ ءَادَمَ مِن قَبْلُ
                </p>
              </div>

              <p style={{ marginTop: '7px' }}> Тоҳо сураси 115-оят. Оллоҳ таолонинг инсоният би­лан қилган биринчи аҳди мана шу эди.</p>
            </div>

            <p className='vitalic'>Демак ўша пайтда ҳазрати Одамга халифалик унвони, яъни бутун ер юзи устидан ҳукмронлик қилиш ҳуқуқи берилган. Қуръонда ёзилишича, Оллоҳ Одам (а.с.) ни яратишдан олдин фаришталарга: <span className='boldItalic'> «Мен ер юзида халифа қилмоқчиман»,</span>  деб хабар берган экан (Бақара сураси, 30-оят).
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>  ИБЛИС ҲАҚИДА МАЪЛУМОТ </p>
          </div>


          <div className='main_text'>
            <p className='vitalic'>
              Шундан кейин Оллоҳ таоло фаришталарга Одам (а.с.) га сажда қилинглар, деб амр қилади. Қуръони каримда бундай деб ёзилган:  <span className='boldItalic'> «Батаҳқиқ, Биз сизларни яратдик, кейин сизларга суврат бердик. Сўнгра фаришталарга: «Одамга сажда қилинглар», дедик. Улар сажда қилдилар. Магар Иблис сажда қилувчилардан бўлмади».</span>
            </p>
            <p></p>
          </div>
          <div className='main_text'>

            <div className='speech-bubble'
              style={{ display: visibleBubbles[6] ? 'block' : 'none' }}
              onClick={() => handleSupClick(6)}
            > <p>
                <sup>6</sup> Иблис жин тоифасидан эди (Каҳф сураси 50-оят). Ҳайдалишдан аввал у малаклар ёнида Оллоҳга шу қадар қуюқ ибодатлар қилар экан, ҳеч ким у қадар ибодат қила олмаган. Шундай бўлса ҳам, бу ибодатлар ундаги кибрни йўқ қилолмаган экан.
              </p>  </div>

            <p className='vitalic' onClick={() => handleSupClick(6)}
            >
              Оллоҳ кейин Иблисдан: «Нега сажда қилмадинг?» деб сўраганида Иблис:<sup>6</sup>  <span className='boldItalic'> «Мен (Одамдан) яхшироқман, чунки Сен мени ўтдан яратдинг, уни эса лойдан»,</span>  деб жавоб беради (Аъроф сураси 11-12 оятлар).
            </p>

            <p className='vitalic'>
              «(Оллоҳ) <span className='boldItalic'> деди: «Бас, ундан туш! Сенга унда мутакаббирлик қилиб юриш йўқ. Бас, чиқ! Албатта, сен хору зор бўлгувчилардансан», деди.</span> (Иблис эса): <span className='boldItalic'>«Менга улар қайта тириладиган кунгача муҳлат бер», деди. У зот: «Муҳлат бердим», деди.</span> (Иблис): <span className='boldItalic'> «Мени иғвога учирганинг сабабли, албатта, мен уларни Тўғри Йўлингда тўсиб ўтираман. Сўнгра уларнинг олдиларидан, орқаларидан, ўнг томонларидан ва чап томонларидан келаман. Ва уларнинг кўпларини шукр қилувчи ҳолда топмассан», деди»</span> (Аъроф сураси 13-17).
            </p>
            <p className='vitalic'>

              Шу тариқа Иблис одамзотнинг душманига айланади.
            </p>
            <p></p>
          </div>


          <article className='nav_arrows'>
            <div className='flex_it space_between'>
              <div style={{ marginLeft: '0px' }}
                onClick={() => navigate('/qisas-uzbek/adam')} >
                <div>
                  <span className='left_arrow_span'>&#8592;</span>
                </div>

                <div className='indicator'>
                  <span className=' bottom_arrows_for_qisas' > орқага қайтиш </span>
                </div>
              </div>

              <div className='central_div'>
                <div>
                  <p>Dunyoning aratilishi</p>
                </div>
              </div>

              <div style={{ marginRight: '0px' }} onClick={() => navigate('/qisas-uzbek/the-fall')}>
                <div className='indicator'>

                  <span className=' bottom_arrows_for_qisas' > Ҳайдалиш </span>
                </div>
                <div>
                  <span className='right_arrow_span' >&#8594;</span>
                </div>
              </div>
            </div>
          </article>

          {/* 
          <div className='html_symbols'>
            <p className=''>
              <p>  &#9760;  &#9872;  &#9990; &#9993; &#9881; &#9874; &#9850; &#9836;</p>
              &#9832; &#9789; &#9790; &#9752; &#9756;  &#9758; &#9752; &#9743; &#9734; &#9733; &#9737; &#9998; &#10003; &#10004; &#10005; &#10019; &#10017; &#10142; &#10143;  &#10148;  &#10146;  &#10227; &#10606;
            </p>
            <p> &#10025; &#10043; &#10044; &#10052; &#10056; &#10070; &#10084; </p>
            <p>&#8364;  &#65284; &#8858; &#8861; &#167; &#169; &#182; &#183; &#8213;</p>
          </div> */}
         
        </main>

        <aside>
          {/* <div className='bism'><p>
            t
            Q
            E
            y
            u
            I
            a
            d
            Z
          </p>
          </div> */}
          {/* <div className='html_symbols'>
            <p className=''>
              <p>  &#9760;  &#9872;  &#9990; &#9993; &#9881; &#9874; &#9850; &#9836;</p>
              &#9832; &#9789; &#9790; &#9752; &#9756;  &#9758; &#9752; &#9743; &#9734; &#9733; &#9737; &#9998; &#10003; &#10004; &#10005; &#10019; &#10017; &#10142; &#10143;  &#10148;  &#10146;  &#10227; &#10606;
            </p>
            <p> &#10025; &#10043; &#10044; &#10052; &#10056; &#10070; &#10084; </p>
            <p>&#8364;  &#65284; &#8858; &#8861; &#167; &#169; &#182; &#183; &#8213;</p>
          </div> */}
        </aside>
      </div>
    </div >
  )
}

export default Adam