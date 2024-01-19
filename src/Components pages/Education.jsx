import React from 'react'

function Education() {
    const data = [{
        "id": 0,
        "name": "Technische Universität Chemnitz",
        "major": "M.Sc. Finance",
        "date": "10 / 2016 – heute"
    },{
        "id": 1,
        "name": "Friedrich-Alexander-Universität Erlangen-Nürnberg",
        "major": "Abschluss: B.A. Wirtschaftswissenschaften mit Schwerpunkt Betriebswirtschaftslehre",
        "date": "04 / 2012 – 03 / 2016"
    },{
        "id": 2,
        "name": "Friedrich-Alexander-Universität Erlangen-Nürnberg",
        "major": "B.Sc. Elektrotechnik-Elektronik-Informationstechnik",
        "date": "10 / 2011 – 03 / 2012"
    },{
        "id": 3,
        "name": "Willstätter-Gymnasium Nürnberg",
        "major": "Abschluss: Allgemeine Hochschulreife",
        "date": "09 / 2003 – 07 / 2011"
    }, 
]



  return (
    <div className='ausbildungPageMain'>
             <div className='ausbildungPageHead'>
           <h1>EDUCATION</h1>
             </div>

        <div className='ausbildungPageMap'>
        {data.map((i,j )=> 
<div className='ausbildungMap' key={j}> 
<h2>{i.date}</h2>
<p className='h-1/5'>{i.name}</p>
<p className='h-1/5'>{i.major}</p>
</div>    
        )}
            </div>

    </div>
  )
}

export default Education