
import React from 'react'
import AccordionItem from './AccordionItem'

const AccordionList  = (props) => {

  

    return (
        <>
            <div className="accordion my-5" id="accordionFlushExample">
             
             {props.items.questions.map((e, index)=>{
                 return <AccordionItem key={index} item={e}/>
             })}

                
  
            </div>
        </>
    )
}

export default AccordionList