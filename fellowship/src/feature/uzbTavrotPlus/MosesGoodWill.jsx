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
    const numberOfCases = 14;

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
            <p> МУСО  АЛАЙҲИС-САЛОМНИНГ  </p>
            <p>НАСИҲАТЛАРИ</p>
          </div>

          <div className='decor_line'>
            <p>
              &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;
            </p>
          </div>

          <div className='main_text'>
            <p className="vitalic">
              Ўлим соати яқинлашганини билгач, Мусо алайҳис-салом Бани Исроилга қатор насиҳатлар берадилар. Биз қуйида ана шу насиҳат ва буйруқлардан мисоллар келтирдик:
            </p>
            <p>
              «Мана, мен сизларга Оллоҳ ўргатган ҳамма қонунларни ўргатдим. Ваъда қилинган юртда мана шу қонунлар сизлар учун мезон бўлсин. Бу қонунларни ижро этиш орқали бошқа халқларга ўзларингизнинг ҳикмат аҳли эканингизни кўрсатасиз.
            </p>
            <p>
              Сизлар амал қилаётган қонунларни эшитганда, бошқа миллатлар: “Улар ҳақиқатан ҳам буюк халқ, доноликка ва ҳикматга эга халқ”, деб айтадилар. Ахир қайси халқнинг худоси уларга бизникидай яқин? Қайси миллатнинг шундай худоси бор? Қайси элатда, биз ўрганган аҳком ва амрлардек адолатли қонунлар мавжуд?»
            </p>
            <p>
              Ёдингизда бўлсин, Оллоҳдан бошқа худо йўқ! Хожамизни бутун ақлингиз билан, бутун вужудингиз билан, бутун куч-қувватингиз билан севинг. Берган амрларини кўз қорачиғидай асранг. Уларни фарзандларингиз миясига қуйинг. Уйда ўтирганда, йўлда юрганда, ётгандаю турганда Раббимиз ҳақида гапиринг.   Доим ёдда тутиш учун, амрларини қўлларингизга, пешаналарингизга тақиб олинг. Уйларингиз кесакисига, дарвозаларга битинг.
            </p>
            <p>
              Парвардигори Худо, ота-боболаримиз Иброҳим, Исҳоқ ва Яъқубга ваъда қилган ўлкани, сиз бунёд этмаган буюк-гўзал шаҳарларни, сиз тўпламаган бойликларни, сиз қазмаган қудуқларни, сиз экмаган узумзор ва зайтунзорларни сизларга беради. Тўкин-сочин ҳаёт кечирасизлар. Ўшанда эҳтиёт бўлинг! Сизларни Мисрдан, қуллик юртидан олиб чиққан Раббингизни эсдан чиқарманг. Тағин бошқа халқлар сиғинадиган маъбудларнинг орқасидан эргашиб, Эгамизнинг қаҳрини қўзғатманг.
            </p>
            <p>
              Оллоҳнинг ҳамма амрларига риоя қилинглар. Уларни кўз қорачиғидай сақланглар. Шунда ваъда қилинган юрт сизларники бўлади.
            </p>
            <p>
              Унутманг, юрагингизда нима борлигини билишингиз учун, мағрурлигингизни синдириш учун, амрларини сақлаш-сақламаслигингизни синаш учун, Раббимиз сизларни қирқ йил чўлда олиб юрди.
            </p>
            <p>
              Оч қолдириб қийинчиликларга рўбарў қилди. Ўзларингиз кўрмаган, ота-боболарингиз емаган таом билан қорнингизни тўйдирди. У сизларга бу билан инсон фақат нон билан эмас, балки Худо айтган ҳар бир сўз билан тирик эканини ўргатмоқчи эди.
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'
              style={{ display: visibleBubbles[1] ? 'block' : 'none' }}
              onClick={() => handleSupClick(1)}
            >
              <p >
                <sup>1</sup>  Табарийнинг “Тарих” китобида ёзилишича: «Уларнинг устидаги кийимлари бўйига кўра узайиб, йиртилмайдиган ва эскирмайдиган бўлди» (Табарий, “Тарих”, 1-жилд, 222-бет; Салабий, “Ароис”, 245-246 бетлар; Ибн-и Асир, “Комил”, 1-жилд, 196-бет.)
              </p>
            </div>
            <p onClick={() => handleSupClick(1)}>
              Қирқ йил мобайнида кийимларингиз эскирмади, оёқларингиз шишмади, оёғингиздаги чориғингиз тўзимади.<sup>1</sup> Инсон фарзандини қандай тарбия қилса, Раббимиз Оллоҳ ҳам сизларни шундай тарбия қилди.
            </p>
            <p>
              Шундай экан, амрларига риоя қилиб, У кўрсатган йўлдан юринглар, ҳурматини жойига қўйинглар. Ахир Худо сизларни жаннатнишон юртга олиб киради. Серсув, обод, буғдой-арпаю меваларга бой, зайтуну асалга мўл юртга эга қилади. Ҳеч нарсага муҳтож бўлмайсизлар.
            </p>
            <p>
              Қорнингиз тўйгач ато этган баракалари учун Оллоҳга ҳамд айтинглар. Тағин ичингизда: “Мен ўз кучим билан, ўз меҳнатим билан бу бойликларга эга бўлдим”, деб ўйламанглар!
            </p>
            <p>
              Ёки “биз яхши бўлганимиз учун Худо бу юртни бизга берди”, деган хаёлларга борманг.  Сизлар яхши эмас, аксинча жуда ўжар халқсиз. Худо бу юртни сизлар яхши бўлганингиз учун эмас, балки бу ерда яшаётган халқлар ёмон бўлгани учун улардан олиб, сизга бермоқчи. Худо оталаримиз Иброҳим, Исҳоқ ва Яъқубга шу жойни сизларнинг авлодларингиз мерос қилиб олади, деб ваъда берган эди.
            </p>
            <p>
              Эй, Бани Исроил! Раббингиз Оллоҳ сизлардан нимани талаб қиляпти? Оллоҳдан қўрқинглар, У айтган йўллардан юринг, Уни севиб, бутун ақлингиз ва вужудингиз билан Унга хизмат қилинг. Саодат эгаси бўлиш учун амрларига, шартларига риоя қилинг.
            </p>
            <p>
              Осмон ҳам, фалак тоқи хам, ер юзи ва ундаги ҳамма нарсалар ҳам Оллоҳга тегишли. Шундоқ бўлса ҳам ул Зот бизнинг ота-боболаримизни севди, уларнинг авлоди бўлган сизларни алоҳида танлаб ажратди.
            </p>
            <p>
              Шундоқ экан, юракларингизни хатна қилинг, ўжарлигингизни қўйинг. Ахир Оллоҳ — подшоҳларнинг подшоҳи, султонларнинг султони. Қудратли ва қўрқинчли. Тарафдорлик қилмайди, пора олмайди. Етимлару беваларга адолат қилади, мусофирлар ғамини ейди. Ундан қўрқинглар, Унга хизмат қилинглар.
            </p>
            <p>
              Оллоҳ — бизнинг шаъну шавкатимиз, Раббимиз. Биз учун буюк қўрқинчли мўъжизалар кўрсатди, бизни осмондаги юлдузлардай кўпайтирди. Ахир ота-боболаримиз Мисрга келганларида атиги етмиш жон эдилар, энди эса сафимиз қанчалик кўпайди, қаранг!
            </p>
          </div>

          <div className='paragraph_heading'>
            <p> ҚОЗИ ВА ПОДШОҲЛАР ҲАҚИДА  </p>
          </div>

          <div className='main_text'>
            <p>
              Худо сизларга берадиган шаҳарларда ҳар бир қабила учун ҳакам ва оқсоқоллар тайин этинглар. Улар халқ орасида адолат ўрнатиб, ҳукм қилишда тарафкашлик, порахўрлик деган нарсаларга қўл урмасин. Чунки пора донолар кўзини кўр қилиб, ҳақ одамлар ҳаққига зарар етказади. Адолат оёқ-ости бўлмаслиги керак! Худо ато этган юртда яшайман десангизлар, адолатни маҳкам ушланглар.
            </p>
            <p>
              Кейинчалик, қўшни давлатларга ўхшаб бизда ҳам подшоҳ бўлсин, бизни подшоҳ бошқарсин, деб айтасизлар. Шунда Худо кўрсатган одамни ўзингизга подшоҳ этиб тайинланг. Бегона халқ вакилларини подшоҳ қилиб кўтарманглар.
            </p>
            <p>
              Сизларга подшоҳлик қиладиган одам йўлдан озмаслиги учун олтин-кумушга, шоҳона отларга, хотинларга ружуъ қўймасин, акс ҳолда Худодан кўнгли совиб кетади.
            </p>
            <p>
              Тахтга ўтирар экан, руҳонийлар назорати остида илоҳий амрлардан ўзига нусха кўчириб, ҳар доим ёнида олиб юрсин. Умрининг охиригача уни ўқиб, Худодан қўрқишни, Худонинг амру ҳидоятларига риоя қилишни ўргансин. Оллоҳнинг амрларидан бир қадам ҳам четга чиқмасин, юртдошларидан ўзини юқори қўймасин. Шунда ўзи ҳам, фарзандлари ҳам узоқ йил халқни бошқаради.
            </p>
            <p>
              Ваъда қилинган юртга кирганингизда, у ердаги халқларнинг жирканч одатларини ўрганманг, уларга тақлид қилманг. Орангизда ўғлини ёки қизини оловда куйдирадиганлар, фол очадиган ё сеҳр-жоду ишларга қўл урадиган, иссиқ-совуқ қиладиган ёки руҳ-арвоҳлар билан гаплашадиганлар бўлмасин. Бундоқ ишлар Худонинг олдида жирканчлик. Оллоҳ ана шу разил одатлари учун Канъондаги халқларни ҳайдаб, ерларини сизга бермоқчи. Ҳар бир амалда Оллоҳга содиқ бўлинглар.
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'
              style={{ display: visibleBubbles[1000] ? 'block' : 'none' }}
              onClick={() => handleSupClick(1000)}
            >
              <p >
                <sup>1000</sup> Мусо пайғамбар Оллоҳ (с.в.т.) га жуда ҳам яқин инсон бўлганлар. Оллоҳ таоло у киши билан бошқа пайғамбарлар сингари эмас, балки энг яқин дўстидек муомала қилган. Эсингиздами, Оллоҳ таоло Бани Исроилни дўстлик аҳдига даъват қилганида, улар Оллоҳга яқин бўлишни истамаган эдилар. Натижада Мусо пайғамбар халқ учун воситачи вазифасини бажарган эдилар.
              </p>
            </div>
            <p onClick={() => handleSupClick(1000)}>
              Оллоҳ сизлар учун орангиздан, ўз биродарларингиз ичидан, менга ўхшаш<sup>1000</sup> бир пайғамбар чиқаради. Унга итоат этишингиз лозим. Чунки Сино тоғида Худодан шуни тилаган эдингизлар: “Худонинг товушини эшитмайлик, даҳшатли оловни кўрмайлик. Бўлмаса ўлишимиз аниқ!” деган эдингизлар.
            </p>
            <p>
              Ўшанда Оллоҳ менга: «Яхши, Мен сизлар учун биродарларингиз орасидан сенга ўхшаш бир пайғамбар чиқараман. У орқали халққа гапираман. У амрларимни халққа тушунтиради. Кимки кейин унинг гапларига қулоқ тутмаса, Менинг олдимда жавобгар бўлади”, деб айтган эди
            </p>
            <p>
              Агар кимдир бировни жиноятда айбласа, иккала томон, диний пешволар ва ҳакамлар олдида Оллоҳнинг номига қасам ичсинлар. Кейин ҳакамлар вазиятни яхшилаб текширсин. Агар гувоҳ ёмон ният билан ёлғон шаҳодат берган бўлса, юкламоқчи бўлган жазосини унинг ўзига қайтаринглар. Шу тариқа орангиздан ёмонликни йўқ қиласизлар. Бошқаларга эса ўрнак бўлади. Уни аяб ўтирманг. Ўлдириш ниятида даъво қилган бўлса, ўзини ўлдиринг. Кўзини ўйиш ниятида қилган бўлса, ўзининг кўзини ўйинг. Тиш учун тиш, қўл учун қўл, оёқ учун оёғини кесинг.
            </p>
            <p>
              Агар жиноятчини ўлимга ҳукм қилиб, оғочга оссангиз, жасади кечаси билан ёғочда қолмасин. Уни ўша куниёқ дарахтдан туширинг, чунки оғочга осилган — лаънати. Худо берган юртни булғаманглар.
            </p>
            <p>
              Бировнинг ҳўкизи ё қўйи адашиб қолганини кўрсанг, ўзингни кўрмасликка солма, эгасига олиб бориб бер. Эгаси узоқда яшаса ё эгасини танимасанг, уйингга олиб келиб, то эгаси олиб кетмагунча парвариш қил. Нафақат ҳўкиз ёки қўй, ҳар қандай нарсада шу йўсинда иш тут. Ўзингни кўрмаганга солма.
            </p>
            <p>
              Уй қурсанг, томининг тепасини панжара билан иҳота қил. Акс ҳолда бирортаси томга чиқиб йиқилиб тушса, гуноҳи сенинг бўйнингга ёзилади.
            </p>
            <p>
              Кимдир хотин олсаю кейин уни ёқтирмай “мен уйланган қиз қиз чиқмади” деб гап тарқатса, қизнинг ота-онаси қизлик белгисини олиб келиб шаҳар оқсоқолларига кўрсатсин. Оқсоқоллар куёвни қамчилатиб, қайнотасига юз мисқол кумуш пул тўлашга мажбур қилишсин. Чунки у халқ олдида қизни бадном қилди. Энди тоабад хотинини талоқ қила олмайди.
            </p>
            <p>
              Бироқ айтгани тўғри бўлиб, хотини ҳақиқатан қиз чиқмаган бўлса, келинни отасининг эшигига олиб келиб тошбўрон қилинглар. У отасининг уйида фоҳишалик қилиб элга иснод келтирди. Шу йўл билан ёмонликни орангиздан йўқотасизлар.
            </p>
            <p>
              Агар кимдир эри бор хотин билан қўшилса, иккаласини ўлим жазосига ҳукм қилинглар. Шу тарзда Исроилдан ёмонликни йўқотасизлар.
            </p>
            <p>
              Кимдир бошқа бировга унаштирилган қиз билан шаҳарда учрашиб қўшилса, иккаласини ўлгунча тошбўрон қилинглар. Эркакни — бировнинг қаллиғига тажовуз қилгани учун, қизни эса — шаҳарда бўлатуриб бақирмагани учун.
            </p>
            <p>
              Мабодо бу иш одам йўқ жойда содир бўлган бўлса, эркакни ўлдиринглар, қизга эса ҳеч нарса қилманглар, чунки у балки тажовуз қурбони, бақирган бўлса ҳам, уни ҳеч ким эшитмаган, ҳеч ким қутқара олмагандир.
            </p>
            <p>
              Агар кимдир унаштирилмаган қиз билан қўшилгани учун ушланса, у эркак қизнинг отасига пул жарима тўлайди ва қизни никоҳига олади. Чунки у бу қизга тажовуз қилди, энди уни умр бўйи талоқ қила олмайди
            </p>
            <p>
              Ҳожатга чиқиш учун қароргоҳдан ташқарида жой ажратинглар. Ўзингиз билан қозиқ олинг. Эҳтиёжингизни қондиргач, чуқурни кўмиб қўйинглар. Қароргоҳингизни муқаддас тутинг, чунки Оллоҳ сизларни душманлардан қўриқлаш учун ҳамиша орангизда. Тағин У қароргоҳда нажосат кўриб сизлардан юз ўгирмасин!
            </p>
            <p>
              Агар бирорта қул эгасидан қочиб юртингизга паноҳ излаб келса, уни эгасига топширманглар. У ўзига жой танлаб орангизда яшайверсин. Унга зулм қилманглар.
            </p>
            <p>
              Худога назр атасангиз, кечиктирмай назрингизни адо қилинг, акс ҳолда бўйнингизга гуноҳ ёзилади. Назр олмаган бўлсангиз гуноҳкор бўлмайсиз. Лекин ўз ихтиёрингиз билан Оллоҳга бирор нарсани атасангиз, албатта бажо келтиринг.
            </p>
            <p>
              Қўшниларингизнинг узумзорига кирсангиз, хоҳлаганча енг. Лекин идишга солиб олиб кетманг. Бировнинг даласига борганда ҳам қўлингиз билан бошоқ терсангиз бўлади, лекин экинига ўроқ солманг.
            </p>
            <p>
              Қарз берсанг, тегирмон тошини гаровга олма. Акс ҳолда унинг ҳаётини гаровга олган бўласан.
            </p>
            <p>
              Ким одам ўғирлаб қул қилса ё сотса, ўлдирилсин. Шу тариқа орангиздан ёвузликни йўқотасизлар
            </p>
            <p>
              Бировга ниманидир қарз берсанг, унинг уйига гаров олиш учун кирма. Ташқарида кутиб тур. Қарз олаётган одам ўзи сенга гаровни кўчага олиб чиқиб берсин
            </p>
            <p>
              Камбағалнинг ёпинчиғини гаровга олсанг, хотиржам ухлашга ётма. Ўраниб ухлаши учун қуёш ботгунча уни қайтариб бер. Шунда у сени дуо қилади, Худо олдида яхши амал қилган бўласан.
            </p>
            <p>
              Камбағал  одамларни ишга ёлласанг, ўз халқингдан ё мусофир бўлишидан қатъи-назар зулм қилма. Ҳақини ҳар куни қуёш ботмасдан тўла, чунки унинг ҳаёти ана шу пулга боғлиқ. Шунда у сенинг устингдан Худога арз қилмайди, гуноҳкор бўлмайсан.
            </p>
            <p>
              Ота фарзандининг гуноҳи учун ўлдирилмасин. Фарзандлар оталарининг гуноҳи учун ўлдирилмасин. Ҳар кимни ўз гуноҳи учун жазоланглар.
            </p>
            <p>
              Бошқа халқ вакилларини ё етимларни ҳукм қилаётганда уларнинг ҳаққига зулм қилманг. Беванинг кийимини гаровга олманг. Ўзингиз ҳам Мисрда қул бўлганингизни, Оллоҳ сизларни у ердан озод қилиб олиб чиққанини эсдан чиқарманг.
            </p>
            <p>
              Далада ҳосил йиғаётганда, бир боғи ёдингдан кўтарилиб қолиб кетса, олиб келаман, деб қайтиб борма. У орангизда яшаётган бошқа халқларга, етим ва беваларга қолсин. Ўшанда Оллоҳ, қўл урган ҳар бир ишингга барака беради.
            </p>
            <p>
              Зайтун дарахтини қоққандан кейин қолган-қутганини йиғиб оламан, деб устига чиқма. Қолгани орангизда яшаётган бошқа халқ вакилларига, етимларга ва беваларга қолсин. Узум узганда ҳам ортингизда қолганини оламан, деманглар. Мусофирлар, етим-есирлар есин. Мисрда қул бўлганингизни, ким сизларни қулликдан озод қилганини эсдан чиқарманг. Шунинг учун Оллоҳ бу амрларни сизларга нозил қилди.
            </p>
            <p>
              Ғалла янчаётган ҳўкизнинг оғзини тўсманг.
            </p>
            <p>
              Тарози тошларингиз бири катта, бири кичик бўлмасин. Уйингизда бири катта, бири кичик ўлчовлар бўлмасин. Умрим узоқ бўлсин, десангиз, тошларингиз ҳам, ўлчовларингиз ҳам ҳалол ва тўғри бўлсин. Адолатсизлик қиладиганларнинг ҳаммаси Оллоҳнинг назарида жирканчликдир
            </p>
          </div>

          <div className='paragraph_heading'>
            <p> Шариат аҳдини бузганларга бериладиган лаънатлар  </p>
          </div>

          <div className='main_text'>
            <p>
              Мен сизларга айтган бу амрларнинг ҳаммасига риоя қилинглар.   Бут ясаб яширинча бирон жойга ўрнатсанг лаънати бўласан.
            </p>
            <p>
              Отанг ё онангни хор қилсанг — лаънати бўласан.
            </p>
            <p>
              Чегарани бузиб қўшнисининг ерига тажовуз қилган ё кўр-сўқирни йўлдан адаштирган — лаънати.
            </p>
            <p>
              Орангларда яшаётган бошқа миллат вакилларига ё етим-есирларга адолатсизлик қилган — лаънати.
            </p>
            <p>
              Яқинини яширинча ўлдирган — лаънати.
            </p>
            <p>
              Пора олиб, адолатсизлик қилган, бегуноҳ одамнинг қонини тўккан — лаънати.
            </p>
            <p>
              Худонинг амрларини бажармайдиган, риоя қилмайдиган одамлар лаънатидир.  Яширин нарсалар Оллоҳга хос, нозил бўлган нарсалар эса бизга ва фарзандларимизга амал қилишимиз учун берилган».
            </p>
            <p className="vitalic">
              Мусо (а.с.) бу амрларни эълон қилаётганларида, ҳар сафар “лаънати” сўзини такрорлар эканлар, Бани Исроилнинг ўн икки қабиласи баланд овоз билан “Амийн” деб жавоб берар эди. Шу тахлитда халқ, шариат амрларини ким бузса лаънати бўлади, деб Оллоҳ (с.в.т.) билан аҳду паймон қабул қилди.
            </p>
            <p>
              «Агар Раббимизга итоат этмасангиз, бошингизга лаънатлар ёғилади, — дедилар Мусо пайғамбар. —  Оллоҳни тарк қилганингиз учун қилган ишларингиз касод бўлади. Устингизга кулфатлар ёғади. Юртингизга вабо келиб, қанча-қанча одам қирилиб кетади. Сил ва иситма, безгак ва терлама каби касалликлар ортингиздан қувлайди, уларга даво топмайсиз.
            </p>
            <p>
              Душманлар олдида тиз чўкасиз. Бир йўлда уларга ҳужум қилсангиз, етти йўлда улардан қочасиз. Мурдаларингиз ўлакса қушларга, йиртқич ҳайвонларга ем бўлади.
            </p>
            <p>
              Оллоҳ сизларни бегона халқларга топширади.  Худо юборган душманларга хизмат қилиб, очу яланғоч юрасиз, муҳтож бўласиз. Душманлар бўйнингизга темир бўйинтуруқ солади.
            </p>
            <p>
              Оллоҳ сизларни элу халқлар орасида пароканда қилади. Ором тополмайсиз, ҳаётингиз қил устида тургандай, кечаю кундуз ўлимдан қўрқиб яшайсиз.
            </p>
            <p>
              Лекин вақти келиб, Оллоҳнинг аҳдини эсга олсангиз, Оллоҳга юз буриб, бутун онгингиз билан, бутун вужудингиз билан Унга таслим бўлсангиз, Оллоҳ сизларга раҳм қилади, ҳаётингизни яхшилайди. Ҳатто дунёнинг узоқ юртларига сургун қилинган бўлсангиз ҳам, сизларни йиғиб келиб, юртингизга қайтаради.
            </p>
            <p>
              Юракларингизни хатна қилиб поклайди. Шундан сўнг Оллоҳни бутун онгингиз билан, бутун жонингиз билан сева оласиз. Ҳаётингиз фаровон бўлади.  Раббингизга бўйсунасиз, амрларига риоя қиласиз. Қўл урган ҳар бир ишингизга барака инади, молларингиз кўпайиб, ерингиз баракали бўлади. Шундай экан, Оллоҳга бутун онгингиз билан, вужудингиз билан таслим бўлинг.
            </p>
            <p>
              Мен бугун сизларга бераётган бу амр жуда ҳам қийин, ё қўл етмас даражадаги амр эмас. У осмонда эмаски, “ким осмонга чиқади, уни бизга олиб тушади?” десангиз. Ё денгизнинг нариги томонида эмаски, “ким уёққа ўтиб олиб келади, то биз бажарсак” десангиз. Бу амр сизларга жуда ҳам яқин: оғзингизда, онгингизда, қалбингиздадир. Сизлар уни бажара оласизлар.
            </p>
            <p>
              Мана, мен бугун олдингизга ҳаёт ва ўлимни, яхшилик ва ёмонликни қўйдим.  Еру осмон шоҳид, баракани ва лаънатни қўйдим. Биродарлар, ҳаётни танланг. Шунда сизлар ҳам, фарзандларингиз ҳам яшайсизлар. Оллоҳни севинг, Унга таслим бўлинг. Унга суянинг, чунки умрингиз узоқлиги Оллоҳдан.
            </p>
          </div>

          <div className='paragraph_heading'>
            <p> МУСО ПАЙҒАМБАРНИНГ ВАСИЯТИ </p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'
              style={{ display: visibleBubbles[2] ? 'block' : 'none' }}
              onClick={() => handleSupClick(2)}
            >
              <p >
                <sup>2</sup> Яъқубий, “Тарих”, 1-жилд, 45-46 бетлар.
              </p>
            </div>
            <p onClick={() => handleSupClick(2)}>
              Шундай қилиб, Мусо (а.с.) бутун Бани Исроилни тўплаб, Оллоҳ нозил қилган қонунларни ўқиб бердилар. Кейин дедилар: «Мана, мен бир юз йигирма ёшга кирдим. Бошқа сизларга раҳбарлик қилолмайман. Оллоҳ менга, “Ўрдун дарёсининг у томонига ўтмайсан”, деб айтди. Энди сизларга Юъшо раҳбарлик қилади.   Мен бугун сизларга ўқиб берган сўзларнинг ҳаммасини кўз қорачиғидай асранглар. Болаларингизга ҳам уларга қаттиқ риоя қилишни буюринглар.<sup>2</sup> Бу сўзлар бекор сўзлар эмас, балки ҳаёт учун муҳим бўлган сўзлар. Мана шу калималар туфайли умрингиз узоқ ва бахтли бўлади».
            </p>
            <p>
              Кейин Юъшо (а.с.) ни чақириб бутун халқ олдида: «Дадил бўл, ботир бўл! Оллоҳ ота-боболаримизга ваъда қилган юртга халқимизни сен олиб кирасан. Оллоҳнинг Ўзи сенга раҳнамолик қилади, сен билан бирга бўлади. Қўрқма, У сени ҳеч қачон якка қўймайди, ҳеч қачон ташлаб кетмайди», дедилар.
            </p>
            <p>
              Кейин Оллоҳ таоло берган қонунларнинг ҳаммасини охиригача ёзиб, Аҳд сандиғига жойлаштирдилар ва Исроил халқини дуо қилиб, улар билан хайрлашдилар.
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>  МУСО (А.С.) НИНГ ВАФОТИ  </p>
          </div>

          <div className='main_text'>
            <p>
              Ўша куни Худо Мусо пайғамбарга: «Тоққа чиқ, Мен Бани Исроилга берадиган юртни кўрасан. Кейин бу дунёдан кўз юмиб ота-боболаринг сафига қўшиласан», деди.
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'
              style={{ display: visibleBubbles[3] ? 'block' : 'none' }}
              onClick={() => handleSupClick(3)}
            >
              <p >
                <sup>3</sup> Ўрта Ер денгизи.
              </p>
            </div>
            <p onClick={() => handleSupClick(3)}>
              Кейин Мусо (а.с.) тоққа чиқдилар. Оллоҳ таоло у кишига Донгача чўзилган Жилъодни, Афройим ва Манси соҳаларини, Оқ денгизгача<sup>3</sup> имтидод топган Яҳузо минтақасини, Жануб саҳросини, Ариҳодаги (Хурмо шаҳридаги) дарадан Суғаргача чўзилган соҳаларни кўрсатди ва: «Иброҳимга, Исҳоққа, Яъқубга, сенинг фарзандларингга бераман, деб қасам ичган сарзамин ана шу. Мана, Мен сенга бу юртни кўрсатдим, аммо у ерга киришингга ижозат бермайман», деди.
            </p>
            <p>
              Шундай қилиб, Оллоҳ айтганидек, Мусо алайҳис-салом ўша ерда, яъни, Мўоб юртида оламдан ўтдилар. Худонинг Ўзи уни Мўобда, Байт-Пеўрнинг қарама-қаршисидаги дарада дафн қилди. Бугунгача у кишининг қабри қаердалигини ҳеч ким билмайди.
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'
              style={{ display: visibleBubbles[4] ? 'block' : 'none' }}
              onClick={() => handleSupClick(4)}
            >
              <p >
                <sup>4</sup> Табарий, “Тарих”, 1-жилд, 225-бет; Ҳаким, “Мустадрок”, 2-жилд, 578-бет; Салабий, “Ароис”, 248-бет; Абулфарад ибн-и Жавзий, “Табсира”, 1-жилд, 224-бет.
              </p>
            </div>
            <p onClick={() => handleSupClick(4)}>
              Ҳазрати Мусо бир юз йигирма ёшда<sup>4</sup> оламдан ўтдилар. Лекин ўлим вақтида ҳам танаси бақувват, кўзлари яхши кўрар эдилар. Исроил халқи Мўоб даштида расулуллоҳ учун ўттиз кун тўла мотам тутди. У кишининг ўрнини эса Юъшо ибн Нун эгалладилар.
            </p>
            <p>
              Ўша-ўша Исроил халқи орасида Мусо пайғамбарга ўхшайдиган, Худога Мусо пайғамбардек яқин бўлган биронта ҳам пайғамбар чиқмади. Мусо пайғамбарнинг Мисрда кўрсатган мўъжизаларини, Бани Исроилнинг кўзи олдида қилган қудратли, буюк ишларини биронта пайғамбар амалга ошира олмади.
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
                  <span className=' bottom_arrows_for_qisas' > ортга </span>
                </div>
              </div>

              <div className='central_div'>
                <div>
                  <p>Мусо (а.с.) нинг васияти</p>
                </div>
              </div>

              <div style={{ marginRight: '0px' }} onClick={() => navigate('/qisas-uzbek/WHERE-AM-I')}>
                <div className='indicator'>
                  <span className=' bottom_arrows_for_qisas' > кейинги бет</span>
                </div>
                <div>
                  <span className='right_arrow_span' >&#8594;</span>
                </div>
              </div>
            </div>

          </article>
         
        </main >
        <aside> </aside>
      </div >
    </div >
  )
}

export default EXAMPLE