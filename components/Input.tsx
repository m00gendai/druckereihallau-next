import s from "@/styles/contactform.module.css";

interface inputProps {
  tag: string;
  type: string;
  content: string;
  formValue: {
    name: string;
    mail: string;
    message: string;
  };
  focus: {
    [key: string]: boolean;
  };
  formValid: {
    [key: string]: string;
  };
  setFormValue: Function;
  setFocus: Function;
  setFormValid: Function;
}

export default function Input({
  tag,
  type,
  content,
  formValue,
  focus,
  formValid,
  setFormValue,
  setFocus,
  setFormValid,
}: inputProps) {
  const hasFocus: boolean = focus[tag];

  return (
    <div className={s.containerInput}>
      <label
        className={
          hasFocus
            ? s.labelActive
            : formValue[tag] !== "" &&
              formValue[tag] !== undefined &&
              !hasFocus &&
              formValid[tag]
            ? s.labelOk
            : formValue[tag] !== "" &&
              formValue[tag] !== undefined &&
              !hasFocus &&
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
          hasFocus
            ? s.inputActive
            : formValue[tag] !== "" &&
              formValue[tag] !== undefined &&
              !hasFocus &&
              formValid[tag]
            ? s.inputOk
            : formValue[tag] !== "" &&
              formValue[tag] !== undefined &&
              !hasFocus &&
              !formValid[tag]
            ? s.inputNotOk
            : s.inputPassive
        }
      />
    </div>
  );
}
