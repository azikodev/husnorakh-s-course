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
      <div className="lg:flex items-end md:flex md:flex-col md:gap-[10px]">
        <div class="chat chat-start ">
          <div class="chat-bubble bg-base-100 text-[#222]">
            Ну что я могу сказать. Во первых я теперь буду знать что в моих же
            вещах можно найти много луков Во вторых я действительно поняла что
            такое ОСОЗНАННЫЕ ПОКУПКИ. спасибо тебе большое. С тобой я обрела
            настоящее счастье
          </div>
        </div>
        <div class="chat chat-start ">
          <div class="chat-bubble bg-base-100 text-[#222]">
            В тех образах, которые ты мне подобрала я чувствую себя так будто
            родилась в этом 😂 Я серьезноооо. Я серьезно не ожидала этого. Очень
            важно всё таки найти свой стиль. Спасибо тебе за это
          </div>
        </div>
      </div>
      <div className="lg:flex items-end md:flex md:flex-col  md:gap-[10px]">
        <div class="chat chat-start ">
          <div class="chat-bubble bg-base-100 text-[#222]">
            Raxmat Xusnora! Mani stilimi topishga yordam berganiz uchun! Man
            ozim uchun vaqt topa olmasdim va kiyimlarimi bir biriga moslab
            kiyinishgaa ... Stillar haqida umumiy malumotlarga ega emasdim,
            lekin bilishni xohlardim va siz manga buni berganiz uchun raxmat
          </div>
        </div>
        <div class="chat chat-start ">
          <div class="chat-bubble bg-base-100 text-[#222]">
            Хуснора, здравствуйте! Хочу поблагодарить вас за помощь с
            обновлением гардероба. Честно, я не ожидала, что это так сильно
            повлияет на мою жизнь. После вашего подбора я стала чувствовать себя
            не только увереннее, но и начала замечать, что окружающие по другому
            воспринимают меня. Это отразилось не только на моём настроении, но и
            на отношениях людьми и это ощущается даже в мелочах. А вещи теперь
            не только стильные, но и удобные. Спасибо вам большое за такую
            работу!
          </div>
        </div>
        <div class="chat chat-start">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src={avatar_1}
              />
            </div>
          </div>
          <div class="chat-bubble bg-base-100 text-[#000]">
            Ну что я могу сказать. Во первых я теперь буду знать что в моих же
            вещах можно найти много луков Во вторых я действительно поняла что
            такое ОСОЗНАННЫЕ ПОКУПКИ. спасибо тебе большое. С тобой я обрела
            настоящее счастье
          </div>
        </div>
        <div class="chat chat-start">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src={avatar_2}
              />
            </div>
          </div>
          <div class="chat-bubble bg-base-100 text-[#000]">
            В тех образах, которые ты мне подобрала я чувствую себя так будто
            родилась в этом 😂 Я серьезноооо. Я серьезно не ожидала этого. Очень
            важно всё таки найти свой стиль. Спасибо тебе за это
          </div>
        </div>
        <div class="chat chat-start">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src={avatar_3}
              />
            </div>
          </div>
          <div class="chat-bubble bg-base-100 text-[#000]">
            Raxmat Xusnora! Mani stilimi topishga yordam berganiz uchun! Man
            ozim uchun vaqt topa olmasdim va kiyimlarimi bir biriga moslab
            kiyinishgaa ... Stillar haqida umumiy malumotlarga ega emasdim,
            lekin bilishni xohlardim va siz manga buni berganiz uchun raxmat
          </div>
        </div>
        <div class="chat chat-start">
          <div class="chat-image avatar">
            <div class="w-10 rounded-full">
              <img
                alt="Tailwind CSS chat bubble component"
                src={avatar_4}
              />
            </div>
          </div>
          <div class="chat-bubble bg-base-100 text-[#000]">
            Хуснора, здравствуйте! Хочу поблагодарить вас за помощь с
            обновлением гардероба. Честно, я не ожидала, что это так сильно
            повлияет на мою жизнь. После вашего подбора я стала чувствовать себя
            не только увереннее, но и начала замечать, что окружающие по другому
            воспринимают меня. Это отразилось не только на моём настроении, но и
            на отношениях людьми и это ощущается даже в мелочах. А вещи теперь
            не только стильные, но и удобные. Спасибо вам большое за такую
            работу!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
