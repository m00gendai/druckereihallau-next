import s from "@/styles/contactform.module.css";

interface inputProps {
  tag: string;
  type: string;
  content: string;
  pattern: string;
  formValue: {
    name: string;
    mail: string;
    message: string;
  };
  focus: {
    name: boolean;
    mail: boolean;
    message: boolean;
  };
  formValid: {
    name: boolean;
    mail: boolean;
    message: boolean;
  };
  setFormValue: Function;
  setFocus: Function;
  setFormValid: Function;
}

export default function Input({
  tag,
  type,
  content,
  pattern,
  formValue,
  focus,
  formValid,
  setFormValue,
  setFocus,
  setFormValid,
}: inputProps) {
  return (
    <div className={s.containerInput}>
      <label
        className={
          focus[tag]
            ? s.labelActive
            : formValue[tag] !== "" &&
              formValue[tag] !== undefined &&
              !focus[tag] &&
              formValid[tag]
            ? s.labelOk
            : formValue[tag] !== "" &&
              formValue[tag] !== undefined &&
              !focus[tag] &&
              !formValid[tag]
            ? s.labelNotOk
            : s.labelPassive
        }
        htmlFor={`${tag}`}
      >
        {content}
      </label>
      <input
        name={`${tag}`}
        type={`${type}`}
        placeholder=""
        required={content[content.length - 1] === "*" ? true : false}
        pattern={pattern === undefined ? null : `${pattern}`}
        onFocus={(event) =>
          setFocus({
            ...focus,
            [event.currentTarget.name]: !focus[event.currentTarget.name],
          })
        }
        onBlur={(event) => {
          setFormValid({
            ...formValid,
            [event.currentTarget.name]: event.currentTarget.checkValidity(),
          });
          setFocus({
            ...focus,
            [event.currentTarget.name]: !focus[event.currentTarget.name],
          });
        }}
        onChange={(event) =>
          setFormValue({ ...formValue, [tag]: event.currentTarget.value })
        }
        className={
          focus[tag]
            ? s.inputActive
            : formValue[tag] !== "" &&
              formValue[tag] !== undefined &&
              !focus[tag] &&
              formValid[tag]
            ? s.inputOk
            : formValue[tag] !== "" &&
              formValue[tag] !== undefined &&
              !focus[tag] &&
              !formValid[tag]
            ? s.inputNotOk
            : s.inputPassive
        }
      />
    </div>
  );
}
