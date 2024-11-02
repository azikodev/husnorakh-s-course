import React from "react";

function About_myself() {
  return (
    <div id="#about_me" className="flex justify-between lg:flex-row flex-col gap-[50px] lg:mb-[100px] mb-[40px]">
      <div className="flex flex-col gap-[10px]">
        <p className="text-[#e03838] mb-[30px]">(#) ___________ ОБО МНЕ</p>
        <h2 className="montserrat-700 lg:text-[30px] text-[20px] ">КТО Я? </h2>
        <h3 className="montserrat-700 lg:text-[30px] text-[20px]">
          ТВОЙ ПРОВОДНИК В МИР СТИЛЯ!
        </h3>
        <p className="lg:text-[17px] text-[15px]">
          <span className="montserrat-500 ">
            Привет! Меня зовут Хуснора , и я основательница брендов женской
            одежды
            <span className="montserrat-700 ">
              <a href="https://www.instagram.com/svoboda.uz/"> @svoboda.uz</a>
            </span>{" "}
            и{" "}
            <span className="montserrat-700">
              <a href="https://www.instagram.com/nora_uzbekistan/">
                {" "}
                @nora_uzbekistan
              </a>
            </span>
            , а также стилист с опытом в модной индустрии.
          </span>{" "}
          Уже несколько лет я помогаю девушкам находить свой стиль, а также
          строю успешный бизнес, совмещая креатив и стратегию. Я уверена, что
          стиль — это не просто одежда, а способ проявить себя и достичь успеха,
          когда твой образ отражает твою личность и цели.
        </p>
      </div>
      <div>
        <img src="https://picsum.photos/1200/1500" alt="" />
      </div>
    </div>
  );
}

export default About_myself;
