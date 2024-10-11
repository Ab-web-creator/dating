import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './stories.css'


const SignOfCovenant = () => {

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
            <p>    ИБРОҲИМ (а.с.) Аҳдининг  </p>
            <p>аломати</p>
          </div>

          <div className='decor_line'>
            <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
          </div>

          <div className='main_text'>
            <p>Орадан ўн уч йил вақт ўтди. Бир куни Оллоҳ (ва ҳува ъала кулли шайъин қодир) яна Иброҳим (а.с.) га аён бериб деди: «Иброҳим, аҳдимизга содиқ бўл, дўстлигимизни қадрла, тақво эгаси бўл. Мен ҳамиша сен билан бирга бўламан, сени ҳимоя қиламан. Наслингни ғоят кўпайтираман».
            </p>
            <p>
              Расулуллоҳ юзини саждага қўйдилар.
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[1] ? 'block' : 'none' }}
              onClick={() => handleSupClick(1)}


            >
              <p>
                <sup>1</sup> Бақара сурасида Оллоҳ таолонинг Иброҳим (а.с.) га: <span className="boldItalic">«Мен албатта сени одамларга имом қилмоқчиман»,</span> деган сўзлари бор (2:124).
              </p>
            </div>
            <p onClick={() => handleSupClick(1)}>
              «Сен кўп миллатларга ота<sup>1</sup>  бўласан,  — деди Худо. —  Мен сендан кўп фарзандлар, халқлар яратаман. Сенинг наслингдан подшоҳлар дунёга келади.
              Мен аҳдимни сен билан ва сенинг наслинг билан авлодма-авлод давом этдираман.
              Сен ҳозир мусофир бўлиб юрган бу ерни сенга ва сенинг авлодларингга абадий мулк қилиб бераман. Менинг ҳимоям остида бўласизлар», деди.
            </p>
            <p>
              «Фақат аҳдимга риоя қилинглар: сен ҳам, сенинг фарзандларинг ҳам ҳамиша аҳдимга содиқ бўлинглар. Орангиздаги ҳар бир эркак, закари учидаги терини кестирсин. Бу — ўртамиздаги аҳднинг белгиси бўлади.   Ўғил болаларни саккиз кунлигида хатна қилинглар. Қулларни ҳам, орангизда туғиладими, бегона халқлардан сотиб оласизми, хатна қиласизлар.  Танангиздаги бу белги Менинг сизлар билан қилган аҳдим ўчмас эканлигига далилдир.  Хатна бўлмайман деган одамни орангиздан йўқ қилинг. Чунки у Менинг аҳдимни рад қилган бўлади», деди.
            </p>
          </div>


          <div className='paragraph_heading'>
            <p>  ИСҲОҚ — «КУЛАДИ» ДЕМАКДИР </p>
          </div>


          <div className='main_text'>
            <p className="boldItalic">
              «Яна Биз (Иброҳимга) солиҳ бир пайғамбар бўлажак Исҳоқнинг хушхабарини бердик. Ва унга ҳам, Исҳоққа ҳам барака ато этдик» <span className="vitalic">(Вас-Соффот сураси 37:112-113).</span>
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'
              style={{ display: visibleBubbles[2] ? 'block' : 'none' }}
              onClick={() => handleSupClick(2)}
            >
              <p>
                <sup>2</sup>  Соро сўзи “малика” деган маънони англатади.
              </p>
            </div>
            <p onClick={() => handleSupClick(2)}>
              «Хотинингни бошқа Сора деб чақирмайсан, — деди Парвардигор гапини давом эттириб. — Бундан кейин унинг оти Соро.<sup>2</sup> Мен уни баракалайман. У кўп халқларнинг онаси бўлади. Унинг наслидан подшоҳлар дунёга келади». </p>
            <p>
              Иброҳим (а.с.) саждага бош қўйдилар. Кўнглидан, мен бир кам юзга чиқдим, Соро тўқсон яшар, деган фикрлар ўтди. Ва кулгиси қистаб: «Соро энди шу ёшда бола туғармикан?» деб ўйладилар. Кейин: «Ё Худоё, ўғлим Исмоилни баракала!» дедилар.
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[3] ? 'block' : 'none' }}
              onClick={() => handleSupClick(3)}


            >
              <p>
                <sup>3</sup> “Исҳоқ” сўзининг маъноси “у кулади” демакдир.
              </p>
            </div>
            <p onClick={() => handleSupClick(3)}>
              «Иброҳим! — деди Худо. — Кейинги йил Соро сенга ўғил туғиб беради.
              Исмини Исҳоқ қўясан.<sup>3</sup> Мен сен билан қилган аҳдимни ана шу ўғлинг орқали давом эттираман».
            </p>
            <p>
              «Исмоил учун хотиринг жам бўлсин, — деди Худо кейин. — Мен албатта уни баракалайман. Наслини кўпайтираман, ундан катта бир миллат яратаман. У ўн икки подшоҳнинг отаси бўлади».
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[4] ? 'block' : 'none' }}
              onClick={() => handleSupClick(4)}


            >
              <p>
                <sup>4</sup> Абдурразоқ, “Мусаннаф”, 2-жилд, 175-бет; Ибн Аби Шайбо, “Мусаннаф”, 11-жилд, 522-бет; Бухорий, “Адаб-ул муфрад”, 322-бет.
              </p>
            </div>
            <p onClick={() => handleSupClick(4)}>
              Расулуллоҳ ўша куннинг ўзида Худонинг буйруғини бажаришга тушдилар: ўз уйида туғилган ва сотиб олинган ҳамма эркакларни ва ўғил болаларни хатна қилдилар.
              Ўшанда у киши тўқсон тўққиз ёшда,  Исмоил (а.с.) эса ўн уч ёшда эдилар.
              Шу тартибда, ҳазрати Иброҳим, Исмоил (а.с.), хизматкорлар, хонадонида туғилган ва сотиб олинган ҳамма эркаклар ўша куннинг ўзида хатна бўлдилар.<sup>4</sup>
            </p>
          </div>

          <div className='paragraph_heading'>
            <p> УЧТА МЕҲМОН ТАШРИФИ </p>
          </div>


          <div className='main_text'>
            <p className='boldItalic'>
              «Сизга Иброҳимнинг иззат-икромли меҳмонлари ҳақидаги хабар келдими? ...Улар: «Қўрқма», дедилар ва (Иброҳимга) бир доно ўғил хушхабарини бердилар» <span className='vitalic'>(Ваз-Зориёт сураси, 51:24,28)</span>.
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'
              style={{ display: visibleBubbles[5] ? 'block' : 'none' }}
              onClick={() => handleSupClick(5)}
            >
              <p>
                <sup>5</sup> Ўшанда у кишининг чодири Мумарраҳ дарахти яқинида эди.
              </p>
            </div>
            <p onClick={() => handleSupClick(5)}>
              Иброҳим (а.с.) бир куни чодирининг<sup>5</sup>  эшиги олдида ўтирган эдилар. Кун тиккага келган вақт. Бир пайт қарасалар, тўғрисида уч одам турибди. <span className="vitalic"> Улар Оллоҳнинг иродасини Расулуллоҳга аён этиш учун Оллоҳ тарафидан юборилган фаришталар эди. </span> Дарров ўрнидан туриб, югуриб уларнинг олдига чиқдилар. Ерга бош уриб таъзим қилиб: «Ё ҳазратим, марҳамат қилинг, қулингиздан юз ўгирманг.
              Сув олиб келишсин, оёқларингизни ювиб, бир пас дарахт соясида дам олинглар.
              Мен ейишга у-бу нарса келтирай. Сафарингизни кейин давом эттирарсиз», дедилар.

            </p>
            <p>
              Улар: «Яхши, айтганингдек бўлсин», дейишди.
            </p>
            <p>
              Иброҳим (а.с.) югуриб чодирга кирдилар-да Соро Бибига: «Тез бўл, энг яхши ундан уч тоғора хамир қилиб патир ёп», дедилар.
              Ўзи бўлса югуриб бориб, хизматкорига подадан битта семиз бузоқни кўрсатдилар. Хизматкори дарров уни сўйиб, пиширишни бошлади.
              Гўшт пишгач расулуллоҳ уни сут ва сузма билан бирга дарахт тагида ўтирган меҳмонларнинг олдига қўйдилар. Лекин...
            </p>
            <p className="boldItalic">
              «Уларнинг қўллари (таомга) етмаётганини кўриб, улардан ҳайрон бўлди ва ичида хавфсиради. Улар: «Қўрқма, биз Лут қавмига юборилганмиз», дедилар» <span className="vitalic">(Ҳуд сураси 11:70).</span>
            </p>
            <p>
              Кейин меҳмонлар: «Хотининг Соро қани?» деб сўрадилар. «Шу ерда, чодирда», деб жавоб бердилар Иброҳим (а.с.).
            </p>
          </div>

          <div className='paragraph_heading'>
            <p> «КЕЛАСИ ЙИЛ СОРО ЎҒИЛ КЎРАДИ» </p>
          </div>


          <div className='main_text'>
            <p>
              «Келаси йил шу пайтларда мен қайтиб келаман, — деди меҳмонлардан бири. — Ўшанда хотининг Соронинг қўлида ўғилчаси бўлади».
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[6] ? 'block' : 'none' }}
              onClick={() => handleSupClick(6)}


            >
              <p className='boldItalic'>
                <sup>6</sup>  «Турган хотин кулди. Биз унга (Сорога) Исҳоқ ҳақида башорат бериб эдик... У: «Вой шўрим, ўзим кампир бўлсам, эрим чол бўлса, қандай туғаман?!» деди. Улар: «Оллоҳнинг амридан ажабланасанми? Бу — хонадонга Оллоҳнинг раҳмати ва баракалари», деди».
              </p>
              <p className='who_wrote'>(Ҳуд сураси 11:71-73)</p>
            </div>
            <p onClick={() => handleSupClick(6)}>
              Бу пайт Соро (р.а.) Иброҳим (а.с.) нинг орқасида, чодир ичида суҳбатга қулоқ солиб турган эди.  Меҳмоннинг гапини эшитиб, ичида кулди.<sup>6</sup>  Чунки ҳазрати Иброҳим ҳам, ўзи ҳам анча ёшга бориб қолган, ой кўриш одати-ям аллақачон тўхтаган эди.
              «Қариганимда менга бу шодлик насиб қилармикан? — деган фикр хаёлидан ўтди. — Эрим ҳам қариб қолган...».
            </p>
            <p>
              Шунда Худонинг элчиси Иброҳимга: «Соро нега кулди? Нега фарзанд кўришига ишонмайди? — деди. —
              Оллоҳга иложсиз нарса борми? Келаси йил мана шу вақтда мен қайтиб келаман, ўшанда Соронинг қўлида чақалоғи бўлади», деди.
            </p>
            <p>
              «Кулганим йўқ», деди Соро онамиз қўрққанидан. Лекин у: «Йўқ, кулдинг», деди.
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
                  <p>Аҳднинг Аломати</p>
                </div>
              </div>

              <div style={{ marginRight: '0px' }} onClick={() => navigate('/qisas-uzbek/sadom-gamorra')}>
                <div className='indicator'>
                  <span className=' bottom_arrows_for_qisas' >  Садўм ва Ғамўра</span>
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

export default SignOfCovenant
