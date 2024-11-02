import React from "react";

function QuestionWithTG() {
  return (
    <div className="mb-[100px]">
      <p className="text-[#e03838] mb-[35px]">(#) ___________ ОТДЕЛ ЗАБОТЫ</p>
      <div>
        <h3 className="montserrat-600 text-[34px] mb-[30px]">Куда задавать вопросы?</h3>
        <p className="max-w-[650px]">
          Если у вас остались вопросы о курсе или выборе тарифа, просто нажмите
          на{" "}
          <span className="montserrat-600">
            <a href="#">ОСТАЛИСЬ ВОПРОСЫ.</a>
          </span>{" "}
          Моя команда будет рада помочь вам выбрать оптимальный вариант, чтобы
          стиль стал вашим мощным инструментом в жизни!
        </p>
      </div>
    </div>
  );
}

export default QuestionWithTG;
