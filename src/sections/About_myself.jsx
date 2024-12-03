import React from "react";
import authorImage from "../images/author_image.png";
function About_myself() {
  return (
    <div
      id="#about_me"
      className="flex justify-between lg:flex-row flex-col gap-[50px]  mb-[40px] "
    >
      <div className="flex flex-col gap-[10px] flex-1">
        <p className="text-[#e03838] mb-[30px]">(#) ___________ ОБО МНЕ</p>
        <h2 className="montserrat-700 lg:text-[30px] text-[20px] ">КТО Я? </h2>
        <h3 className="montserrat-700 lg:text-[30px] text-[20px]">
          ТВОЙ ПРОВОДНИК В МИР СТИЛЯ!
        </h3>
        <p className="lg:text-[17px] text-[15px] flex flex-col gap-[25px] mt-[20px] lg:hidden md:hidden">
          <div className="flex ">
            <span className="montserrat-500 mr-[30px] items-center justify-center">
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
            <div>
              <img
                className="md:w-[w-150px] lg:w-[300px] max-w-[120px] "
                src={authorImage}
                alt="author's image"
              />
            </div>
          </div>
          <p>
            Уже несколько лет я помогаю девушкам находить свой стиль, а также
            строю успешный бизнес, совмещая креатив и стратегию. Я уверена, что
            стиль — это не просто одежда, а способ проявить себя и достичь
            успеха, когда твой образ отражает твою личность и цели.
          </p>
        </p>
        <div className="hidden md:block">
          <div className="flex ">
            <div  className="lg:text-[17px] text-[15px] flex flex-col gap-[25px] mt-[20px]">
              <div className="flex ">
                <span className="montserrat-500 mr-[30px] items-center justify-center">
                  Привет! Меня зовут Хуснора , и я основательница брендов женской
                  одежды
                  <span className="montserrat-700 ">
                    <a href="https://www.instagram.com/svoboda.uz/">
                      {" "}
                      @svoboda.uz
                    </a>
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
              </div>
              <p>
                Уже несколько лет я помогаю девушкам находить свой стиль, а также
                строю успешный бизнес, совмещая креатив и стратегию. Я уверена,
                что стиль — это не просто одежда, а способ проявить себя и достичь
                успеха, когда твой образ отражает твою личность и цели.
              </p>
            </div>
            <img src={authorImage} alt="author's image" className="lg:w-[250px] w-[170px] relative left-0 lg:top-[-100px] top-[-30px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About_myself;
