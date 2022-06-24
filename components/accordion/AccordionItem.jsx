import React from 'react'
import {useTranslation} from 'react-i18next'

const AccordionItem = ({item}) => {
    const {t} = useTranslation()

    const {question, answer} = item

    

    
    return (
        <>
                <div className="accordion-item">
                    <h2 className="accordion-header" id={`flush-heading-${item.id}`}>
                        <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse-${item.id}`} aria-expanded="false" aria-controls={`flush-collapse-${item.id}`}>
                           {t(`${question}`)}
                        </button>
                    </h2>
                    <div id={`flush-collapse-${item.id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading-${item.id}`} data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body"> {t(answer)}</div>
                    </div>
                </div>
        </>
    )
}

export default AccordionItem