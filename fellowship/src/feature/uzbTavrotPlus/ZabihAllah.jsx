import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './stories.css'


const ZabihAllah = () => {

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
    const numberOfCases = 1;

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
            <p> Аҳднинг яна бир бор  </p>
            <p>синалиши</p>
          </div>

          <div className='decor_line'>
            <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[1] ? 'block' : 'none' }}
              onClick={() => handleSupClick(1)}


            >
              <p >
                <sup>1</sup> Ислом уламолари Оллоҳ таоло томонидан қурбонликка буюрилган фарзанд Иброҳим (а.с.) нинг икки ўғлидан қайси бири эканлиги тўғрисида ихтилоф қилганлар. Баъзилари забиҳ Исҳоқ ибн Иброҳим эди, десалар, яна баъзилари, йўқ, забиҳ Исмоил ибн Иброҳим эди, деганлар ва ҳар икки тараф ҳам ўз сўзларининг ростлигига далил сифатида Пайғамбаримиз (с.а.в) дан ҳадислар ривоят қилганлар. Исҳоқни забиҳ дегувчилар қуйидаги ҳадисларни келтирганлар: Ибн Аббос (р.а.) ривоят қиладилар: «Пайғамбаримиз (с.а.в) дан «Биз унинг ўрнига катта бир (қўчқор) сўйишни эваз қилиб бердик» ояти каримаси айтилиб, забиҳнинг кимлиги сўралганда, Пайғамбаримиз (с.а.в): «Забиҳ Исҳоқдир», дедилар. Каъбул Ахбор Абу Ҳурайра (р.а.) га: «Мен сизга Исҳоқ ибн Иброҳим ҳақларида сўзлаб берайинми?» деб сўради. Абу Ҳурайра розилик билдирганларидан кейин Каъбул Ахбор деди: «Иброҳим (а.с.) тушида ўғлини қурбонлик қилаётганини кўргандан кейин, Шайтон ўзига-ўзи: «Агар мен Иброҳим хонадонини ҳозир йўлдан урмасам, ҳеч қачон уролмайман» деди ва таниш бир одам суратига кириб, Иброҳим хонадонига келди. Кўрдики, Иброҳим (а.с.) ўғли Исҳоқни қўлидан етаклаб, сўйиш учун олиб кетаяпти. Шайтон вақтни ғанимат билиб, Соронинг олдига кирди ва унга: «Иброҳим эрта тонгда ўғлини қаерга олиб кетди?» деб сўради. Соро унга: «Бирор иш билан кетгандир», деди. Шайтон: «Бирор иш билан эмас, ўғлини сўйишга олиб кетди. Иброҳим туш кўрган эди, унинг гумонича, тушида Оллоҳ унга шуни буюрган эмиш», деди. Соро бепарво: «Агар Оллоҳ буюрган бўлса, Иброҳим ва ўғли Исҳоқ Раббиларининг амрига итоат қилаётган бўлса, шу яхши-да!» деди. (Ҳадис каттагина, давомини келтирмадик.) Ибн Аббосдан турли санадлар билан ўнлаб ҳадислар ривоят қилинган ва уларнинг ҲАММАСИДА Исҳоқ (а.с.) нинг қурбонликка олиб борилгани айтилган. Ибн Аббос ва Абу Ҳурайродан ташқари, яна Абдуллоҳ ибн Масъуд, Абдуллоҳ ибн Абийд, Ибн Собит, Абу Майсара, Абу Молик, Масруқ ва бошқа саҳобийлардан ҳам Исҳоқ (а.с.) нинг забиҳуллоҳ эканликлари ҳақида ҳадислар ривоят қилинган.
              </p>
            </div>
            <p className='boldItalic'>
              «Албатта, бу очиқ-ойдин синовнинг айни ўзидир» (Вас-Соффот 106).</p>
          </div>


          <div className='paragraph_heading' onClick={() => handleSupClick(1)}>
            <p> ИБРОҲИМ (А.С.) ГА КЕЛГАН ОХИРГИ СИНОВ<sup>1</sup> </p>
          </div>

          <div className='main_text'>
            <p>
              Орадан анча вақт ўтди. Бир куни Худо Иброҳим пайғамбарнинг <span className="vitalic"> аҳдга бўлган садоқатини</span> синамоқчи бўлди: «Иброҳим!»
            </p>
            <p>
              «Лаббай!» деб жавоб бердилар Расулуллоҳ.
            </p>
            <p>
              «Ўғлингни олиб, Мўриё ерига бор, — деди Худо. — Ўша ерда тоғда уни Менга атаб қурбон қил».
            </p>

            <p className="vitalic">
              Фараз қилайлик, сизнинг ҳам жонингиздан ортиқ кўрадиган, кексайганингизда туғилган ўғлингиз бор. Энди тасаввур қилинг, Худо сизга ана шу ўғлингни, йигирма беш йил дуо қилиб, тилаб олган ўғлингни Мен учун қурбон қил, деса, қандай аҳволга тушасиз? Иброҳим (а.с.) қандай аҳволга тушган эканлар?
            </p>

            <p className="vitalic">
              У киши ўғлини жуда жуда яхши кўрар эдилар. «Худо ҳам ўғлимни яхши кўради-ку! Нега уни қурбон қилишни буюрди?» деб отанинг фикрлари паришон эди.
            </p>
            <p className="vitalic">
              Балки Худо уни ўлимдан тирилтирмоқчими? «Худо албатта бу ишга қодир, — деб ишонарди Иброҳим (а.с.). — Агар тирилтирмаса-чи? Унда нима бўлади?»
            </p>
          </div>



          <div className='paragraph_heading'>
            <p> ИТОАТ </p>
          </div>

          <div className='main_text'>
            <p>
              Иброҳим (а.с.) эртасига вақтли туриб, эшагини эгарлади. Қурбонлик куйдириш учун ўтин ёрди-да, хизматкорларидан иккитасини ҳамда ўғлини ўзи билан олиб, Худо айтган жойга қараб йўлга тушди.
            </p>
            <p>
              Сафарнинг учинчи куни, улар бораётган жой узоқдан кўринди.  Шунда расулуллоҳ хизматкорларига: «Сизлар шу ерда кутиб туринглар, биз у ерга бориб, ибодат қилиб, қайтиб келамиз», дедилар ва қурбонлик куйдириш учун ёрган ўтинни ўғлига орқалатиб, ўзлари бўлса чақмоқ билан пичоқни кўтариб, тоққа қараб йўлга тушдилар.
            </p>
            <p>
              «Отажон!» деди ўғли йўлда. «Ҳа болам?» дедилар Оллоҳнинг расули. «Олов ёқиш учун чақмоқ билан ўтинимиз бор, лекин қурбонликка сўйиш учун қўй қайда!?»
            </p>
            <p>
              «Қурбонлик учун қўйни Худонинг Ўзи етказади, ўғлим», дедилар Иброҳим (а.с.).
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>  ХУДОНИНГ ЎЗИ ЕТКАЗАДИ </p>
          </div>


          <div className='main_text'>
            <p className='boldItalic'>
              «Бас, қачонки у ўзи билан (масофага) юрадиган бўлганида: «Эй ўғилчам, мен тушимда сени сўяётганимни кўрмоқдаман, боқиб кўр, нима дейсан?» деди. У: «Эй отажон, сенга амр этилганни бажар, инша Оллоҳ, мени сабр қилгувчилардан топурсан», деди» (Вас-Соффот 102).
            </p>

            <p>
              Буюрилган жойга етиб келганларидан сўнг ҳазрати Иброҳим қурбонгоҳ қилиб, устига ўтин қалади. Кейин ўғлини боғлаб қурбонгоҳга, ўтин устига ётқизди ва — уни сўйиш учун қўлига пичоқ олди.
            </p>
            <p>
              Шунда бирдан осмондан: «Иброҳим! Иброҳим!» деган нидо келди. «Лаббай!» дедилар расулуллоҳ.
              «Болага тегма! Сенинг тақводор эканинг энди Менга аён, чунки ҳатто суюкли ўғлингни Мендан аямадинг».
            </p>
            <p>
              Ҳазрати Иброҳим қарасалар, Худонинг қудратини кўрингки, чакалакзорда шохлари буталарга ўралиб қолган бир қўчқор турган экан. Бориб қўчқорни олиб келдилар ва ўғлининг эвазига сўйиб, қурбонлик маросимини адо этдилар.
            </p>
            <p>
              (Расулуллоҳ кейин бу жойга “Худо етказади” деб от қўядилар. Шунинг учун ҳам, “Ўз тоғида Худо Ўзи етказади”, деган гап халқ орасида мақолга айланган.)
            </p>
          </div>


          <div className='paragraph_heading'>
            <p>  ҚУРБОНЛИКНИ КУЙДИРИШ ҲАҚИДА ИЗОҲ </p>
          </div>


          <div className='main_text'>
            <p className="vitalic">
              Кимдадир, ўша пайтда Худога қилинадиган қурбонликни оловда куйдиришармиди, деган савол туғилиши мумкин. Нега Иброҳим алайҳис-салом қурбонгоҳнинг устига аввал ўтин қаладилар?
            </p>
            <p className="vitalic">
              Бу қурбонлик илоҳий китобларда  <span className="boldItalic"> “ўтда куядиган қурбонлик”  </span> деб аталган (Оли Имрон сураси 183-оятга қаранг). Бу қурбонлик келтирилган пайтда, қурбонлик қилинадиган жонвор тўлалигича Оллоҳга (с.в.т.) тақдим этилган. Гўштнинг бирорта ҳам қисми олиб қолинмаган. Бу эса, қурбонлик келтирувчининг қурбонлик воситасида ўзини тўлалигича Оллоҳнинг иродасига бераётганига ишора эди.
            </p>
          </div>


          <div className='paragraph_heading'>
            <p>
              НИМА ҚИММАТРОҚ: ҚЎЧҚОРМИ Ё ЎҒИЛ?
            </p>
          </div>


          <div className='main_text'>
            <p className="vitalic">
              Ҳазрати Иброҳимнинг ўғли ўлиши керак эди. Лекин Худо унинг эвазига (ўрнига) қўчқор берди. Иброҳим (а.с.) қўчқорни олиб келиб, ўғлининг эвазига сўйдилар.
            </p>

            <p className="vitalic">
              Қуръони каримда шу ҳақда ёзилган бир оят бор: <span className="boldItalic"> “Биз  <span className="vitalic"> (ўғлининг) </span> ўрнига азим бир қурбонликни эваз қилиб бердик”. </span>

              Вас-Соффот сураси, 37:107.
            </p>
            <p className="vitalic">
              Нима деб ўйлайсиз, қайси бири қимматроқ эди: ўғилми ёки қўчқор? Албатта, ўғил! Сиз ўз ўғлингизни мингта қўчқорга ҳам алмаштирмасангиз керак. Унда нега Худо “Биз (ўғлининг) ўрнига Иброҳимга азим бир қурбонликни эваз қилиб бердик” деб айтаяпти?
            </p>

            <p className="vitalic">
              Гап шундаки, Оллоҳ таоло берган бу қўчқор келажакда бериладиган Комил бир Қурбонликнинг рамзи эди. Қандай қурбонлик У? Биз мукаммал эмасмиз. Оллоҳга бўлган итоатимиз мукаммал эмас. Шу сабабдан одамзот Оллоҳ берадиган комил қурбонликка муҳтож. Қурбонлик — бизларнинг ноқис итоатимиз ўрнига бериладиган нарса! Қурбонликсиз аҳднинг баракалари ва ваъдаларидан баҳраманд бўла олмаймиз.
            </p>
          </div>



          <div className='paragraph_heading'>
            <p> «ҲАММА МИЛЛАТЛАР СЕНИНГ ЗУРРИЯТИНГ ОРҚАЛИ БАРАКАГА ЭРИШАДИ» </p>
          </div>


          <div className='main_text'>
            <p>
              Ўшанда Оллоҳ ҳазрати Иброҳимга:
              «Мен Ўз номимни ўртага қўйиб қасам ичаманки, Менга ишонганинг учун, суюкли ўғлингни Мендан аямаганинг учун,
              Мен сенга албатта барака бераман; насл-у насабингни осмондаги юлдузлардек, денгиз бўйидаги қумлардек кўпайтираман.
              Менга итоат этганинг учун ер юзидаги ҳамма миллатларга Мен сенинг зурриятинг орқали барака бераман», деб айтган эди.
            </p>
            <p className="vitalic">
              Бу — махсус барака: келажакда бериладиган нажот баракаси ҳақидаги ваъдадир. Одам (а.с.) нинг гуноҳи туфайли ер лаънатланган бўлса, энди Иброҳим (а.с.) нинг авлодларидан бири ер юзига кечирим олиб келиши керак эди. Лекин бу кечирим аҳд орқали амалга ошади. Аҳдга кирганлар эса жаннатни мерос оладилар. Мўминун сурасида ёзилганидек:  <span className="boldItalic"> «Улар омо­нат­ларига ва аҳдига риоя қил­гувчилардир. Улар на­моз­ларини муҳофаза қи­лув­чи­лардир. Ана ўшалар во­рис бўл­гув­чилардир. Улар Фир­давс­ни мерос олурлар ва унда абадий қолурлар» </span> (23:8-11).
            </p>
          </div>



          <div className='paragraph_heading'>
            <p>  ИБРОҲИМ (А.С.) НИНГ ИМОНИ </p>
          </div>


          <div className='main_text'>
            <p className="vitalic">
              Иброҳим ҳазратлари Оллоҳнинг ваъдаларига ишонар эдилар. Оллоҳ: “Сенинг наслинг ўғлинг орқали давом этади”, деб айтгани учун, у киши ўғлини қурбон қилиш учун олиб бордилар. Чунки Оллоҳга, менинг ўғлимни ўлимдан тирилтиришга қодир, деб қаттиқ ишонар эдилар.
            </p>
            <p className="vitalic">
              Ўз фарзандини ўлимга олиб бориш айтишга осон. Бундай ишга фақат Оллоҳнинг яхшилигига ишонган одамгина журъат этиши мумкин. Оллоҳга таслим бўлиш учун, сиз аввало Унинг яхши эканлигига ишонишингиз керак.
            </p>

            <p className="vitalic">
              Ким Худога яқинлашишни хоҳласа, Худо бор деб ҳамда Худо Худони излаганларга албатта мукофот беради, деб эътиқод қилиши шарт. Худони изланг. Чин қалбдан Худони излаганлар ҳеч қачон Оллоҳнинг раҳматидан бенасиб қолмайди.
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
                  <p>Забиҳуллоҳ қиссаси</p>
                </div>
              </div>


              <div style={{ marginRight: '0px' }} onClick={() => navigate('/qisas-uzbek/isaak')}>
                <div className='indicator'>
                  <span className=' bottom_arrows_for_qisas' >  Исҳоқ (а.с.)</span>
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

export default ZabihAllah
