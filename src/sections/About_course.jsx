//react icons
import { IoIosCheckmark } from "react-icons/io";

function About_course() {
  return (
    <div className="mb-[40px]" id="about_course">
      {/* <p className="text-[#e03838] mb-[30px]">(#) ___________ О КУРСЕ</p> */}
      <p className="montserrat-600 text-[19px] uppercase mb-[15px]">Осознанный стиль</p>
      <p className="text-[17px] montserrat-400 mb-[20px]">
        Мой курс создан специально для девушек, которые хотят понять себя через
        стиль и научиться создавать образы, которые отражают их
        индивидуальность. Это не просто теория, а практическое руководство,
        которое поможет вам выглядеть стильно и уверенно, независимо от
        ситуации.
      </p>
      <p className="montserrat-500 font-[17px] mb-[10px] uppercase">
        На курсе ты пройдешь два модуля. В первом модуле ты ознакомишься с:
      </p>
      <ul>
        <li className="flex  items-center gap-[8px]">
          <span className="text-[28px]">
            <IoIosCheckmark />
          </span>
          <p>основами стиля;</p>
        </li>
        <li className="flex  items-center gap-[8px]">
          <span className="text-[28px]">
            <IoIosCheckmark />
          </span>
          <p>цветовыми сочетаниями;</p>
        </li>
        <li className="flex  items-center gap-[8px]">
          <span className="text-[28px]">
            <IoIosCheckmark />
          </span>
          <p>уходом за гардеробом;</p>
        </li>
        <li className="flex  items-center gap-[8px]">
          <span className="text-[28px]">
            <IoIosCheckmark />
          </span>{" "}
          <p>разновидностями стилей;</p>{" "}
        </li>
        <li className="flex  items-center gap-[8px]">
          <span className="text-[28px]">
            <IoIosCheckmark />
          </span>{" "}
          <p>и, главное, — научимся создавать свою идеальную базовую капсулу.</p>{" "}
        </li>
      </ul>
      <p className="montserrat-500 font-[17px] mt-[20px] mb-[10px] uppercase">
         Во
        втором модуле мы покопаемся глубже и научим тебя через стиль:
      </p>
      <ul>
        <li className="flex  items-center gap-[8px]">
          <span className="text-[28px]">
            <IoIosCheckmark />
          </span>
          <p>
            презентовать себя миру так, как хотелось бы именно тебе;
          </p>
        </li>
        <li className="flex  items-center gap-[8px]">
          <span className="text-[28px]">
            <IoIosCheckmark />
          </span>
          <p>
            влиять на окружение;
          </p>
        </li>
        <li className="flex  items-center gap-[8px]">
          <span className="text-[28px]">
            <IoIosCheckmark />
          </span>
          <p>добиваться успеха в нужной для тебя сфере;</p>
        </li>
        <li className="flex  items-center gap-[8px]">
          <span className="text-[28px]">
            <IoIosCheckmark />
          </span>
          <p>управлять своими ощущениями и самооценкой.</p>
        </li>
      </ul>
    </div>
  );
}
export default About_course;
