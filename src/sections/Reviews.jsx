import React from "react";
// images
import avatar_1 from "../images/avatar_1.webp";
import avatar_2 from "../images/avatar-2.jpg";
import avatar_3 from "../images/avatar-3.png";
import avatar_4 from "../images/avatar.png";
function Reviews() {
  return (
    <div className="flex flex-col gap-[10px]">
      <p className="text-[#e03838] mb-[30px] uppercase">
        (#) ___________ обзоры
      </p>

      <div className="carousel w-full text-[14px]">
        <div id="slide1" className="carousel-item relative w-full">
          <div class="chat chat-start ">
            <div class="chat-bubble bg-[#f1f1f1] text-[#222]">
              Ну что я могу сказать. Во первых я теперь буду знать что в моих же
              вещах можно найти много луков 😅 Во вторых я действительно поняла
              что такое ОСОЗНАННЫЕ ПОКУПКИ. спасибо тебе большое. С тобой я
              обрела настоящее счастье 😍❤️😘
            </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div class="chat chat-start ">
            <div class="chat-bubble bg-[#f1f1f1] text-[#222]">
              В тех образах, которые ты мне подобрала я чувствую себя так будто
              родилась в этом 😂 Я серьезноооо. Я серьезно не ожидала этого.
              Очень важно всё таки найти свой стиль. Спасибо тебе за это ❤️❤️💋
            </div>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div class="chat chat-start ">
            <div class="chat-bubble bg-[#f1f1f1] text-[#222]">
              Raxmat Xusnora! Mani stilimi topishga yordam berganiz uchun! Man
              ozim uchun vaqt topa olmasdim va kiyimlarimi bir biriga moslab
              kiyinishgaa ... Stillar haqida umumiy malumotlarga ega emasdim,
              lekin bilishni xohlardim va siz manga buni berganiz uchun raxmat
              ❤️‍🔥❤️‍🔥✨
            </div>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <div class="chat chat-start ">
            <div class="chat-bubble bg-[#f1f1f1] text-[#222]">
              Хуснора, здравствуйте! Хочу поблагодарить вас за помощь с
              обновлением гардероба. Честно, я не ожидала, что это так сильно
              повлияет на мою жизнь. После вашего подбора я стала чувствовать
              себя не только увереннее, но и начала замечать, что окружающие по
              другому воспринимают меня. Это отразилось не только на моём
              настроении, но и на отношениях людьми и это ощущается даже в
              мелочах. А вещи теперь не только стильные, но и удобные. Спасибо
              вам большое за такую работу! 
            </div>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <div class="chat chat-start ">
            <div class="chat-bubble bg-[#f1f1f1] text-[#222]">
              Хуснора, здравствуйте! Хочу поблагодарить вас за помощь с
              обновлением гардероба. Честно, я не ожидала, что это так сильно
              повлияет на мою жизнь. После вашего подбора я стала чувствовать
              себя не только увереннее, но и начала замечать, что окружающие по
              другому воспринимают меня. Это отразилось не только на моём
              настроении, но и на отношениях людьми и это ощущается даже в
              мелочах. А вещи теперь не только стильные, но и удобные. Спасибо
              вам большое за такую работу! 😊❤️❤️❤️
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col  gap-[16px] max-w-[750px] my-[30px] mx-[14px] lg:ml-[60px] text-[18px]">
        <p>
          <span className="font-semibold">Меня часто спрашивают о стиле.</span>{" "}
          За годы работы в индустрии я заметила, что многих волнуют вопросы:
          “Как выбрать одежду, чтобы выглядеть круто и уверенно?”, “Какой стиль
          мне подходит?” или “Как одеваться так, чтобы это действительно
          работало на меня?”
        </p>
        <p>
          Мне хочется ответить на все эти вопросы более глубоко, поэтому я
          решила создать <span className="font-semibold">онлайн-курс</span>,
          который поможет вам разобраться в стиле и использовать его как
          инструмент для создания идеального образа.
        </p>
      </div>
    </div>
  );
}

export default Reviews;
