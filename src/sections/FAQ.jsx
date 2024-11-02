import React from "react";
//react icons
import { FcCheckmark } from "react-icons/fc";
function FAQ() {
  return (
    <div className="lg:mb-[100px] mb-[50px]" id="FAQ">
      <p className="text-[#e03838] mb-[55px]">
        (#) ___________ ВОПРОСЫ И ОТВЕТЫ
      </p>
      <div className="flex  flex-col gap-[22px]">
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            ДЛЯ КОГО ЭТОТ КУРС?
          </div>
          <div className="collapse-content">
            <h3 className="montserrat-500 text-[18px] mb-[6px]">
              Мой курс подходит для того, кто:
            </h3>
            <ul className="flex flex-col gap-[4px]">
              <li className="flex gap-[8px]">
                <p>
                  <FcCheckmark className="text-[22px]" />
                </p>
                <p>
                  Хочет понять, как стиль влияет на жизнь и на то, как вас
                  воспринимают люди.
                </p>
              </li>
              <li className="flex gap-[8px]">
                <p>
                  <FcCheckmark className="text-[22px]" />
                </p>
                <p>
                  Хочет научиться комбинировать вещи и создавать собственный
                  уникальный образ.
                </p>
              </li>
              <li className="flex gap-[8px]">
                <p>
                  <FcCheckmark className="text-[22px]" />
                </p>
                <p>
                  Интересуется, как можно выразить свою индивидуальность через
                  одежду и как использовать стиль для достижения своих целей.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium uppercase">
            ЧТО ТЫ получишь ОТ МОЕГО КУРСА?
          </div>
          <div className="collapse-content">
            <ul className="flex flex-col gap-[4px]">
              <li className="flex gap-[8px]">
                <p>
                  <FcCheckmark className="text-[22px]" />
                </p>
                <p> Знания о том, как выбрать стиль, подходящий тебе лично.</p>
              </li>
              <li className="flex gap-[8px]">
                <p>
                  <FcCheckmark className="text-[22px]" />
                </p>
                <p>
                  Практические навыки создания гардероба, который отражает твою
                  личность.
                </p>
              </li>
              <li className="flex gap-[8px]">
                <p>
                  <FcCheckmark className="text-[22px]" />
                </p>
                <p>
                  Умение сочетать цвета, материалы и формы, чтобы выглядеть
                  гармонично и стильно.
                </p>
              </li>
              <li className="flex gap-[8px]">
                <p>
                  <FcCheckmark className="text-[22px]" />
                </p>
                <p>
                  Осознание роли стиля в жизни и как он может помочь вам в
                  общении и достижении целей.
                </p>
              </li>
              <li className="flex gap-[8px]">
                <p>
                  <FcCheckmark className="text-[22px]" />
                </p>
                <p>
                  Поддержку и разбор личных вопросов по стилю в рамках курса.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
