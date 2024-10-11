import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './stories.css'


const EXAMPLE = () => {

  const navigate = useNavigate();


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
            <p> Юсуф (а.с.) акалари билан  </p>
            <p>учрашади</p>
          </div>

          <div className='decor_line'>
            <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
          </div>

          <div className='main_text'>
            <p className="boldItalic">
              «Шундай қилиб, Юсуфга ер юзида мукнат бердик, уни ўзи хоҳлаган жойга ерлаша оладиган қилдик» (Қуръон, 12:56).
            </p>
          </div>


          <div className='paragraph_heading'>
            <p> ФАРОВОНЛИК ЙИЛЛАРИ </p>
          </div>

          <div className='main_text'>
            <p>
              Фаровонлик йиллари бошланди. Етти йил экин-тикин яхши бўлди, ҳамма жойдан мўл-сўл ҳосил олинди. Ҳазрати Юсуф, ҳар йили олинган ҳосилнинг бешдан бир қисмини алоҳида ажратиб, шаҳарларда захира қилдилар.
              Омборларга тўпланган ғалла шунчалик кўпайиб кетдики, охири Юсуф (а.с.) уни ҳисобламай қўйдилар.
            </p>
            <p>
              Ўша йилларда ҳазрати Юсуфнинг хотини икки марта ўғил туғди.  Юсуф (а.с.) тўнғич ўғлига, “Худо йўқотган оилам ўрнини тўлдирди, ҳаётимда бўлган қийинчиликларни унуттирди”, деб Манси деб от қўйдилар. Иккинчи ўғлини эса “Худо мусофирчиликдаги қийин ҳаётимга самара берди”, деб Афройим деб атадилар.
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              ҚАҲАТЧИЛИК БОШЛАНДИ
            </p>
          </div>

          <div className='main_text'>
            <p>
              Ниҳоят, етти йиллик фаровонлик даври тугаб, Юсуф (а.с.) айтганларидек, етти йиллик очарчилик бошланди. Миср атрофидаги юртларда ҳам қаҳатчилик ҳукм сурар эди.  Қаҳатчилик бутун Мисрга таъсир қилиб, Миср халқи фиръавннинг олдига ёрдам сўраб келди. Фиръавн уларга: «Юсуфнинг олдига боринглар. У нима деса, шундоқ қилинглар», деди.  Шунинг билан, ҳазрати Юсуф омборларни очиб, мисрликларга ғалла сота бошладилар.  Мисрда ғалла борлигини эшитиб, бошқа халқлар ҳам Юсуф (а.с.) нинг олдига кела бошлади. Чунки бошқа юртларда ҳам қаттиқ очарчилик бўлаётган эди.
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              АКАЛАРИ БИЛАН УЧРАШУВ
            </p>
          </div>

          <div className='main_text'>
            <p>
              Канъонда ҳам очарчилик ҳукм сурар эди. Ҳазрати Яъқуб Мисрда ғалла борлигини эшитиб,  ўғилларини чақирди-да: «Нима учун бир-бирингизга қараб ўтирибсиз? Мисрда ғалла бор экан. Бориб ғалла сотиб олиб келинглар, бўлмаса очдан ўламиз», деб  ўн ўғлини Мисрга жўнатдилар.  Кенжа ўғли Биняминни, бирор нарса бўлиб қолмасин, деб уларга қўшгани йўқ.
            </p>

            <p>
              Шундай қилиб, ҳазрати Яъқубнинг ўғиллари ғалла харид қилиш учун Мисрга келдилар. Кимга қанча ғалла сотиш Юсуф (а.с.) нинг ихтиёрида эди, шу сабабдан акалари келиб, у кишининг олдида ерга бош уриб таъзим қилдилар.
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              АКАЛАРИНИНГ ТАЪЗИМ ҚИЛИШИ
            </p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[1] ? 'block' : 'none' }}
              onClick={() => handleSupClick(1)}


            >
              <p>
                <sup>1</sup>  Қуръон, 12:58.
              </p>
            </div>
            <p className='boldItalic' onClick={() => handleSupClick(1)}>
              «Юсуфнинг оға-инилари келдилар ва унинг ҳузурига кирдилар. Бас, у уларни таниди. Улар эса, уни танимадилар».<sup>1</sup>
            </p>
            <p>
              Юсуф (а.с.) акаларини дарров таниган бўлса ҳам, ўзини танимасликка олиб таржимонини олдига чақирдилар: «Сўра-чи, қаердан келишибди», дедилар қаҳр билан. «Канъондан келдик, ҳазратим. Ғалла олиш учун келдик», дейишди  акалари Юсуф (а.с.) ни танимай.
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              Юсуф (а.с.) акаларини синайди
            </p>
          </div>

          <div className='main_text'>
            <p>
              Шунда неча йиллар олдин акалари тўғрисида кўрган тушлари ҳазрати Юсуфнинг эсига тушиб уларга:
            </p>
          </div>
          <div className='main_text'>
            <p>
              —Йўқ, сизлар жосуссизлар. Бу ерга жосуслик қилиш учун келгансизлар, — дедилар.
            </p>
          </div>
          <div className='main_text'>
            <p>
              —Йўқ, ҳазратим. Биз қулларингиз фақат ғалла олиш учун келдик.
              Ҳаммамиз бир отанинг ўғилларимиз. Ҳалол одамлармиз, жосус эмасмиз.
            </p>
          </div>
          <div className='main_text'>
            <p>
              —Ёлғон гапиряпсизлар, — деди ҳазрати Юсуф. — Сизлар бу ерга айғоқчилик қилиш учун келгансизлар.
            </p>
          </div>
          <div className='main_text'>
            <p>
              —Ҳазратим, биз қулларингиз ўн икки ака-ука эдик. Канъонданмиз. Кенжа укамиз отамиз олдида қолди, яна бир укамиз бор эди, ҳозир йўқ, — деб жавоб беришди улар.
            </p>
          </div>
          <div className='main_text'>
            <p>
              —Йўқ, сизлар айғоқчисизлар! — деди Юсуф алайҳис-салом.  — Мен сизларни синаб кўраман: биттангиз бориб, ўша айтган кенжа укангизни олиб келсин. Қолганларни зиндонда ушлаб тураман. Фиръавннинг номи билан қасам ичаманки, агар уни олиб келиб менга кўрсатмасангиз, бу ердан кетолмайсизлар. Қани кўрамиз, гапингиз ростми-ёлғонми. Агар ёлғон бўлса, демак жосуссиз, — дедилар.
            </p>
            <p>
              Шу гаплар билан Юсуф (а.с.) уларни уч кун зиндонда сақладилар. Учинчи куни уларга бундоқ деб айтдилар: «Мен художўй одамман.
              Айтганларимни қилсангиз тирик қоласиз. Агар ҳалол одамлар бўлсангиз, биттангиз шу ерда-зиндонда қолади. Бошқаларингиз оч қолган хотин-бола-чақангизга ғалла олиб боринг.
              Кейин кенжа укангиз билан менинг олдимга қайтиб келинглар. Шунда гапингиз ёлғон эмаслиги исботланиб, ўлим жазосидан озод бўласизлар», деди.
            </p>
            <p>
              Улар бу шартни қабул қилдилар.  Кейин бир-бирларига: «Буларнинг ҳаммаси Юсуфга қилган ёмонлигимиз учун бошимизга тушди. Қанча ялинса ҳам, додласа ҳам раҳм қилмаган эдик. Шу сабабдан бошимизга бу кун тушди!» дедилар.  «Мен айтувдим Юсуфга тегманглар деб, — деди Роавбин (р.а.). — Қулоқ солмаган эдинглар. Мана, энди унинг хуни биздан талаб қилиняпти».
            </p>
            <p>
              Ҳазрати Юсуф уларнинг ҳамма гапини тушуниб турган эдилар. Лекин акалари бундан бехабар, чунки Юсуф (а.с.) улар билан фақат тилмоч воситасида гаплашаётган эди.  Роавбиннинг гапидан кейин ҳазрати Юсуф ўзини тутиб туролмай ташқарига чиқиб кетдилар. Хилватроқ жойга бориб кўнглини бўшатдилар. Кейин қайтиб келиб акалари билан бироз суҳбатда бўлдилар ва ҳамманинг кўз олдида Шимъун (р.а.) ни боғлатдилар.
            </p>
            <p>
              Одамларига эса, уларнинг қопларини ғалла билан тўлдиринг, йўлга озуқа ҳам беринг, деб амр қилдилар. (Ҳар бирининг қопига, ҳазрати Юсуфнинг яширинча буйруғига биноан, ғалла учун тўлаган пуллари ҳам солиб қўйилди.)
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              ЙЎЛДА
            </p>
          </div>

          <div className='main_text'>
            <p>
              Шундай қилиб тўққиз ака-ука қопларини эшакларга ортиб, Канъонга қараб йўлга тушдилар.  Бир жойда кечани ўтказиш учун тўхтадилар. Улардан бири эшагига ем бериш учун қопини очди. Қараса, берган пули қопнинг оғзида турибди!
            </p>
            <p>
              Дарров ака-укаларини чақириб: «Қаранглар, берган пулим қайтиб келибди, ана, қопнинг ичида!» деди. Пулни кўриб ҳаммалари қўрқиб кетдилар. Қалтираб: «Худо бошимизга қандай кунни солди экан?» деб айтар эдилар. Ҳаммани ваҳима босган эди.
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              КАНЪОНДА
            </p>
          </div>

          <div className='main_text'>
            <p>
              Уйга келганда, бўлган воқеаларни ҳазрати Яъқубга айтиб бердилар:
              «Миср ҳокими бизни яхши қабулламади, жосус деб ўйлади.
              Биз унга, ҳалол одамлармиз, жосус эмасмиз,
              бир отадан ўн икки ака-ука эдик, кенжа укамиз Канъонда отамиз олдида, яна бир укамиз бор эди, ҳозир йўқ, дедик.

              Шунда ҳоким, агар гапингиз рост бўлса, биттангиз шу ерда қоласиз, бошқалар оч ўтирган хонадонларингизга ғалла олиб борсин.
              Кейин кенжа укангизни менинг олдимга олиб келасизлар. Шунда жосус эмаслигингизга ишонаман. Гапларингиз рост бўлса акангизни соғ-саломат қайтариб бераман. Кейин бемалол Мисрга келиб-кетиб юраверасизлар деб, Шимъунни олиб қолди», деб айтдилар.
            </p>
            <p>
              Кейин қопларни бўшата бошладилар. Қарасалар, ҳар бирининг берган пули қопларнинг ичида турибди!
              Ҳазрати Яъқуб ҳам, ўғиллари ҳам буни кўриб қўрқиб кетдилар.
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <p>
              —Нима?! Мени ҳамма болаларимдан айирмоқчимисизлар?! — дедилар Яъқуб (а.с.) қалтираб. — Ҳамма кўргуликлар менинг бошимгами?! Юсуфни йўқ қилдинглар, Шимъунни йўқ қилдинглар, энди Биняминни ҳам олиб кетмоқчимисизлар? — деди.
            </p>
          </div>
          <div className='main_text'>
            <p>
              —Ота, — деди Роавбин. — Биняминни менга топширинг. Агар уни соғ-саломат қайтариб олиб келмасам, ана, менинг икки ўғлимни ўлдиришингиз мумкин.
            </p>
          </div>
          <div className='main_text'>
            <p>
              —Йўқ! — дердилар ҳазрати Яъқуб. — Менинг ўғлим сизлар билан бормайди. Ўзи акасидан айрилиб якка қолган! Агар унга ҳам бирор нарса бўлса, мени тириклайин гўрга тиқасизлар!
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              ҒАЛЛА ТУГАГАНДАН СЎНГ
            </p>
          </div>

          <div className='main_text'>
            <p className='boldItalic'>
              «Уни сизларга худди акасини ишонганимдек ишониб топширайми?.. Токи менга, албатта, ҳузуримга қайта келтиришингиз ҳақида Оллоҳдан васийқа бермагунингизча, уни зинҳор сиз ила юбормасман» (Қуръони карим 12:64,66).
            </p>
            <p>
              Канъонда қаҳатчилик шиддат билан ҳукм сураётган эди.
              Мисрдан олиб келган ғаллани еб тугатганларидан сўнг, Яъқуб (а.с.) ўғилларига:
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <p>
              —Яна бориб дон олиб келмасанглар бўлмайди», деди.
            </p>
          </div>
          <div className='main_text'>
            <p>
              —Ота, — деди Яҳузо (р.а.). — Миср ҳокими бизга, укангизни олиб келмасангиз, кўзимга кўринманг, деб дўқ қилган.
              Агар Биняминни биз билан юборсангиз, бориб дон олиб келамиз.
              Юбормасангиз бормаймиз. У бизга, укангиз келмаса, кўзимга кўринманг деб айтган, — деди.
            </p>
            <p></p>
          </div>
          <div className='main_text'>
            <p>
              —Нега унга яна бир укамиз бор деб айтдинглар?! Бошимга бало бўлдинглар-ку! — деди ҳазрати Исроил ўғилларига.
            </p>
          </div>
          <div className='main_text'>
            <p>
              —У одам бизни қаттиқ сўроқ қилди. Отангиз тирикми? Бошқа ака-укаларингиз ҳам борми, деб бошимизга савол ёғдирди. Жавоб бермасак бўлмас эди. Укангизни бу ерга олиб келинглар, дейишини биз қаёқдан билайлик? — дейишди улар.
            </p>
          </div>
          <div className='main_text'>
            <p>
              —Биняминни менга топширинг, — деди Яҳузо отасига. — Биз йўлга тушайлик. Бўлмаса ҳеч қайсимиз тирик қолмаймиз. Ҳаммамиз, сиз ҳам, болалар ҳам очдан ўламиз.  Биняминни соғ-саломат олиб келишга мен зоминман. Олиб келмасам, бутун умр олдингизда гуноҳкор бўлай.  Пайсалга солмаганингизда шу пайтгача Мисрга икки марта бориб келган бўлар эдик, — деди.
            </p>
            <p>
              Ниҳоят, Исроил (а.с.) ўғилларининг гапига рози бўлдилар: «Майли, бошқа йўли бўлмаса начора! Лекин қуруқ борманглар. Канъоннинг энг яхши маҳсулотларидан олиб — бироз мўмиё, бироз асал, атриёт, мўриё, писта-бодом олиб бориб Миср ҳокимига совға қилинглар.
              Қоплардан чиққан пулни ҳам қайтариб беринглар. Аввалги сафар қандайдир бир хато ўтган бўлиши мумкин.
              Майли, унда укангизни олиб, йўлга тушинглар.
              Оллоҳ ҳамма нарсага қодир. Ўзи у одамнинг юрагида сизларга меҳр уйғотсин. Биняминнинг ҳам, акасининг ҳам қайтиб келишига рухсат берсин. Агар мабодо болаларимдан айрилишим керак бўлса, унда на чора!» дедилар.
            </p>
            <p>
              Яъқуб пайғамбар Яратганга суянишдан бошқа чора топмади. Бечора отанинг бутун умиди Худодан эди: «Оллоҳ таоло у одамнинг юрагида сизларга меҳр уйғотсин!» Қуръонда у кишининг тилидан айтилган бир оят бор: <span className="boldItalic"> «Ҳукм қилиш фақат Оллоҳнинг Ўзига хос. Унгагина таваккул қилдим. Таваккул қилгувчилар фақат Унгагина таваккул қилсинлар»  </span> <span className="vitalic"> (Юсуф сураси 12:67). </span>
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              ЯНА МИСРДА
            </p>
          </div>


          <div className='main_text'>
            <p>
              Шундай қилиб, улар совға-саломлар олиб, аввалгига қараганда икки баравар кўп пул билан Мисрга қараб йўлга тушдилар. Бинямин ҳам улар билан бирга эди. Мисрга келиб тўғри ҳазрати Юсуфнинг олдига бордилар.
            </p>

            <p>
              Юсуф (а.с.) Биняминни кўриши билан нозирига: «Ана у одамларни уйга олиб бор. Бўрдоқи сўйиб таом ҳозирлат. Улар пешинни мен билан бирга ейди», дедилар. Нозир: «Хўп бўлади», деб уларни ҳазрати Юсуфнинг қасрига олиб кетди.
            </p>
            <p>
              Йўлда, қаерга кетаётганларини билиб улар қўрқиб кетдилар. “Қоплардан чиққан пул учун бизни бу ерга олиб келди. Энди нарсаларимизни тортиб олиб, бизни қул қилади”, деб ваҳимага тушдилар ва  қаср дарвозасига етиб келганларида ҳазрати Юсуфнинг нозирига яқинлашиб:
            </p>
            <p>
              «Ҳазратим, биз аввал ҳам сиздан ғалла олган эдик.  Уйга қайтганда қопларни очиб қарасак, ғалла учун берган пулимиз қопларнинг ичида турган экан!  Шунинг учун у пулларни ҳам сизга қайтариб олиб келдик. Бироқ уни ким қопга солганидан хабаримиз йўқ. Бу сафар оладиган ғалла учун алоҳида пул келтирдик», деб айтдилар.
            </p>
            <p>
              «Ташвишланманглар, — деди нозир. — У пулларни ота-боболарингиз худоси қопларингизга солиб қўйган бўлса керак. Мен берган пулларингизни олганман», деди. Кейин Шимъунни уларнинг олдига келтирди ва ҳаммаларини ҳазрати Юсуфнинг уйига киргизиб, оёқларини ювиш учун сув келтирди, эшакларига ем берди.
            </p>
            <p>
              Ҳоким билан бирга таом ейишларини эшитиб, ўн битта ака-ука, олиб келган совғаларини бериш учун тайёрладилар ва ҳазрати Юсуф уйга кирганда, унинг олдида ерга бош уриб, совғаларни тақдим қилдилар.
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              ЗИЁФАТ
            </p>
          </div>

          <div className='main_text'>
            <p>
              Салом-аликдан сўнг ҳазрати Юсуф: «Отангиз яхши? Соғ-саломатми?» деб сўрадилар.  «Оллоҳга шукур яхши, соғ-саломатлар», деб улар яна эгилиб Юсуф (а.с.) га таъзим қилдилар.
            </p>
            <p>
              «Айтган кенжа укангиз шуми?» деди Юсуф (а.с.) Биняминга қараб. Кейин: «Худо сенга барака берсин болам!» дедилар-да
              укасига меҳри товланиб, ўзини тутолмай шошиб ташқарига чиқдилар. Ётоғига кириб, йиғлаб, кўнглини бўшатдилар.
            </p>
            <p>
              Юзларини ювиб, ўзини қўлга олгач акаларининг олдига кирдилар ва хизматкорларига: «Таом келтиринг», деб буйруқ бердилар.
            </p>
            <p>
              Ҳазрати Юсуфга алоҳида, акаларига алоҳида дастурхон ёзилди. (Мисрликлар бўлса бошқа жойга ўтиришди, чунки улар ибронийлар билан бир дастурхондан озиқланишни ҳаром деб ҳисоблар эдилар.)
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[2] ? 'block' : 'none' }}
              onClick={() => handleSupClick(2)}


            >
              <p>
                <sup>2</sup>  Қуръон ояти: «Юсуфнинг олдига кирганларида, у инисини ўзига яқин жойлаштирди ва: «Мен акангман, улар қилган нарсалардан хафа бўлма», деди» (12:69).
              </p>
            </div>

            <p onClick={() => handleSupClick(2)}>
              Меҳмонларни ёш тартиби бўйича дастурхонга ўтқазишди. Таажжубга тушган оға-инилар ҳайрон бўлиб бир-бирига қарар эдилар.
              Уларга таом Юсуф (а.с.) нинг дастурхонидан узатилди. Биняминга эса бошқаларга нисбатан беш баравар кўп таом тортилди.<sup>2</sup> Ҳаммалари хоҳлаганча еб-ичиб, қўйилган нарсалардан истеъмол қилдилар.
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              “ЎҒРИНИНГ” ҚЎЛГА ТУШИШИ
            </p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[3] ? 'block' : 'none' }}
              onClick={() => handleSupClick(3)}


            >
              <p>
                <sup>3</sup>   «Уларнинг жиҳозларини ҳозирлаган пайтда, инисининг юкига бир идишни солдириб қўйди» (Қуръон ояти 12:70).
              </p>
            </div>

            <p onClick={() => handleSupClick(3)}>
              Акалари Канъонга қайтадиган вақт келгач, ҳазрати Юсуф нозирига: «Уларнинг қопларини сиққанча ғалла билан тўлдир. Кейин ҳар бирининг пулини қопининг оғзига солиб қўй.  Энг кичигининг қопига менинг кумуш жомимни ҳам сол», деб тайинладилар.
            </p>
            <p>
              Тонг ёришиши билан ҳаммалари эшакларини етаклаб йўлга тушдилар.
              Улар ҳали шаҳардан узоқлашмай туриб, Юсуф (а.с.) нозирига: «Дарров уларнинг орқасидан қув. Етиб боришинг билан, нега яхшиликка ёмонлик қилдингиз?
              Нима учун хўжайинимнинг жомини ўғирладингиз, деб айт», дедилар.
            </p>
            <p>
              Нозир дарров уларнинг изидан тушди. Етиб бориб, хўжайини айтган гапларни уларга айтди.
            </p>
            <p>
              Улар эътироз билдириб: «Нима деяпсиз? Биз бундай ишга умуман қўл урмаймиз! — дедилар. — Ҳатто қопларимиздан чиққан пулни ҳам сизга қайтариб олиб келдик, қандай қилиб хўжайинингиз уйидан бирор нарса ўғирлашимиз мумкин?  Текшириб кўринг: агар сиз айтган нарса биронтамизнинг ёнидан чиқса ўлдиришга ҳаққингиз бор, қолганларимизни бўлса хўжайинингизга қул қилинг», дедилар.
            </p>
            <p>
              «Жуда соз, жом кимдан топилса, мен ўшани қул қиламан, — деди нозир. — Бошқаларингиз эса ўз йўлингизга кетаверасизлар».
            </p>
            <p>
              Ҳаммалари қопларини тез-тез ерга тушириб очдилар ва нозир каттасидан бошлаб ҳаммасининг қопини титкилаб чиқди. Жом албатта Биняминнинг (р.а.) қопида эди.
            </p>
            <p>
              Ака-укалар мусибатдан бошларини чангаллаб қопларини эшакларга ортдилар ва нозир билан Биняминнинг ортидан шаҳарга қайтдилар.
            </p>
            <p className="vitalic">(Нима деб ўйлайсиз, Юсуф (а.с.) нима учун бундоқ қилдилар?)</p>
          </div>

          <div className='paragraph_heading'>
            <p>
              ЯҲУЗО ЎРТАГА ТУШАДИ
            </p>
          </div>

          <div className='main_text'>
            <p className="boldItalic">
              «Улар: «Ё ҳазратим, унинг кўп қариб қолган отаси бор. Бас, биримизни унинг ўрнига олинг. Биз сизнинг яхшилик қилувчилардан эканлигингизни кўрмоқдамиз», дедилар» (Қуръон, 12:78).
            </p>
            <p>
              Улар шаҳарга қайтиб келганларида,
              Юсуф (а.с.) ҳали ҳам уйда эдилар. Ака-укалар келиб ҳазрати Юсуфнинг олдида ерга йиқилдилар.
            </p>
            <p>
              «Бу нима қилганингиз? Мендай одамнинг сирларни очиш қудратига эга эканини ўйламадингизми?» деди Юсуф.
            </p>
            <p>
              «Ё ҳазратим! Нима деб жавоб беришни билмаймиз, — деди Яҳузо (р.а.). — Ўзимизни қандай оқлайлик? Оллоҳ гуноҳимизни фош қилди. Мана энди ҳаммамиз, қопидан кумуш жом чиққан укамиз ҳам сизга қул бўлиш учун келдик», деди.
            </p>
            <p>
              «Йўқ. Мен фақат жом ўғирлаган одамни қул қиламан. Қолганлар уйига кетаверсин», деди ҳазрати Юсуф.
            </p>

            <p>
              Шунда Яҳузо унинг олдига яқинроқ бориб деди: «Ҳазратим, биламан, фиръавндек қудратга эгасиз. Ғазабингиз келмасин, бир нарса айтишга рухсат беринг.  Сиз биздан: “Отангиз тирикми, бошқа ака-укаларингиз борми?” деб сўраганингизда,  биз: “Қари отамиз бор. Биз ўн икки ака-ука эдик. Энг кенжамиз, отам қариликда кўрган ўғли, ҳозир уйда. Унинг акаси ўлиб отамнинг ўша хотинидан фақат шу укамиз қолган.  Шунинг учун отамиз уни жуда яхши кўради”, деб айтган эдик. Шунда сиз: “Ўша укангизни олдимга олиб келинг, кўзим билан кўрай”, дедингиз. Биз: “Агар уни отасидан айирсак, отаси ўлади”, десак ҳам
              сиз: “Кенжа укангизни олиб келмасангиз кўзимга кўринманг”, деб айтдингиз.
            </p>
            <p>
              Отамнинг олдига борганимизда, гапларингизни айтдик. Кейин отам: “Яна бориб ғалла олиб келинглар”, деди.         Биз: “Йўқ, агар кенжа ўғлингизга рухсат бермасангиз Мисрга боролмаймиз. Миср ҳокими, агар кенжа укангиз келмаса, кўзимга кўринманг, деб айтган”, дедик.
            </p>

            <p>
              Шунда отамиз бизга: “Биласизлар, Роҳийла менга икки ўғил туғиб берди.  Бирини йўқотдим. Кетдию қайтиб келмади. Йиртқич ҳайвонларга ем бўпди, уни кўриш менга бошқа насиб қилмади.  Энди агар бунисини ҳам олиб кетсанглар, унга бир нарса бўлгудай бўлса, мени тириклай гўрга тиқасизлар”, деди.
            </p>

            <p>
              Ҳазратим, энди отам олдига қайтиб борсагу, кенжа ўғли ёнимизда бўлмаса,  отамнинг юраги ёрилиб ўлади.  Унинг жони шу болага илиниб турибди. Мен отамга кенжа укамизни соғ-саломат олиб келаман, деб ваъда берувдим. Олиб келмасам ўлгунимча олдингизда гуноҳкор бўлай, девдим.  Шунга ҳазратим, илтижо қиламан, укам ўрнига мени қул қилинг. Бола отасининг олдига қайтсин.  Усиз мен қандай қилиб отам олдига бораман?! Отам бошига тушадиган мусибатни қандай томоша қиламан?!» деди.
            </p>
          </div>


          <div className='paragraph_heading'>
            <p>
              УМИД ИПЛАРИ УЗИЛГАЧ
            </p>
          </div>

          <div className='main_text'>
            <p className='vitalic'>
              Юсуф (а.с.):  «(Йўқ!) <span className="boldItalic"> Нарсамизни ҳузуридан топган одамдан бошқани олиб қолишимиздан Оллоҳ сақласин. Акс ҳолда, албатта, золимлардан бўлиб қоламиз», деди. </span>  (Акалари)
              <span className="boldItalic"> ундан умидларини узгач, четга чиқиб, хуфёна маслаҳат қилдилар. Катталари: «Отангиз сиздан Оллоҳ номи билан васийқа олганини ва бундан олдин Юсуф ҳақида қилган айбингизни билмайсизларми?! Мен токи отам менга изн бермагунча ёки Оллоҳ ҳукм чиқармагунча бу ердан қимирламайман. У ҳукм чиқарувчиларнинг энг яхшисидир. Отангиз олдига қайтинглар. Унга: «Эй отамиз, ҳақиқатда ўғлинг ўғрилик қилди. Биз фақат ўзимиз билган нарсага гувоҳлик бердик, холос. Биз ғайбни билгувчи эмас эдик. Биз бўлган шаҳардан сўра ва у ерда биз учраган карвондан сўра, биз, албатта, ростгўйларданмиз, деб айтинглар», деди. </span>
              (Эсингиздами, отамиз:) <span className="boldItalic"> «Йўқ, сизга ҳавои нафсингиз бир ишни яхши кўрсатмиш. Бас, чиройли сабр (қиламан). Шоядки Оллоҳ уларнинг ҳаммасини ҳузуримга жамлаб келтирса... Боринглар, Юсуфни ва унинг акасини яхшилаб изланглар ... <span className="vitalic">(Фақат) </span> битта эшикдан кирманглар, турли эшиклардан киринглар», деган» </span> (Қуръон оятлари, 12:79-83, 87, 67).


            </p>
            <p className="vitalic">
              Ҳа, ўшанда Яъқуб (а.с.)  <span className="boldItalic"> «улардан юз ўгирган ҳамда: «Оҳ, Юсуф!» деб кўзларига оқ тушган эди» </span> (Қуръон ояти, 12:84).
            </p>
          </div>


          <div className='paragraph_heading'>
            <p>
              ЮСУФ (А.С.) ЎЗИНИ ТАНИТАДИ
            </p>
          </div>

          <div className='main_text'>
            <p>
              Юсуф (а.с.) албатта уларнинг ҳамма гапини тушуниб турган эдилар. Ўзларини бошқа тутиб туролмай: «Чиқинглар! Чиқинглар ҳамманглар!» деб хизматкорларини ташқарига чиқардилар. Ҳамма хонани тарк этди. Якка ўзлари қолгандан сўнг, ўзини акаларига танитдилар.
            </p>
            <p>
              Кейин шундай баланд овоз билан йиғладиларки, ташқарида турган мисрликлар ҳам у кишининг йиғисини эшитиб, дарров фиръавнга хабар бердилар.
            </p>
            <p>
              «Бу мен, Юсуфман, Юсуф! — дер эдилар акаларига. — Отам соғ-саломатми?» Лекин акалари қўрқиб қотиб қолган эдилар. Жавоб беришга тиллари қовушмас эди.
            </p>
            <p>
              «Яқинроқ келинглар, — дедилар Юсуф (а.с.). — Мен Мисрга сотган укангиз Юсуфман.
              Хафа бўлманглар! Мени Мисрга сотганингиз учун ўзингизни айбламанг. Мени бу ерга Худо юборган эди. Инсонлар ҳаётини сақлаб қолиш учун мени сизлардан олдин бу ерга олиб келди.
              Чунки кўриб турибсизлар, очарчилик бошланганига энди икки йил бўлди. Яна беш йил экин битмайди, ўрим-терим деган нарса бўлмайди.
              Худо Иброҳимнинг наслини сақлаб қолиш учун, кўп одамларнинг жонини асраш учун мени сизлардан олдин бу ерга юборган экан.
            </p>
            <p>
              Ҳа, мени бу ерга сизлар эмас, Худо юборган. Худо мени фиръавннинг маслаҳатчисига айлантирди, бутун Миср устидан ҳокимлик қилиш ҳуқуқини берди.
              Энди тез отам олдига боринглар, ўғлингиз Юсуфни Оллоҳ бутун Миср юртига ҳоким қилиб кўтарибди, денглар.
              Вақтни ўтказмай, ҳаммангиз Мисрга, менинг олдимга кўчиб келинглар. Сабаби очарчилик яна беш йил давом этади.
              Келмасангиз ҳаммангиз оч қоласиз! Отамга шундай деб айтинг.
            </p>
            <p>
              Бу мен — Юсуфман, ўзларингиз кўриб турибсиз. Мана, укам Бинямин ҳам гувоҳ!  Отамга тушунтиринг, кўрганларингизни, Мисрда қанча шон-шуҳратга эга бўлганимни айтинг. Иложи борича уни тезроқ бу ерга олиб келинг», дедилар.
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[4] ? 'block' : 'none' }}
              onClick={() => handleSupClick(4)}


            >
              <p>
                <sup>4</sup>  «Э-э, сенн... сенн... Юсуфмисан?.. Оллоҳга қасамки, ҳақиқатда Оллоҳ сени биздан устун қилди. Биз эса, хатокорлардан бўлдик» (12:90-91).
              </p>
            </div>
            <p onClick={() => handleSupClick(4)}>
              Кейин ҳазрати Юсуф аввал Бинямин (р.а.) билан, кейин акалари билан йиғлаб кўришдилар, қучоқлашдилар. Бинямин ҳам йиғлади. Шундан сўнг акалари ҳазрати Юсуф билан гаплашишга журъат этдилар.<sup>4</sup>
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
                  <p>Акалари билан учрашув </p>
                </div>
              </div>


              <div style={{ marginRight: '0px' }} onClick={() => navigate('/qisas-uzbek/pharaoh-invites-jacobs-family')}>
                <div className='indicator'>
                  <span className=' bottom_arrows_for_qisas' >  Фиръавннинг таклифи</span>
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

export default EXAMPLE