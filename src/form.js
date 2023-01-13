import React from "react";
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./index.css";

const MyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    let input_val = document.getElementById("input_val");
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");

    const myBtn = document.getElementById('btn');
    // return a random integer  from  0 t0 9
    let number1 = num1.innerText;
    let number2 = num2.innerText;
    let sum_result = parseInt(number1) + parseInt(number2);
    let res = parseInt(input_val.value);
    if (res === sum_result) {
      alert("Correct you are eligible");
      console.log(data);
      myBtn.style.backgroundColor   = "green";
    } else {
      alert("Incorrect you are not eligible");
      myBtn.style.backgroundColor   = "red";
    }
    console.log(sum_result, res, num1.value, num2.value);
    num1.innerText = Math.floor(Math.random() * 10);
    num2.innerText = Math.floor(Math.random() * 10);
    //window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="user-info-form">
    
    <h4 className="text-center mt-4 text-info"><b> Validation using REACT JS</b></h4>
    <br></br>
      <div>
        <Controller
          name="phone-input"
          control={control}
          rules={{
            validate: (value) => isValidPhoneNumber(value),
          }}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              value={value}
              required
              onChange={onChange}
              defaultCountry="IN"
              placeholder="phone number"
              id="phone-input"
            />
          )}
        />
        {errors["phone-input"] && (
          <p className="error-message">Invalid Phone</p>
        )}

        <label for="email">Email</label>
        <input
          type="text"
          required
          placeholder="email address"
          {...register("email", {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          })}
        />
        {errors.email && <p className="error-message">Invalid Email</p>}

        <p><span id="num1">1</span> + <span id="num2">11</span>?</p>       

        <input
          type="text"
          id="input_val"
          placeholder="enter captcha"
          name="username"
        />

<br></br><br></br>
        <input id="btn" type="submit" />
      </div>
    </form>
  );
};

export default MyForm;