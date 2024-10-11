import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './stories.css'


const AbrahamicCovenantConfirmed = () => {

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
    const numberOfCases = 8;

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
            <p>Иброҳим (а.с.) аҳдининг  </p>
            <p>тасдиқланиши</p>
          </div>

          <div className='decor_line'>
            <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[1] ? 'block' : 'none' }}
              onClick={() => handleSupClick(1)}


            >
              <p>
                <sup>1</sup> «Набийлардан аҳдларини ол­ганимизни эсла! Сендан, Нуҳ­дан, Иброҳимдан, Мусо­дан ва Ийсо ибн Марямдан ҳам. Биз улардан салмоқли аҳд олдик» (Аҳзоб сураси 33:7).
              </p>
            </div>

            <p onClick={() => handleSupClick(1)}>
              Оллоҳ таоло кейин Иброҳим (а.с.) га рўё бериб: «Қўрқма Иброҳим, — деди. — Мен сен билан аҳд<sup>1</sup> тузяпман. Сен Менинг ҳимоям остидасан. Оладиган мукофотинг жуда буюк».
            </p>
            <p>
              Расулуллоҳ эса: «Ё раббим Оллоҳ! Мана, ҳали ҳам бефарзандман. Шундай экан, берадиган мукофотингни нима қиламан? — деб сўрадилар. — Ўлсам мол-мулкимни дамашқлик Элъазар оладими? Фарзанд бермадинг. Мерос ҳам хизматкоримга қолади-да».
            </p>
            <p></p>
          </div>
          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[3] ? 'block' : 'none' }}
              onClick={() => handleSupClick(3)}


            >
              <p>
                <sup>2</sup>   Яъқубий, «Тарих», 1-жилд, 25-бет.
              </p>

              <p>
                <sup>3</sup> Қуръони каримда: «Китобда Иброҳимни эсла. Албатта, у сиддиқ ва набий эди», деб ёзилган (Марям сураси, 41-оят). Маъноси аҳдга содиқлик, Оллоҳга вафодорлик. Содиқ одам — вафодор одам, лекин агар дал ҳарфига шадда берилса, «жуда ҳам содиқ», «ниҳоятда содиқ» деган урғу пайдо бўлади.
              </p>
            </div>

            <p onClick={() => handleSupClick(3)}>
              «Йўқ, — деди Оллоҳ (с.в.т). — Мерос хизматкорингга эмас, ўз белингдан чиқадиган ўғлингга тегади», деди.
              Кейин ҳазрати Иброҳимни ташқарига олиб чиқиб: «Осмондаги юлдузларга қара. Санаб охирига етолмайсан. Сенинг наслинг ҳам шу юлдузлардек кўп  бўлади», деди. <sup>2</sup>
            </p>

            <p onClick={() => handleSupClick(3)}>
              (Иброҳим (а.с.) Оллоҳга суянган инсон эдилар. Шу сабабдан Оллоҳ у кишига сиддиқ<sup>3</sup> деган мақом ато этган эди.)
            </p>
            <p> Кейин Оллоҳ у кишига: «Мен мана шу ерни сенга бериш учун сени калдонийлар шаҳридан олиб келганман», деди.</p>
            <p>
              Иброҳим (а.с.) эса: «Ё Раббим, бу ерни менга беришингни қандай биламан?» деб сўрадилар.
            </p>
            <p></p>
          </div>
          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[4] ? 'block' : 'none' }}
              onClick={() => handleSupClick(4)}


            >
              <p>
                <sup>4</sup> «Иброҳимни Рабби калималар ила синаб кўрганда, у уларни батамом адо этганини эсла!» (Бақара сураси 2:124).
              </p>
            </div>
            <p onClick={() => handleSupClick(4)}>
              Оллоҳ таоло: «Менга битта уч яшар ғунажин, битта уч яшар эчки, битта уч яшар қўчқор, битта мусича ва каптар жўжасини олиб кел», деди.<sup>4</sup>
            </p>

            <p>
              Расулуллоҳ бориб, айтилган нарсаларни олиб келдилар. Қушлардан бошқа ҳаммасини ўртасидан кесиб икки бўлак қилдилар ва бўлакларни бир-бирининг қаршисига қўйдилар.
              Кун ботар чоғи қаттиқ уйқуга кетдилар. Тушида ҳамма ёқни қўрқинчли бир қоронғилик чулғаб олган эмиш.
            </p>

          </div>
          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[5] ? 'block' : 'none' }}
              onClick={() => handleSupClick(5)}


            >
              <p>
                <sup>5</sup> Бу аҳдда вақт кўлами жуда ҳам узун даврни ўз ичига олган. Масалан Мусо пайғамбарнинг хизмати бошланишига ҳали 400 йил муддат бор эди. Хуллас, Иброҳим (а.с.) га берилган аҳд узоқ йиллар учун мўлжалланган ва пайғамбарларни бир-бирига боғлайдиган Аҳд эди.
              </p>
            </div>
            <p onClick={() => handleSupClick(5)}>
              Кейин унга Худодан: «Сен узоқ умр кўриб, бу дунёдан тинчгина кўз юмасан, — деган овоз келди. — Авлодларинг эса тўрт юз йил<sup>5</sup>  бегона юртда келгинди бўлиб яшайди. Қулликда жабр-зулм кўради.  Кейин Мен ўша юрт эгаларини жазолаб уларни озодликка олиб чиқаман.  Тўрт наслдан кейин, амўрийлар гуноҳи авжига етгач, улар бу ерга яна қайтиб келишади».
            </p>
            <p> Кун ботиб қоронғи тушгандан сўнг, тутаб турган бир тандир ва ёниб турган бир машъалга ўхшаш нарса кўринди ва кесилган қурбонликлар орасидан ўтди.
              Шу йўсинда Оллоҳ таоло Иброҳим (а.с.) билан аҳд боғлади ва: «Шу ерни сенинг авлодларингга бераман», деб ваъда қилди.
            </p>
          </div>



          <div className='paragraph_heading'>
            <p>  АҲД ҲАҚИДА ТУШУНЧА </p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[6] ? 'block' : 'none' }}
              onClick={() => handleSupClick(6)}


            >
              <p>
                <sup>6</sup> Ҳазрат Суютийнинг “Дур-ул мансур” китобидан:
                <br />    <br />
                «Абу Зарр деди: «Ё Расулаллоҳ, Иброҳим ва Мусонинг саҳифаларида Оллоҳ сизга нозил қилган китобдаги фикрларга ўхшаш жойлар борми?» деб сўрадим.
                <br />
                Шунда Расулуллоҳ (с.а.в.) дедилар: «Эй Абу Зарр, мана бу оятни ўқи-чи:
                <br />
                <span className="boldItalic">“Ҳақиқатан ҳам покланиб, Раббининг исмини зикр этган, солатда юрган киши саодатга эришади. Балки сиз дунё ҳаётини устун кўрарсиз, лекин охират яхшироқ ва боқий. Бу сўзлар аввалги саҳифаларда, Иброҳим ва Мусонинг саҳифаларидадир”</span> (Аъло сураси 14-19 оятлар).
              </p>
            </div>
            <p className='vitalic' onClick={() => handleSupClick(6)}>
              Аҳд ҳақида икки оғиз тушунча берсак. Ўша даврда аҳд деган сўз икки томоннинг ўзаро янги бир муносабат бошлаганини, яъни энди улар бир-бирига бегона эмас, балки яқин шахсларга, вафодор одамларга айланганини билдирган. Шу сабабдан аҳд сўзи қадимий китобларда кўпинча “вафо” сўзи билан бирга келади. Аҳд тушунчаси, демак, бурч ва масъулиятни ўз ичига олади. Худо Иброҳим (а.с.) га: “Мен сен билан аҳд туздим”, дер экан, бунинг маъноси: “Мен ҳамиша сенга содиқ бўламан, берган ваъдаларимни амалга ошираман”, деганидир. Аҳдга кирган одам Оллоҳнинг ваъдаларига, яъни, аҳднинг баракаларига шерик бўлади. Шу ўринда яна бир нарсани айтиб ўтсак: Оллоҳ билан қилинган аҳд фақат бир насл учун эмас (яъни фақат шу одамнинг ўзи учун эмас), балки унинг авлодларига ҳам тегишли бўлган. Шу сабабдан Иброҳим (а.с.): «Менинг фарзандларим йўқ, меросим хизматкоримга қоладими?» деб ҳайрон бўладилар. Лекин Оллоҳ субҳанаҳу ва таоло: «Йўқ, Мен сенга фарзандлар бераман. Мана шу ерларни сенинг авлодларинг мерос қилиб олади», деб марҳамат этади.<sup>6</sup>
            </p>
          </div>


          <div className='paragraph_heading'>
            <p>  АҲД ОРҚАЛИ БЕРИЛГАН ВАЪДАЛАР </p>
          </div>

          <div className='main_text'>
            <p className="vitalic">
              Шундай қилиб Оллоҳ ҳазрати Иброҳимга учта нарсани ваъда қилди. Нималарни?
            </p>
            <div className='div_with_borders'>
              <ul>
                <li className='vitalic'>  ~ авлодлари кўп бўлишини, </li>
                <li className='vitalic'>  ~   ерни унинг авлодлари мерос олишини, </li>
                <li className='vitalic'> ~ ҳамда унинг зуррияти орқали ер юзидаги ҳамма халқларга барака улашишни ваъда берди. </li>
              </ul>
            </div>
            <p className='vitalic'>
              Ҳолбуки, Иброҳим (а.с.) ўшанда бефарзанд бўлиб, Канъон сарҳадида чодирларда яшаб юрган, ўз уйига ҳам эга бўлмаган бир мусофир эдилар.
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
                  <p>Аҳднинг тасдиқланиши</p>
                </div>
              </div>


              <div style={{ marginRight: '0px' }} onClick={() => navigate('/qisas-uzbek/mother-agar')}>
                <div className='indicator'>

                  <span className=' bottom_arrows_for_qisas'>Ҳожар Биби</span>

                </div>
                <div>
                  <span className='right_arrow_span' >&#8594;</span>
                </div>
              </div>

            </div>
          </article>
         
        </main>
        <aside>  </aside>
      </div>
    </div >
  )
}

export default AbrahamicCovenantConfirmed
