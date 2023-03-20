import Button from "../Button";

import { Constants } from "../../constants/form";
import style from './Lista.module.scss';

export default function Form() {
    return(
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="task">{Constants.titleTask}</label>
          <input 
            type="text"
            name="task"
            id="task"
            placeholder={Constants.taskPlaceholder}
            required
          />
        </div>

        <div className={style.inputContainer}>
          <label htmlFor="time">{Constants.titleTime}</label>
          <input
            type="time"
            step="1"
            name="time"
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>

        <Button name={Constants.button} type="button" />
      </form>
    )
  }