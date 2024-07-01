import React, { useState } from 'react';
import './stepper.css'

function Stepper(){
    const steps = ["Customer info", "Shipping info", "Payment"]
    const [currentStep, setCurrentStep] = useState(1)
    const [completed, setCompleted] = useState(false)


    return(
        <div className='w-full  '>
            <div className='flex justify-around items-center w-full  px-[3rem] py-[5rem]'>
               {steps?.map((step,i )=>{

                    return <div className= {`stepItem ${currentStep === i+1 && "active"} ${(currentStep > i+1 || completed) && "complete"}`}>
                        <h3 className='step'>
                           { i+1}
                        </h3>
                        <p className='text-gray-700'>{step}</p>
                    </div>

            })}
            </div>
            <div className='flex justify-center'>
                <button className='px-6 py-3 bg-blue-500 text-white active:bg-blue-700' 
                onClick={()=>{currentStep === steps.length? setCompleted(true):setCurrentStep((prev)=>prev+1)}}>
                     {currentStep === steps.length?"Finish":"Next"}
                </button>
            </div>
        </div>
    );
}




export default Stepper;
