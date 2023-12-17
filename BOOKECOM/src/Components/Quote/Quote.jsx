import React from 'react'
import './Quote.css'

import TitileTypeTwo from '../../UI/TitileTypeTwo/TitileTypeTwo'

import { quoteData } from '../../Data/Data'

function Quote() {
    return (
        <section className='Quote'>
            <div className="container quote-container">
                <TitileTypeTwo Title={'Quote of the day'} className="quote-title" />

                {
                    quoteData.map(({ quote, speaker }, index) => {
                        return (
                            <article key={index}>
                                <p>{quote}</p>
                                <h5>{speaker}</h5>

                            </article>
                        )

                    })
                }

            </div>
        </section>
    )
}

export default Quote