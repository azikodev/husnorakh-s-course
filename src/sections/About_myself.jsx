import React from "react";
import authorImage from "../images/author_image.png";
function About_myself() {
  return (
    <div
      id="#about_me"
      className="flex justify-between lg:flex-row flex-col gap-[50px] lg:mb-[100px] mb-[40px]"
    >
      <div className="flex flex-col gap-[10px] flex-1">
        <p className="text-[#e03838] mb-[30px]">(#) ___________ ОБО МНЕ</p>
        <h2 className="montserrat-700 lg:text-[30px] text-[20px] ">КТО Я? </h2>
        <h3 className="montserrat-700 lg:text-[30px] text-[20px]">
          ТВОЙ ПРОВОДНИК В МИР СТИЛЯ!
        </h3>
        <p className="lg:text-[17px] text-[15px] hidden lg:block">
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
      <div className="md:flex sm:block gap-[50px]">
        <p className="lg:text-[17px] text-[15px] lg:hidden ">
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
          <p className="mt-[25px]">
            Уже несколько лет я помогаю девушкам находить свой стиль, а также
            строю успешный бизнес, совмещая креатив и стратегию. Я уверена, что
            стиль — это не просто одежда, а способ проявить себя и достичь
            успеха, когда твой образ отражает твою личность и цели.
          </p>
        </p>
        <img
          className=" m:w-[w-150px] lg:w-[300px] w-[200px]"
          src={authorImage}
          alt="author's image"
        />
      </div>
    </div>
  );
}

export default About_myself;
