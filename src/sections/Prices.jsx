import React from "react";

//react icons
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdDoNotDisturb } from "react-icons/md";
import { MdDoNotDisturbAlt } from "react-icons/md";

function Prices() {
  return (
    <div id="prices" className="flex gap-[55px] mb-[100px] flex-col ">
      <p className="text-[#e03838] lg:mb-[30px]">(#) ___________ ТАРИФЫ</p>
      <div className="flex justify-between lg:flex-row flex-col gap-[25px]">
        <div className="card  lg:w-[400px] shadow-xl bg-[#f8f6f6]">
          <div className="card-body items-center justify-between flex-grow-0  p-[20px] border-[1px] border-[#121212] rounded-[20px] bg-[#f8f6f6]">
            <h2 className="card-title">СТАНДАРТ</h2>
            <div className="flex flex-col gap-[14px]">
              <div className="flex items-center gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <IoIosCheckmarkCircleOutline />
                </p>
                <p className="text-[.875rem] ">
                  доступ ко всем урокам в телеграм канале;
                </p>
              </div>
              <div className="flex  items-center gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <IoIosCheckmarkCircleOutline />
                </p>
                <p className="text-[.875rem] ">
                  доступ к чату со всеми участницами конкурса;
                </p>
              </div>
              <div className="flex w-[55%] gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <IoIosCheckmarkCircleOutline />
                </p>
                <p className="text-[.875rem] text-start">крутое комьюнити </p>
              </div>
              <div className="flex  items-center gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <IoIosCheckmarkCircleOutline />
                </p>
                <p className="text-[.875rem] ">
                  подарок от меня после завершения курса;
                </p>
              </div>
              <div className="flex w-[92%] gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <IoIosCheckmarkCircleOutline />
                </p>
                <p className="text-[.875rem]">
                  выпускной со всеми участницами;
                </p>
              </div>
              <div className="flex gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <MdDoNotDisturbAlt style={{ color: "red", fill: "red" }} />
                </p>
                <p className="text-[.875rem] line-through">
                  отдельная работа с кураторами в личных сообщениях, проверка
                  твоих домашних заданий, ответы на вопросы и помощь в рамках
                  курса;
                </p>
              </div>
              <div className="flex  gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <MdDoNotDisturbAlt style={{ color: "red", fill: "red" }} />
                </p>
                <p className="text-[.875rem] line-through">
                  личная работа со мной над твоей визуальной и внутренней
                  составляющей (онлайн/офлайн на твой выбор): разбор тебя как
                  личности с психологом, разбор твоего текущего гардероба, закуп
                  необходимых новых вещей, создание персонального стиля и
                  имиджа;
                </p>
              </div>
              <div className="flex gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <MdDoNotDisturbAlt style={{ color: "red", fill: "red" }} />
                </p>
                <p className="text-[.875rem] line-through">
                  бесплатная фотосессия в новых образах;
                </p>
              </div>
            </div>
            <div className="card-actions flex flex-col items-center">
              <div className="my-[20px] flex flex-col items-center">
                <p className="montserrat-500 text-[20px]">
                  Цена:{" "}
                  <span className="line-through montserrat-400 text-[16px] text-[#818181]">
                    20$ или 255.000 сум{" "}
                  </span>
                </p>
                <p className="text-[20px]"> 9,99$ или 129.000 сум </p>
              </div>
              <button className="btn hover:bg-[#838080]  bg-[#c43232] px-[44px] mt-[18px] text-[#fff]">
                <a className="bg-inherit" href="https://t.me/azikodev_support">
                  Купить
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="card  lg:w-[400px] shadow-xl bg-[#f8f6f6]">
          <div className="card-body items-center justify-between  p-[20px] border-[1px] border-[#121212] rounded-[20px] bg-[#f8f6f6]">
            <h2 className="card-title">ВИП</h2>
            <div className="flex flex-col gap-[14px]">
              <div className="flex items-center gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <IoIosCheckmarkCircleOutline />
                </p>
                <p className="text-[.875rem] ">
                  доступ ко всем урокам в телеграм канале;
                </p>
              </div>
              <div className="flex  items-center gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <IoIosCheckmarkCircleOutline />
                </p>
                <p className="text-[.875rem] ">
                  доступ к чату со всеми участницами конкурса;
                </p>
              </div>
              <div className="flex w-[55%] gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <IoIosCheckmarkCircleOutline />
                </p>
                <p className="text-[.875rem] text-start">крутое комьюнити </p>
              </div>
              <div className="flex  items-center gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <IoIosCheckmarkCircleOutline />
                </p>
                <p className="text-[.875rem] ">
                  подарок от меня после завершения курса;
                </p>
              </div>
              <div className="flex w-[92%] gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <IoIosCheckmarkCircleOutline />
                </p>
                <p className="text-[.875rem]">
                  выпускной со всеми участницами;
                </p>
              </div>
              <div className="flex gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <IoIosCheckmarkCircleOutline />
                </p>
                <p className="text-[.875rem] ">
                  отдельная работа с кураторами в личных сообщениях, проверка
                  твоих домашних заданий, ответы на вопросы и помощь в рамках
                  курса;
                </p>
              </div>
              <div className="flex  gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <MdDoNotDisturbAlt style={{ color: "red", fill: "red" }} />
                </p>
                <p className="text-[.875rem] line-through">
                  личная работа со мной над твоей визуальной и внутренней
                  составляющей (онлайн/офлайн на твой выбор): разбор тебя как
                  личности с психологом, разбор твоего текущего гардероба, закуп
                  необходимых новых вещей, создание персонального стиля и
                  имиджа;
                </p>
              </div>
              <div className="flex gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <MdDoNotDisturbAlt style={{ color: "red", fill: "red" }} />
                </p>
                <p className="text-[.875rem] line-through">
                  бесплатная фотосессия в новых образах;
                </p>
              </div>
            </div>
            <div className="card-actions flex justify-center">
              <div className="my-[20px] flex flex-col items-center">
                <p className="montserrat-500 text-[20px] ">
                  Цена:{" "}
                  <span className="line-through montserrat-400 text-[16px] text-[#818181]">
                  100$ или 1.280.000 сум{" "}
                  </span>
                </p>
                <p className="text-[20px]">  50$ или 640.000 сум </p>
              </div>
              <button className="btn hover:bg-[#838080]  bg-[#c43232] px-[44px] mt-[18px] text-[#fff]">
                <a className="bg-inherit" href="https://t.me/azikodev_support">
                  Купить
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="card  lg:w-[400px] shadow-xl bg-[#f8f6f6]">
          <div className="card-body items-center justify-between  p-[20px] border-[1px] border-[#121212] rounded-[20px] bg-[#f8f6f6] flex ">
            <h2 className="card-title">ПЛАТИНУМ</h2>
            <div className="flex flex-col gap-[14px]">
              <div className="flex items-center gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <IoIosCheckmarkCircleOutline />
                </p>
                <p className="text-[.875rem] ">
                  доступ ко всем урокам в телеграм канале;
                </p>
              </div>
              <div className="flex  items-center gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <IoIosCheckmarkCircleOutline />
                </p>
                <p className="text-[.875rem] ">
                  доступ к чату со всеми участницами конкурса;
                </p>
              </div>
              <div className="flex w-[55%] gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <IoIosCheckmarkCircleOutline />
                </p>
                <p className="text-[.875rem] text-start">крутое комьюнити </p>
              </div>
              <div className="flex  items-center gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <IoIosCheckmarkCircleOutline />
                </p>
                <p className="text-[.875rem] ">
                  подарок от меня после завершения курса;
                </p>
              </div>
              <div className="flex w-[92%] gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <IoIosCheckmarkCircleOutline />
                </p>
                <p className="text-[.875rem]">
                  выпускной со всеми участницами;
                </p>
              </div>
              <div className="flex gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <IoIosCheckmarkCircleOutline />
                </p>
                <p className="text-[.875rem] ">
                  отдельная работа с кураторами в личных сообщениях, проверка
                  твоих домашних заданий, ответы на вопросы и помощь в рамках
                  курса;
                </p>
              </div>
              <div className="flex  gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <IoIosCheckmarkCircleOutline />
                </p>
                <p className="text-[.875rem] ">
                  личная работа со мной над твоей визуальной и внутренней
                  составляющей (онлайн/офлайн на твой выбор): разбор тебя как
                  личности с психологом, разбор твоего текущего гардероба, закуп
                  необходимых новых вещей, создание персонального стиля и
                  имиджа;
                </p>
              </div>
              <div className="flex gap-[8px]">
                <p className="text-[22px] font-[700]">
                  <IoIosCheckmarkCircleOutline />
                </p>
                <p className="text-[.875rem] ">
                  бесплатная фотосессия в новых образах;
                </p>
              </div>
            </div>
            <div className="card-actions flex justify-center">
              <div className="my-[20px]">
                <p className="montserrat-500 text-[19px]">
                  Цена:{" "}
                  <span className=" montserrat-400 ">
                    800$ или 10.220.000 сум
                  </span>
                </p>
              </div>
              <button className="btn hover:bg-[#838080]  bg-[#c43232] px-[44px] mt-[18px] text-[#fff]">
                <a className="bg-inherit" href="https://t.me/azikodev_support">
                  Купить
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
