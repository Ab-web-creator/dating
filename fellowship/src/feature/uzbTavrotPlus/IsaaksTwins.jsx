import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './stories.css'

const IsaaksTwins = () => {

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
    const numberOfCases = 24;

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

            <div className='title_of_chapter'>
              <p> Исҳоқ (а.с.) нинг эгизак  </p>
              <p>фарзандлари</p>
            </div>
          </div>


          <div className='decor_line'>
            <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              ИБРОҲИМ (А.С.) НИНГ ВАФОТИ
            </p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[1] ? 'block' : 'none' }}
              onClick={() => handleSupClick(1)}


            >
              <p>
                <sup>1</sup>     Табарий ва Абулфидо ("Ал-бидоя ван-ниҳоя", 1-жилд, 174-бет.)
              </p>
            </div>

            <p onClick={() => handleSupClick(1)}>
              Ҳазрати Иброҳим бир юз етмиш беш ёшга<sup>1</sup>  чиқиб оламдан ўтдилар.
              Худо айтганидек, узоқ умр кўриб, тинчгина бу дунёдан кўз юмдилар.
              Ўғиллари Исмоил ва Исҳоқ (а.с.) у кишини ҳитий Эфрун ибни Сўҳарнинг даласидаги, Мумарраҳ яқинидаги Макфала ғорига,
              Соро Бибининг ёнига қўйдилар. Иброҳим (а.с.) бу ерни ҳитийлардан сотиб олган эди.
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              Иброҳим (а.с.) қандай ҳаёт кечирганлар?
            </p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[3] ? 'block' : 'none' }}
              onClick={() => handleSupClick(3)}


            >
              <p>
                <sup>2</sup>    Ҳадислардан бирида бундай деб ёзилган: «Пайғамбаримиз (с.а.в.) Иброҳим (а.с.) билан учрашганларида Оллоҳнинг дўсти бўлмиш Иброҳим (а.с.) пайғамбаримиз (с.а.в.) га: «Умматингга мендан салом айт. Уларга амр этки жаннатга ниҳол экишни кўпайтирсинлар, — дейдилар. — Чунки жаннатнинг тупроғи гўзал, суви ширин». Пайғамбаримиз (с.а.в.): «Жаннатга экилажак ниҳол нимадир?» деб сўрадилар. «Жаннатга экиладиган ниҳол “Субҳоналлоҳу, валҳамдулиллоҳи вала илаҳа иллаллоҳу Валлоҳу акбар. Ла ҳавла ва ла қуввата илла биллаҳ” дир», дедилар Иброҳим алайҳиссалом» (Термизий. “Сунaн”, 5-жилд, 510-бет; Табароний, “Муъжамус сағир”, 2-жилд, 196-бет. Аҳмад бин Ҳанбал, “Муснад”, 5-жилд 418-бет; Суютий, “Ҳасоис,” 1-жилд, 414-бет; Ҳалабий, 2-жилд, 123-бет.)
              </p>
              <br />
              <p>
                <sup>3</sup> Вас-Соффот сураси 113.
              </p>

            </div>
            <p className="vitalic">~ Оллоҳ, отанг уйини тарк эт, Мен кўрсатган юртга жўна, деганида у киши Оллоҳга итоат этганлар.</p>
          </div>

          <div className='main_text'>
            <p className="vitalic" onClick={() => handleSupClick(3)}>
              ~ Оллоҳни дўст деб билганлар. Қийинчиликларини, муаммоларини Оллоҳга айтар эдилар.<sup>2</sup>
            </p>
          </div>

          <div className='main_text'>
            <p className="vitalic">
              ~ Худонинг яхши эканига тўла ишонгани учун ўғлини қурбонлик қилиш учун олиб борганлар.
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              Рафиқа (р.а.) нинг ҳомила бўлиши
            </p>
          </div>

          <div className='main_text'>

            <p className='boldItalic' onClick={() => handleSupClick(3)}>
              «Икковларининг зурриятидан гўзал амал қилгувчи ҳам, ўзига очиқ-ойдин зулм қилгувчи ҳам бўлур» (Қуръон ояти).<sup>3</sup>
            </p>

            <p> Рафиқа Биби ҳеч туғмас эди. Исҳоқ (а.с.) фарзанд тилаб Худога кўп илтижо қилди. Ниҳоят, дуолари қабул бўлиб, аёли оғироёқ бўлди.</p>
            <p>
              Лекин ажабки, чақалоқлар онасининг қорнида бир-бири билан жанжал қилар эди. Шунда Рафиқа (р.а.), бошимга қандай ғавғо тушди деб, бориб Оллоҳ таолога мурожаат қилди.
            </p>
            <p>
              «Қорнингда икки эл бор, — деди Худо унга. — Сендан икки алоҳида-алоҳида халқ туғилади. Бири иккинчисидан зўр келиб, каттаси кичигига хизмат қилади».
            </p>
            <p>
              Ниҳоят, ой-куни тўлиб, Рафиқа Биби эгизак ўғил туғди.

              Тўнғичи қизилдан келган, бутун бадани пўстиндай юнгли эди. Шунинг учун унга Ийсу деб от қўйишди.
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[4] ? 'block' : 'none' }}
              onClick={() => handleSupClick(4)}


            >
              <p>
                <sup>4</sup>  Яъқуб сўзининг маъноси “товон ушлаган”.
              </p>
            </div>
            <p onClick={() => handleSupClick(4)}>
              Иккинчи ўғли Ийсунинг товонини қўли билан ушлаб туғилди. Шунинг учун унга Яъқуб<sup>4</sup>  деб от қўйишди. Эгизаклар туғилганда ҳазрати Исҳоқ олтмиш ёшга кирган эдилар.
            </p>
            <p>
              Шу тариқа, барака силсиласи яна давом этмоқда. Эсингиздами, Оллоҳ таоло Иброҳим (а.с.) га: “Ер юзидаги ҳамма қавмлар сенинг зурриятинг орқали барака топади”, деб ваъда берган эди.
            </p>
            <p>

            </p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[5] ? 'block' : 'none' }}
              onClick={() => handleSupClick(5)}


            >
              <p>
                <sup>5</sup> Баъзи манбаларда Иброҳим (а.с.) нинг Ҳажжун хоним исмли аёли ҳам бўлганлиги айтилган.
              </p>
            </div>
            <p onClick={() => handleSupClick(5)}>
              Иброҳим (а.с.) дан бир нечта ўғил туғилди. Биринчиси — Исмоил (а.с.), иккинчиси — Исҳоқ (а.с.) ва кейин Қатура Бибидан туғилган ўғиллар.<sup>5</sup>
            </p>
            <p>
              Лекин барака силсиласи, Оллоҳ олдиндан Соро Биби учун ваъда қилгани сабабли, Исҳоқ (а.с.) орқали давом этди. (Ҳолбуки Исмоил алайҳис-салом тўнғич ўғил эдилар.)
            </p>
            <p>
              Энди эса Исҳоқ (а.с.) дан ўз навбатида, икки эгизак ўғил туғилди. Биринчиси Ийсу, иккинчиси Яъқуб. Барака силсиласи тўнғич ўғил орқали давом этиши керак, деб ўйларди Исҳоқ (а.с.). Лекин улар ҳали туғилмай туриб, Худо Рафиқа Бибига: «Каттаси кичигига хизмат қилади», деб башорат берган эди.
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              Ийсу (р.а.) нинг ўз тўнғичлик ҳуқуқини сотгани
            </p>
          </div>

          <div className='main_text'>
            <p>
              Болалар улғайди. Ийсу (р.а.) моҳир овчи бўлиб, даштларда юришни яхши кўрар эди. Яъқуб (а.с.) мулойим табиатли бўлиб, қароргоҳдан узоққа кетишни хуш кўрмасди.
            </p>
            <p>
              Исҳоқ пайғамбар Ийсу овлаб келган ҳайвонларни мазза қилиб ер, шунинг учун ҳам Яъқубдан кўра уни кўпроқ яхши кўрар эди. Рафиқа Биби эса Яъқубни кўпроқ яхши кўрган.
            </p>

            <p>
              Бир куни Ийсу (р.а.) овдан чарчаб келади. Яъқуб (а.с.) шўрва пишириб ўтирган эди.
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[6] ? 'block' : 'none' }}
              onClick={() => handleSupClick(6)}


            >
              <p>
                <sup>6</sup>   Шунинг учун Ийсуга кейинчалик Эдўм, яъни қизил деб от қўйишган.
              </p>

            </div>
            <p onClick={() => handleSupClick(6)}>
              «Ана у қизил<sup>6</sup>  шўрвангдан бер, ичай. Қорним очиб кетди», деди Ийсу (р.а.).

              «Майли, — деди Яъқуб (а.с.). — Фақат олдин тўнғичлик ҳуқуқингни менга сот».

              «Эй очимдан ўляпман, тўнғичлик ҳуқуқи менга нима керак? — деди акаси. — Ол, бердим сенга».

              Лекин Яъқуб (а.с.): «Олдин қасам ич», деб туриб олди. Ийсу қасам ичиб тўнғичлик ҳуқуқини укасига сотди.
            </p>
            <p>
              Шундай қилиб, бир бўлак нон билан бир коса шўрвага у ўзининг тўнғичлик ҳуқуқини алиштирди — Иброҳим (а.с.) дан келаётган меросни — барака силсиласини хор қилди. Еб-ичиб бўлди-да, худди ҳеч нарса бўлмагандек, яна ўзининг ишлари билан туриб кетди.
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              ОЛЛОҲ ТАОЛОНИНГ ЎЗ АҲД-ВАЪДАСИНИ ИСҲОҚ (А.С.) ГА ЭСЛАТИШИ
            </p>
          </div>

          <div className='main_text'>
            <p>
              Мамлакатда яна Иброҳим (а.с.) нинг даврида бўлган очарчиликка ўхшаган бир очарчилик бошланди. Шунга ҳазрати Исҳоқ Жарорга, Абумалик подшоҳлик қилаётган филистийлар юртига бордилар.
            </p>

            <p>
              Шунда Оллоҳ таоло Исҳоқ (а.с.) га аён бериб: «Мисрга борма. Канъон сарҳадини тарк этма, — деб айтади.
              — Мен сен билан бирга бўламан, сени баракалайман. Мана шу ерларнинг ҳаммасини сенга ва сенинг авлодингга бераман. Отанг Иброҳимга қасам ичиб берган ваъдамни бажараман.

              Иброҳим Менга қулоқ солган. Амрларимга, буйруқларимга, қонун ва қоидаларимга итоат қилган. Шунинг учун Мен сенинг наслингни осмондаги юлдузлардай кўпайтираман. Мана шу ерларнинг ҳаммасини сизларга бераман. Ер юзидаги халқларнинг ҳаммаси сенинг зурриятинг орқали баракага эришади».
            </p>

            <p className="vitalic">
              Шундай қилиб, Оллоҳ таоло Исҳоқ (а.с.) га уч нарсани:
            </p>
          </div>

          <div className='main_text'>
            <p className="vitalic">
              ~ авлодлари кўп бўлишини,
            </p>
          </div>

          <div className='main_text'>
            <p className="vitalic">
              ~ ерни унинг авлодлари мерос олишини
            </p>
          </div>

          <div className='main_text'>
            <p className="vitalic">
              ~ ҳамда унинг зуррияти орқали ер юзидаги ҳамма халқларга барака улашишни ваъда қилди.
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <p className="vitalic">
              Агар эсингизда бўлса, Иброҳим пайғамбарга ҳам айни шу гаплар ваъда қилиб айтилган эди.
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              Исҳоқ (а.с.) ва Жарор подшоҳи
            </p>
          </div>

          <div className='main_text'>
            <p>
              Шундай қилиб, ҳазрати Исҳоқ Жарорда яшаётган эди.
              Одамлардан қўрқиб, “хотиним десам, унга уйланаман, деб мени ўлдиришади” деб, ҳаммага хотинини синглим, деб айтарди. (Рафиқа Биби ҳақиқатан жуда чиройли эди.)
            </p>
            <p>
              Орадан бир қанча вақт ўтди. Бир куни филистийлар подшоҳи, ҳазрати Исҳоқнинг Рафиқа билан ўйнаётганини дарчадан кўриб қолади.
            </p>

            <p>
              Кейин Исҳоқ (а.с.) ни саройига чақиртириб: «У сенинг хотининг экан-ку! Нега синглим деб айтдинг?» дейди.
            </p>

            <p>
              «Хотиним десам, мени ўлдиришади, деб қўрқдим», деди ҳазрати Исҳоқ.
            </p>
            <p>
              «Бу нима қилганинг? Кимдир унга уйланиши, у билан қўшилиши мумкин деб ўйламадингми? Бизни гуноҳга ботиришингга оз қолди-ку!» деди подшоҳ.
            </p>
            <p>
              Кейин ҳаммага эшиттириб: «Кимки бу одамга ёки унинг хотинига қўл тегизса, боши танасидан жудо бўлади!» деб жар солдирди.
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              ОЛЛОҲ ТАОЛОНИНГ БАРАКАСИ
            </p>
          </div>

          <div className='main_text'>
            <p>
              Ўша йили ҳазрати Исҳоқ эккан экинлар юз баравар ҳосил берди! Оллоҳ таоло уни жуда баракалаган эди. Давлати тобора кўпайиб, бора-бора катта бойга айландилар: сурув-сурув қўйлар, подалар ва қул-чўриларга эга бўлдилар. Шунинг учун филистийлар уни кўролмай, қудуқларини кўмиб ташлашди. Бу қудуқларни Иброҳим (а.с.) нинг ўзи кўзи очиқлигида қаздирган эдилар.
            </p>
            <p>
              Шундан сўнг Жарор подшоҳи ҳазрати Исҳоқни олдига чақиртириб: «Сен анча бойиб кучайиб кетдинг. Энди бу ердан кўчиб кетмасанг бўлмайди», деди.
            </p>
            <p>
              Шундай қилиб ҳазрати Исҳоқ, Жарор дарасига кўчиб бордилар
              ва отаси Иброҳим (а.с.) ҳаётлигида қаздирган, кейин филистийлар кўмиб ташлаган қудуқларни қайтадан очтирдилар.
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              ИЙСУНИНГ ХОТИНЛАРИ
            </p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[7] ? 'block' : 'none' }}
              onClick={() => handleSupClick(7)}


            >
              <p>
                <sup>7</sup> Ҳитийлар бутларга сиғинадиган, жирканч амаллар қиладиган халқ бўлган.
              </p>
            </div>
            <p onClick={() => handleSupClick(7)}>
              Ийсу қирқ ёшида, ҳитий Беэрининг қизи Юдяга, кейин ҳитий<sup>7</sup> Эйлўннинг қизи Басмага уйланди.
              Канъонлик бу хотинлар ҳазрати Исҳоқ билан Рафиқани жонларидан тўйдиришди.
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
                  <p> Ийсу билан Яъқуб (а.с.) </p>
                </div>
              </div>


              <div style={{ marginRight: '0px' }} onClick={() => navigate('/qisas-uzbek/jacob-steals-blessing')}>
                <div className='indicator'>
                  <span className=' bottom_arrows_for_qisas' >  Баракани ким олди?</span>
                </div>
                <div>
                  <span className='right_arrow_span' >&#8594;</span>
                </div>
              </div>
            </div>
          </article>
        </main>
        <aside> </aside>
      </div>
    </div >
  )
}

export default IsaaksTwins