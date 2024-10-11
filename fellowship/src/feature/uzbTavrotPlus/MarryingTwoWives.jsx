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
    const numberOfCases = 9;

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
            <p> Яқуб (а.с.) нинг уйланиш  </p>
            <p>тарихи</p>
          </div>

          <div className='decor_line'>
            <p> &#8213;&#8213;  &#10044; &#8213;  &#10044;  &#8213;  &#10044;  &#8213;&#8213;   </p>
          </div>


          <div className='main_text'>
            <p>
              Ҳазрати Яъқуб у ерда бир ойча яшагандан сўнг,  тоғаси ундан: «Қариндошман деб текинга хизмат қилаверасанми? Айт, хизматингга қанча берай?» деб сўради.
            </p>

            <p>
              Лобоннинг икки қизи бор эди. Каттасининг оти Лайё, кичиги бўлса, ўша қудуқ бўйига қўйларини суғориш учун келган Роҳийла эди.
              (Роҳийла қадди-қомати келишган гўзал қиз эди. Лайё эса истараси иссиқ қиз бўлган.)
            </p>
            <p>
              Яъқуб (а.с.) Роҳийлани яхши кўрар эдилар. Шунинг учун: «Агар кичик қизингиз Роҳийлани менга берсангиз, сизга етти йил хизмат қиламан», дедилар.
            </p>
            <p>
              «Яхши, — деди Лобон. — Қизимни бегонага бергандан кўра, сенга берганим яхши-ку!»

              Шу билан ҳазрати Яъқуб, Роҳийла учун тоғасига етти йил хизмат қиладилар. Роҳийлани севгани учун етти йил у кишининг кўзида етти кундай ўтиб кетди.
            </p>
            <p>
              Етти йил ўтгандан сўнг Лобонга: «Белгиланган муддат тугади. Энди тўйга рухсат беринг», дедилар.
            </p>
          </div>

          <div className='paragraph_heading'>
            <p>
              Тўй
            </p>
          </div>

          <div className='main_text'>
            <p>
              Лобон одамларни йиғиб тўй қилди.
              Лекин кечаси Яъқубнинг олдига Роҳийлани эмас, катта қизи Лайёни олиб келди.  (Лобон қизи Лайёга, хизматини қилсин деб Зилфа деган чўрисини ҳам қўшиб берган эди.)
            </p>
            <p>
              Яъқуб (а.с.) эрталаб қарасалар, тўшакда Роҳийла эмас, Лайё ётибди! «Бу нима қилганингиз?! — дедилар ловиллаб тоғасига. — Мен етти йил Роҳийла учун сизга хизмат қилдим! Нега мени алдадингиз?!»
            </p>
            <p></p>
          </div>

          <div className='main_text'>

            <div className='speech-bubble'

              style={{ display: visibleBubbles[1] ? 'block' : 'none' }}
              onClick={() => handleSupClick(1)}


            >
              <p>
                <sup>1</sup>  Анъанага кўра, тўй етти кун давом этарди.
              </p>
            </div>

            <p onClick={() => handleSupClick(1)}>
              «Бизда катта қизи турганда кичигини эрга бермайдилар, — деб жавоб берди Лобон у кишига. — Хоҳласанг, бир ҳафта<sup>1</sup>  сабр қил, тўй ўтсин, Роҳийлани ҳам сенга бераман. Фақат яна етти йил менга хизмат қилиб берасан».
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[2] ? 'block' : 'none' }}
              onClick={() => handleSupClick(2)}


            >
              <p>
                <sup>2</sup> Ўша вақтнинг одати бўйича бир қориндан тушган опа-сингилга уйланиш мумкин эди. Лекин кейинроқ шариатда бундай амал ҳаром қилинган.
              </p>
            </div>
            <p onClick={() => handleSupClick(2)}>
              Яъқуб (а.с.) рози бўлдилар. Тўй ўтгач, бир ҳафтадан сўнг, Лобон кичик қизи Роҳийлани ҳам ҳазрати Яъқубга никоҳлаб беради.<sup>2</sup> (Роҳийлага Билҳа деган чўрисини совға қилади.) <span className="vitalic">Яъқуб пайғамбарнинг уйланиш тарихи ана шу.</span>
            </p>
            <p>
              Лекин у киши Лайёга қараганда Роҳийлани кўпроқ яхши кўрар эдилар. Лобонга кейин Роҳийла учун яна етти йил хизмат қилиб бердилар.
            </p>

            <p className="vitalic">
              Яъқуб (а.с.) нинг Роҳийла Бибига уйланиш учун ўн тўрт йил хизмат қилгани қулоққа ғалати эшитилади, шундай эмасми? Биласизми, биз ўзимиз учун қадрли деб ҳисоблаган, биз ҳақиқатан хоҳлайдиган нарсалар учун жуда катта баҳо тўлашга розимиз. Яъқуб пайғамбар учун яхши қизга уйланиш жуда ҳам муҳим бўлган экан чоғи. У киши ўзларининг бутун ҳаётини Роҳийла билан бирга ўтказишни хоҳлаган эдилар.
            </p>

            <p className="vitalic">
              Келинг, ҳозир ўзимиз ҳақимизда ҳам бир ўйлаб кўрайлик: сиз нимани ҳаётда энг муҳим деб ҳисоблайсиз? Қайси мақсад учун умрингизни ёки пулингизни сарфлаган бўлар эдингиз? Ҳозир вақтингизни нима нарса учун сарф қиляпсиз? Пулингиз ёки вақтингизни олаётган нарса ҳақиқатан ҳам шунга арзийдими ёки йўқми?
            </p>

          </div>


          <div className='paragraph_heading'>
            <p>
              РОҲИЙЛ БИЛАН ЛАЙЁНИНГ   РАҚОБАТИ
            </p>
          </div>
          <div className='main_text'>
            <p>
              Лайёни эри яхши кўрмаслигини кўриб, Оллоҳ субҳанаҳу ва таоло унга қатор фарзандлар ато қилди. Роҳийла Биби эса ҳеч туғмас эди.
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[3] ? 'block' : 'none' }}
              onClick={() => handleSupClick(3)}


            >
              <p>
                <sup>3</sup>   Роавбин деган сўз “ўғил кўрди” дегани.
              </p>
            </div>
            <p onClick={() => handleSupClick(3)}>
              Лайё (р.а.) биринчи ўғлига “Оллоҳ таоло хўрлигимни кўриб менга фарзанд берди. Энди эрим мени яхши кўради”, деб Роавбин<sup>3</sup>  деб от қўйди.
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[4] ? 'block' : 'none' }}
              onClick={() => handleSupClick(4)}


            >
              <p>
                <sup>4</sup>  «Айн» билан ёзилади, “эшитадиган” деган маънода.
              </p>
            </div>
            <p onClick={() => handleSupClick(4)}>
              Иккинчи ўғлини туққанида “Оллоҳ таоло эрим мени яхши кўрмаслигини эшитиб менга яна бир ўғил берди”, деб отини Шимъун<sup>4</sup>  қўйди.
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[5] ? 'block' : 'none' }}
              onClick={() => handleSupClick(5)}


            >
              <p>
                <sup>5</sup>  яъни, “боғлаш” деб атади.
              </p>
            </div>
            <p onClick={() => handleSupClick(5)}>
              Учинчи марта ҳомиладор бўлиб, яна ўғил туғди ва “Мен эримга уч ўғил туғиб бердим. Энди у менга боғланади” деб, отини Лобий<sup>5</sup>  қўйди.
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[6] ? 'block' : 'none' }}
              onClick={() => handleSupClick(6)}


            >
              <p>
                <sup>6</sup> Яҳузо сўзи “ҳамду сано” деган маънони беради.
              </p>
            </div>
            <p onClick={() => handleSupClick(6)}>
              Тўртинчи марта ҳам ўғил кўрди. “Оллоҳга ҳамду санолар бўлсин!” деб, отини Яҳузо<sup>6</sup>  қўйди. Ўшандан кейин туғишдан тўхтади.
            </p>
            <p>
              Роҳийла Биби эса фарзанд кўролмай, опасига ҳасад қилар эди. Бир куни ҳатто эри билан: «Менга бола беринг, бўлмаса ўламан!» деб жанжал ҳам қилди.
              «Мен нима Худоманми, сенга бола берадиган?» дедилар ҳазрати Яъқуб аччиғланиб.</p>
            <p>
              Кейин Роҳийла (р.а.): «Унда чўрим билан ётинг, менга бола туғиб берсин, мен ҳам она бўлай», деди.  Шу билан чўриси Билҳани эрига олиб берди.
            </p>
            <p>
              Билҳа ҳомиладор бўлиб, ўғил туғди.
              Роҳийла Биби: “Худо мени оқлади. Ноламни эшитиб менга фарзанд берди”, деб чақалоқнинг отини Дон қўйди.
            </p>
            <p>

            </p>
          </div>


          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[7] ? 'block' : 'none' }}
              onClick={() => handleSupClick(7)}


            >
              <p>
                <sup>7</sup>    Нафтоли сўзи “менинг олишувим” деган маънода.
              </p>
            </div>
            <p onClick={() => handleSupClick(7)}>
              Кейин Билҳа иккинчи марта ҳомиладор бўлиб, Яъқуб (а.с.) га яна бир ўғил туғиб берди.
              Бу сафар Роҳийла (р.а.): “Опам билан қаттиқ олишиб, ғолиб бўлдим” деб, боланинг отини Нафтоли<sup>7</sup>    қўйди.
            </p>

            <p>
              Лайё (р.а.) ҳам, ўзининг туғмаётганини кўриб, эрига чўриси Зилфани хотинликка берди.
              Зилфа ҳомиладор бўлиб ўғил туғди.
              Шунда Лайё: “Толеим келди” деб, болага Жод деб от қўйди.
            </p>

            <p>
              Зилфа кейин яна битта ўғил туғди.
              “Мен қандай бахтлиман, энди хотинлар мени бахтли деб чақиришади”, деди Лайё ва чақалоқнинг отини Ашир қўйди.
            </p>

            <p>
              Буғдой ўрими вақтида Роавбин даштдан бир даста меҳригиёҳ олиб келиб онаси Лайёга берди. Шунда Роҳийла Биби Лайё (р.а.) га: «Ўғлингиз олиб келган меҳригиёҳдан менга ҳам беринг», деди.
            </p>
            <p>
              «Эримни эгаллаб олганинг етмайдими? — деб жавоб берди у. — Энди ўғлим олиб келган меҳригиёҳларни ҳам олиб қўймоқчимисан?» «Бўпти, — деди Роҳийла Биби. — Меҳригиёҳларни беринг, эвазига бугун кечаси эрим сиз билан ётади».
            </p>
            <p>
              Кечқурун Яъқуб (а.с.) даштдан қайтиб келганда, Лайё Биби унинг олдига чиқиб: «Бугун мен билан ётасиз. Мен сизни ўғлим олиб келган меҳригиёҳ эвазига бир кечага сотиб олдим», деди.
            </p>

            <p>
              Яъқуб (а.с.) ўша кеча у билан ётди ва у ҳомиладор бўлиб Яъқуб (а.с.) га бешинчи марта ўғил туғиб берди. Худо Лайё (р.а.) нинг дуоларини қабул қилган эди.
            </p>
            <p></p>
          </div>
          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[8] ? 'block' : 'none' }}
              onClick={() => handleSupClick(8)}


            >
              <p>
                <sup>8</sup>  Ясокир сўзи “мукофот” деган маънода.
              </p>
            </div>
            <p onClick={() => handleSupClick(8)}>
              Лайё: “Чўримни эримга берганим учун Худо мени мукофотлади” деб, ўғлининг отини Ясокир<sup>8</sup>   қўйди.
            </p>
            <p>
              Кейин яна ҳомиладор бўлиб, Яъқуб (а.с.) га олтинчи марта ўғил туғиб берди. “Бу Худонинг менга берган ҳадяси. Эримга олти ўғил туғиб бердим. Энди мени қадрлайди”, деб отини Забулун қўйди. Кейин қиз туғиб, отини Дина қўйди.
            </p>
            <p></p>
          </div>

          <div className='main_text'>
            <div className='speech-bubble'

              style={{ display: visibleBubbles[9] ? 'block' : 'none' }}
              onClick={() => handleSupClick(9)}


            >
              <p>
                <sup>9</sup>     Юсуф деган сўз иброний тилида “қўшиб бермоқ” деган маънони англатади.
              </p>
            </div>
            <p onClick={() => handleSupClick(9)}>
              Ниҳоят Роҳийла Бибининг дуолари ҳам ижобат бўлди:
              у ҳомиладор бўлиб ўғил туғди ва: “Худо мени одамларнинг гап-сўзидан қутқарди, мендан шармандаликни олиб ташлади.
              Илоҳим менга яна бир ўғил қўшиб берсин”, деб чақалоққа Юсуф<sup>9</sup>  деб от қўйди.
            </p>
            <p></p>
          </div>

          <article className='nav_arrows'>
            <div className='flex_it space_between'>
              <div style={{ marginLeft: '0px' }}
                onClick={() => navigate(-1)}>
                <div>
                  <span className='left_arrow_span'>&#8592;</span>
                </div>
                <div className='indicator'>
                  <span className=' bottom_arrows_for_qisas' > орқага қайтиш </span>
                </div>
              </div>

              <div className='central_div'>
                <div>
                  <p>Яъқуб (а.с.) нинг уйланиши </p>
                </div>
              </div>


              <div style={{ marginRight: '0px' }} onClick={() => navigate('/qisas-uzbek/return-to-kanaan')}>
                <div className='indicator'>
                  <span className=' bottom_arrows_for_qisas' >  Канъонга қайтиш</span>
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
