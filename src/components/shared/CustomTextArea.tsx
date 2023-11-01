import { useState, forwardRef, useEffect } from "react"

type CustomTextAreaProps={
    labeltext: string,
    name: string
}

// NB
// containerStyle: styles the entire body which also houses the label
// inputCaseStyle: styles just the area around the icon and the input
// inputStyle: styles the input itself

// Example
{/* <CustomInput
    labeltext={"NIP Transfer Limit"}
    labelstyle={`mb-0 text-gray-400`}
    containerstyle={`border-2 border-gray-200 p-2 py-0 mb-10`}
    inputcasestyle={`border-0 h-8`}
    inputstyle={`pl-0 text-md`}
    defaultValue="1,000,000"
/> */}

const CustomTextArea =({labeltext, name} : CustomTextAreaProps)=>{

    return(
      <div className="w-full mt-3">
        <label className="mb-1 inline-block text-sm font-light">{labeltext}</label>
        <textarea 
          className="w-full p-2 resize-none rounded-sm"
          name={name}
          rows={5}
        >
        </textarea>
      </div>
    )
}

export default CustomTextArea