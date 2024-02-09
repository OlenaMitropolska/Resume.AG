import React, { useState } from 'react'

function Career() {

    const careerData = [{
        "id": 0,
        "position": "Senior Consultant in der prüfungsnahen Beratung von Banken und Finanzdienstleistern.",
        "focus": "Beratungsschwerpunkt: Bilanzierung und Bewertung von Handelsgeschäften sowie regulatorische Anforderungen an Handelsgeschäfte und das Risikomanagement.",
        "reference": [{
            "head": "Projektreferenzen:",
            "first": "Durchführung der Prüfung nach WpHG mit Schwerpunkt auf Algorithmischen Handel bei einer internationalen Investmentbank",
            "second": "Unterstützung eines Kreditinstituts als externer Mitarbeiter im Bereich Treasury sowie Beratung hinsichtlich der Optimierung des implementierten Prozessumfeldes"
        }],
        "date": "01.09.2022 bis heute"
    },{
        "id": 1,
        "position": "Assistent in der Wirtschaftsprüfung bei der Ernst & Young GmbH Wirtschaftsprüfungsgesellschaft im Bereich Assurance Banking",
        "reference": [{
            "head": "Tätigkeiten:",
            "description": "Durchführung der Jahresabschlussprüfung bei Großbanken, einer Privatbank sowie einer Leasinggesellschaft mit Fokus insbesondere auf:",
            "first": "Prüfung der handelsrechtlichen Abbildung von Handelsgeschäften nach HGB und IFRS einschließlich der einschlägigen Bewertungsvorschriften unter anderem für Festverzinsliche Wertpapiere, Aktien, OTC- sowie börsengehandelte Derivate und strukturierte Produkte.",
            "second": "Prüfung der Rechnungslegung nach HGB und IFRS unter anderem in den Bereichen Kreditgeschäft, Provisionsgeschäft, Leasingergebnis und Rückstellungen.",
            "third": "Beurteilung der Einhaltung von regulatorischen Anforderungen insbesondere in den Bereichen Handelsgeschäfte, Risikomanagement, Geldwäscheprävention, Compliance, Auslagerungen, Interne Revision und der CSDR Verordnung",
            "fourth": "Analyse und Prüfung des Prozessumfelds und der internen Kontrollsysteme insbesondere im Bereich Eigenhandel und Treasury"
        }],
        "date": "10/2019 bis 31.08.2022"
    },{
        "id": 2,
        "position": "Praktikum bei der Ernst & Young GmbH Wirtschaftsprüfungsgesellschaft im Bereich Assurance Banking",
        "reference": [{
            "head": "Tätigkeiten:",
            "description": " Unterstützung bei der Durchführung von Jahresabschlussprüfungen bei einem Kreditinstitut und einem Vermögensverwalter, insbesondere in den folgenden Bereichen:",
            "first": "Durchführung einer Krediteinzelfallprüfung",
            "second": "Prüfung der Einhaltung der Vorschriften aus dem Geldwäschegesetz und der MaRisk",
            "third": "Analyse und Prüfung des Prozessumfelds und der Internen Kontrollsysteme",
            "fourth": "Prüfung der Rechnungslegung nach HGB und IFRS insbesondere in den Bereichen Forderungen an Kunden, Anlagevermögen, allgemeiner Verwaltungsaufwand, Eigenkapital, sonstige Vermögensgegenstände, sonstige Verbindlichkeiten und Rückstellungen"
        }],
        "date": "11/2017 bis 03/2018"
    },
]

const [currentPage, setCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(1);
const totalPages = Math.ceil(careerData.length / itemsPerPage);
const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
const displayedItems = careerData.slice(startIndex, endIndex);


  return (
    <div className='careerMain'>
      {/* head part */}
<div className='careerHeadDiv'>
    <p>Capital Markets | Risk Management | Regulatory | Banking | Finance | Audit | Consulting </p>
</div>
{/* head part end */}

<div className='careerContent '>
<div className='mapWithPagination'>

<div className="pagination">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={pageNumber === currentPage ? "active" : ""}
        >
          {pageNumber}
        </button>
      ))}
    </div>
    
    {displayedItems.map((item) => (
     <div className='careerMap'>
     <h1>{item.position}</h1>
   <hr />
     <p>{item.focus}</p>
     {/* start of collapse */}
     <div className='responsibilitiesCareer'>
         {item.reference.map(k =>
         <div className="collapse">
<input type="checkbox" /> 
<div className="collapse-title text-xl font-medium">
{k.head}
</div>
<div className="collapse-content"> 
<li>{k.first}</li>
<li>{k.second}</li>
<li>{k.third}</li>
<li>{k.fourth}</li>
</div>
</div>
 )}
 </div>
 {/* end of collapse */}
 </div>
    ))}

  </div>


</div>

    </div>
  )
}

export default Career